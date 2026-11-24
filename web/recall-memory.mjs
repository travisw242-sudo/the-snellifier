import { files, legalMove } from './chess.mjs';

export const recallInterval = 86_400_000;

export const masteryLabels = {
  mastered: 'Mastered',
  work: 'Needs work',
  learning: 'Building recall',
};

const positionKeys = new WeakMap();

function enPassantTarget(position, side) {
  if (!position.enPassant) return '-';
  const file = files.indexOf(position.enPassant[0]);
  const rank = side === 'w' ? '5' : '4';
  const possible = [files[file - 1], files[file + 1]].some(adjacent => {
    if (!adjacent) return false;
    const from = adjacent + rank;
    return position.board[from] === side + 'p' && legalMove(position, from, position.enPassant);
  });
  return possible ? position.enPassant : '-';
}

function positionKey(line, ply) {
  let keys = positionKeys.get(line);
  if (!keys) {
    keys = [];
    positionKeys.set(line, keys);
  }
  if (!keys[ply]) {
    const position = line.positions[ply];
    const { board, castle } = position;
    const pieces = Object.entries(board).sort().map(([square, piece]) => square + piece).join('');
    const { from, to } = line.moves[ply];
    keys[ply] = `${pieces}/${castle}/${enPassantTarget(position, line.side)}/${from}${to}`;
  }
  return keys[ply];
}

function positionMemory(progress, line) {
  const positions = [];
  for (let ply = line.start; ply < line.moves.length; ply += 2) {
    const record = progress.memory.positions[positionKey(line, ply)];
    if (record) positions.push(record);
  }
  return positions;
}

function latestMiss(positions) {
  return positions.reduce((latest, position) => Math.max(latest, position.lastMiss), 0);
}

function recordCleanProof(evidence, lastMiss, now) {
  if (!evidence.firstCleanAt || evidence.firstCleanAt <= lastMiss) {
    evidence.firstCleanAt = now;
    evidence.confirmedAt = 0;
  } else if (now - evidence.firstCleanAt >= recallInterval && !evidence.confirmedAt) {
    evidence.confirmedAt = now;
  }
}

export function recordMoveRecall(progress, line, ply, outcome, attempt, now = Date.now()) {
  if (attempt.has(outcome) || (outcome === 'correct' && attempt.size)) return false;
  const key = positionKey(line, ply);
  const memory = progress.memory;
  const record = memory.positions[key] ??= {
    lineId: line.id,
    ply,
    attempts: 0,
    correct: 0,
    wrong: 0,
    hint: 0,
    reveal: 0,
    misses: 0,
    firstCleanAt: 0,
    confirmedAt: 0,
    lastMiss: 0,
  };
  memory.lines[line.id] ??= {};
  if (outcome !== 'correct') {
    record.lineId = line.id;
    record.ply = ply;
  }
  if (!attempt.size) {
    record.attempts++;
    if (outcome !== 'correct') record.misses++;
  }
  attempt.add(outcome);
  record[outcome]++;
  record.lastAttemptAt = now;

  if (outcome === 'correct') recordCleanProof(record, record.lastMiss, now);
  else {
    record.lastMiss = now;
    record.firstCleanAt = 0;
    record.confirmedAt = 0;
  }
  return true;
}

export function recordCleanLine(progress, line, now = Date.now()) {
  const revision = line.revision ?? 0;
  let record = progress.memory.lines[line.id];
  if (!record || (record.revision ?? 0) !== revision) {
    record = progress.memory.lines[line.id] = { revision };
  }
  recordCleanProof(record, latestMiss(positionMemory(progress, line)), now);
}

export function lineMastery(progress, line) {
  const evidence = progress.memory.lines[line.id];
  if (!evidence && !progress.lines[line.id]?.count) return null;
  const positions = positionMemory(progress, line);
  if ((evidence?.revision ?? 0) === (line.revision ?? 0) && evidence?.confirmedAt > latestMiss(positions)) return 'mastered';
  if (positions.some(needsPractice)) return 'work';
  return 'learning';
}

function needsPractice(record) {
  return record.lastMiss > 0 && record.confirmedAt <= record.lastMiss;
}

export function mixedRecallPositions(progress, lines) {
  const positions = new Map();
  for (const line of lines) {
    const completion = progress.lines[line.id];
    if (!completion?.count) continue;
    const revision = line.revision ?? 0;
    const completionMatches = (completion.revision ?? 0) === revision
      || progress.memory.lines[line.id]?.revision === revision;
    for (let ply = line.start; ply < line.moves.length; ply += 2) {
      const key = positionKey(line, ply);
      const record = progress.memory.positions[key];
      if (!completionMatches && !record?.attempts) continue;
      const boardKey = line.side + key.slice(0, key.lastIndexOf('/'));
      const { from, to } = line.moves[ply];
      const moveKey = from + to;
      if (!positions.has(boardKey)) positions.set(boardKey, new Map());
      const answers = positions.get(boardKey);
      if (!answers.has(moveKey)) {
        answers.set(moveKey, {
          line, ply, from, to,
          mastered: (record?.confirmedAt ?? 0) > (record?.lastMiss ?? 0),
          lastSeen: Math.max(record?.lastAttemptAt ?? 0, record?.firstCleanAt ?? 0, record?.confirmedAt ?? 0,
            record?.lastMiss ?? 0, completion.lastCompletedAt ?? 0),
        });
      }
    }
  }
  return [...positions.values()].map(answers => [...answers.values()]);
}

export function mixedRecallQuestions(positions, masteredOnly, now = Date.now()) {
  const candidates = positions.flatMap(answers => {
    const eligible = masteredOnly ? answers.filter(answer => answer.mastered) : answers;
    if (!eligible.length) return [];
    const prompt = eligible[Math.floor(Math.random() * eligible.length)];
    const lastSeen = Math.max(...answers.map(answer => answer.lastSeen));
    const priority = lastSeen ? Math.min(7, Math.floor((now - lastSeen) / recallInterval)) : 1;
    const opening = prompt.line.courseId ?? prompt.line.parentId ?? prompt.line.id;
    return [{ prompt, answers, priority, opening, order: Math.random() }];
  }).sort((a, b) => b.priority - a.priority || a.order - b.order);
  const questions = [];
  while (questions.length < 10 && candidates.length) {
    const previous = questions.at(-1);
    const different = candidates.findIndex(candidate => candidate.priority >= candidates[0].priority - 1
      && candidate.opening !== previous?.opening);
    questions.push(candidates.splice(Math.max(0, different), 1)[0]);
  }
  return questions;
}

export function recallOverview(progress, lines) {
  const entries = Object.entries(progress.memory.positions);
  const byId = lines && new Map(lines.map(line => [line.id, line]));
  const attempts = entries.reduce((sum, [, record]) => sum + record.attempts, 0);
  const correct = entries.reduce((sum, [, record]) => sum + record.correct, 0);
  const missed = entries.filter(([key, record]) => {
    if (!record.misses) return false;
    if (!byId) return true;
    const line = byId.get(record.lineId);
    return line && record.ply >= line.start && record.ply < line.moves.length
      && (record.ply - line.start) % 2 === 0 && positionKey(line, record.ply) === key;
  }).map(([, record]) => record)
    .sort((a, b) => b.wrong - a.wrong || b.misses - a.misses || b.lastMiss - a.lastMiss);
  return {
    attempts,
    correct,
    missed: missed.filter(needsPractice),
    recovered: missed.filter(record => !needsPractice(record)),
  };
}
