import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import test from 'node:test';
import { legalMove } from '../web/chess.mjs';
import { courseLessons } from '../web/course-ui.mjs';
import { courses, trainingLines } from '../web/openings.mjs';
import { mixedRecallPositions, recordMoveRecall } from '../web/recall-memory.mjs';

test('the web entry point and chess pieces resolve from the source directory', async () => {
  const root = new URL('../web/', import.meta.url);
  const html = await readFile(new URL('index.html', root), 'utf8');
  assert.match(html, /<title>The Snellifier/);
  const resources = [...html.matchAll(/(?:src|href)="(\.\/[^"]+)"/g)].map(([, path]) => path);
  assert.ok(resources.includes('./app.mjs'));
  for (const color of ['w', 'b']) {
    for (const piece of 'prnbqk') resources.push(`./pieces/${color}${piece}.png`);
  }
  await Promise.all(resources.map(path => access(new URL(path, root))));
});

test('all training lines have unique IDs and legal annotated moves', () => {
  assert.ok(trainingLines.length > 0);
  assert.equal(new Set(trainingLines.map(line => line.id)).size, trainingLines.length);

  for (const line of trainingLines) {
    assert.ok(line.drillLength > 0, line.id);
    assert.equal(line.positions.length, line.moves.length + 1, line.id);
    assert.equal(line.side, line.start % 2 ? 'b' : 'w', line.id);

    for (const [ply, move] of line.moves.entries()) {
      const position = line.positions[ply];
      const label = `${line.id}, ply ${ply + 1}`;
      assert.equal(position.board[move.from]?.[0], ply % 2 ? 'b' : 'w', label);
      assert.ok(legalMove(position, move.from, move.to), label);
      assert.ok(move.san && move.idea, label);
    }
  }
});

test('course tracks increase in depth and the full track includes every lesson', () => {
  assert.ok(courses.length > 0);
  for (const course of courses) {
    let previous = 0;
    for (const track of course.tracks) {
      const lessons = courseLessons(course, track.id);
      assert.equal(lessons.length, track.lines, course.id);
      assert.ok(lessons.length > previous, course.id);
      previous = lessons.length;
    }
    assert.equal(previous, course.lessons.length, course.id);
  }
});

test('mixed recall draws from completed drills and requires spaced proof for mastery', () => {
  const [line] = trainingLines;
  const progress = { lines: {}, memory: { positions: {}, lines: {} } };
  const day = 86_400_000;

  recordMoveRecall(progress, line, line.start, 'correct', new Set(), day);
  assert.equal(mixedRecallPositions(progress, [line]).length, 0);

  progress.lines[line.id] = { count: 1, revision: line.revision ?? 0 };
  assert.equal(mixedRecallPositions(progress, [line]).length, line.drillLength);
  assert.equal(mixedRecallPositions(progress, [line]).flat().filter(move => move.mastered).length, 0);

  recordMoveRecall(progress, line, line.start, 'correct', new Set(), day * 2);
  assert.equal(mixedRecallPositions(progress, [line]).flat().filter(move => move.mastered).length, 1);
});
