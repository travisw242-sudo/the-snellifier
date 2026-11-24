import { files, legalMove, names, sides, squares } from './chess.mjs';
import { openings, trainingLines, variationsByOpening, courses } from './openings.mjs';
import { replySamples } from './data/reply-samples.mjs';
import { courseTrack, courseLessons, nextCourseLesson, renderCourseCatalog, renderCourseOutline } from './course-ui.mjs';
import { lineMastery, masteryLabels, mixedRecallPositions, mixedRecallQuestions, recallInterval as day, recallOverview, recordCleanLine, recordMoveRecall } from './recall-memory.mjs';
import { enablePieceDragging } from './board-drag.mjs';

const icons = {
  shuffle: '<path d="M3 6h3c5 0 7 12 12 12h3m-4-4 4 4-4 4M3 18h3c1.7 0 3-1.5 4-3.5m4-5C15 7.5 16.3 6 18 6h3m-4-4 4 4-4 4"/>',
  target: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1"/>',
  book: '<path d="M12 7v14M3 3h4a5 5 0 0 1 5 5 5 5 0 0 1 5-5h4v15h-4a5 5 0 0 0-5 3 5 5 0 0 0-5-3H3z"/>',
  repeat: '<path d="m17 2 4 4-4 4M3 11V9a3 3 0 0 1 3-3h15M7 22l-4-4 4-4m14-1v2a3 3 0 0 1-3 3H3"/>',
  branch: '<circle cx="6" cy="5" r="2"/><circle cx="6" cy="19" r="2"/><circle cx="18" cy="5" r="2"/><path d="M6 7v10m0-3h5a7 7 0 0 0 7-7"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 5v2"/>',
  chart: '<path d="M4 4v16h17M9 16v-4m5 4V8m5 8V4"/>',
  flag: '<path d="M5 22V3c5-4 9 4 15 0v12c-6 4-10-4-15 0"/>',
  keyboard: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M6 9h.01M10 9h.01M14 9h.01M18 9h.01M6 13h.01M10 13h.01M14 13h.01M18 13h.01M8 16h8"/>',
  chevron: '<path d="m9 6 6 6-6 6"/>',
  flame: '<path d="M12 22c-4 0-7-3-7-7 0-3 1.6-5 3-6 0 3 2 3 2 3s3-3 2-9c4 3 7 7 7 12 0 4-3 7-7 7Z"/><path d="M12 22c-1.7 0-3-1.3-3-3 0-1.5 1.5-2.8 3-4 1.5 1.2 3 2.5 3 4 0 1.7-1.3 3-3 3Z"/>',
  zap: '<path d="m13 2-9 12h7l-1 8 10-12h-7z"/>',
  flip: '<path d="M8 20V4M4 8l4-4 4 4m4-4v16m-4-4 4 4 4-4"/>',
  restart: '<path d="M3 12a9 9 0 1 1 2.7 6.4M3 5v7h7"/>',
  sparkles: '<path d="M12 2c0 6 2 8 8 9-6 1-8 3-8 9-1-6-3-8-9-9 6-1 8-3 9-9ZM20 2v4m-2-2h4M5 17v5m-2.5-2.5h5"/>',
  bulb: '<path d="M9 18h6m-6 4h6m-3-20a6 6 0 0 0-4 10c1 1 1.5 2 1.5 3h5c0-1 .5-2 1.5-3a6 6 0 0 0-4-10Z"/>',
  layers: '<path d="m12 3 9 5-9 5-9-5 9-5Zm-9 9 9 5 9-5M3 16l9 5 9-5"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  warning: '<circle cx="12" cy="12" r="9"/><path d="M12 8v5m0 3h.01"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
};

const icon = name => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">${icons[name]}</svg>`;
const $ = id => document.getElementById(id);
for (const element of document.querySelectorAll('[data-icon]')) element.innerHTML = icon(element.dataset.icon);

const storageKey = 'opening-lab-progress-v1';
const reviewIntervals = [1, 3, 7, 14, 30];
const pages = { practice: 'Practice', library: 'Opening library', variations: 'Variations', courses: 'Courses', review: 'Review queue', mixed: 'Mixed recall', progress: 'My progress' };
const dateFormat = new Intl.DateTimeFormat(undefined, { month: 'short', day: 'numeric' });
const sampleNumber = new Intl.NumberFormat();
const replyShare = new Intl.NumberFormat(undefined, { style: 'percent', maximumFractionDigits: 1 });
const reviewTimeFormat = new Intl.DateTimeFormat(undefined, { hour: 'numeric', minute: '2-digit' });
const defaultStats = () => ({ xp: 0, days: {}, lines: {}, courseTracks: {}, memory: { positions: {}, lines: {} }, lastLine: openings[0].id });
function readStats() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    return saved ? { ...defaultStats(), ...saved } : defaultStats();
  } catch {
    return defaultStats();
  }
}
const stats = readStats();
let line = trainingLines.find(opening => opening.id === stats.lastLine) ?? openings[0];
let page = 'practice';
let filter = 'all';
let mode = 'recall';
let orientation = line.side;
let cursor = line.start;
let focusSquare = 'e4';
let selected = null;
let destinations = [];
let hintLevel = 0;
let wrongSquare = null;
let assisted = false;
let mistakes = 0;
let firstTry = 0;
const moveAttempt = new Set();
let focusedPly = null;
let renderedBoard;
let completed = false;
let busy = false;
let replyTimer = null;
let reviewSession = false;
let mixedRound = null;
let feedback = initialFeedback();

function saveStats() {
  try { localStorage.setItem(storageKey, JSON.stringify(stats)); } catch { /* Keep the current session playable. */ }
}

function dateKey(date) {
  return [date.getFullYear(), date.getMonth() + 1, date.getDate()].join('-');
}

function activeStreak() {
  const date = new Date();
  if (!stats.days[dateKey(date)]) date.setDate(date.getDate() - 1);
  let count = 0;
  while (stats.days[dateKey(date)]) {
    count++;
    date.setDate(date.getDate() - 1);
  }
  return count;
}

function dueLines(now = Date.now()) {
  return trainingLines.filter(opening => (stats.lines[opening.id]?.due ?? Infinity) <= now)
    .sort((a, b) => stats.lines[a.id].due - stats.lines[b.id].due);
}

function updateMetrics() {
  const today = stats.days[dateKey(new Date())] ?? 0;
  $('streak').textContent = activeStreak();
  $('xp').textContent = stats.xp;
  $('due-count').textContent = dueLines().length;
  $('goal-count').textContent = `${Math.min(today, 3)} / 3`;
  $('daily-meter').setAttribute('aria-valuenow', Math.min(today, 3));
  $('daily-meter').firstElementChild.style.width = `${Math.min(today / 3, 1) * 100}%`;
}

function initialFeedback() {
  if (focusedPly !== null) {
    return { title: 'Recall this move', text: 'Find the repertoire move for this position.', icon: 'target' };
  }
  if (line.courseId) {
    return { title: 'Recall your response', text: `Play ${sides[line.side]}’s continuation from this lesson position.`, icon: 'target' };
  }
  return line.pivot
    ? { title: 'Find the continuation', text: 'The board is set at your first turn after the branch.', icon: 'target' }
    : { title: 'Find the next move', text: 'Play the next move in the line from memory.', icon: 'sparkles' };
}

function variationsUnlocked(openingId) {
  return (stats.lines[openingId]?.count ?? 0) > 0;
}

function branchPoint(variation) {
  const { ownMove, move, next, playedBy, main } = variation.pivot;
  return ownMove ? `After you play ${move} and face ${next}` : `${playedBy} plays ${move} instead of ${main}`;
}

function recordCompletion() {
  const previous = stats.lines[line.id] ?? { count: 0, stage: 0, due: 0, clean: 0 };
  const now = Date.now();
  const clean = mistakes === 0 && !assisted;
  if (clean) recordCleanLine(stats, line, now);
  const stage = clean
    ? Math.min(reviewIntervals.length, previous.stage + Number(previous.due <= now))
    : Math.max(previous.stage - 1, 0);
  const due = clean
    ? (previous.due > now ? previous.due : now + day * reviewIntervals[stage - 1])
    : Math.min(previous.due > now ? previous.due : Infinity, now + day / 2);
  stats.lines[line.id] = { stage, due, count: previous.count + 1, clean: previous.clean + Number(clean),
    lastCompletedAt: now, revision: line.revision ?? 0 };
  const today = dateKey(new Date());
  stats.days[today] = (stats.days[today] ?? 0) + 1;
  const earned = clean ? 20 : 10;
  stats.xp += earned;
  saveStats();
  updateMetrics();
  return { earned, clean, due };
}

function reset(newMode = mode, studyPosition) {
  clearTimeout(replyTimer);
  mode = newMode;
  cursor = mode === 'study' ? (studyPosition ?? focusedPly ?? line.at ?? 0) : (focusedPly ?? line.start);
  busy = false;
  completed = false;
  mistakes = 0;
  firstTry = 0;
  moveAttempt.clear();
  renderedBoard = undefined;
  assisted = false;
  clearSelection();
  feedback = initialFeedback();
  renderPractice();
}

function clearSelection() {
  selected = null;
  destinations = [];
  hintLevel = 0;
  wrongSquare = null;
}

function selectLine(opening, trainingMode, isReview = false, studyPosition, recallPosition = null) {
  if (!opening || (opening.parentId && !variationsUnlocked(opening.parentId))) return;
  const focused = Number.isInteger(recallPosition)
    && recallPosition >= opening.start && recallPosition < opening.moves.length
    && (recallPosition - opening.start) % 2 === 0;
  line = opening;
  focusedPly = focused ? recallPosition : null;
  reviewSession = isReview;
  orientation = opening.side;
  if (!focused) {
    stats.lastLine = opening.id;
    saveStats();
  }
  reset(trainingMode, studyPosition);
  if (location.hash !== '#practice') location.hash = 'practice';
  else window.scrollTo(0, 0);
}

function renderPage() {
  boardDrag.cancel();
  const [requested, openingId] = location.hash.slice(1).split('/');
  const selectedOpening = requested === 'variations' ? openings.find(opening => opening.id === openingId) : null;
  const previousPage = page;
  page = Object.hasOwn(pages, requested) ? requested : 'practice';
  if (page === 'variations' && !selectedOpening) page = 'library';
  const mixedQuestion = activeMixedQuestion();
  if (page !== previousPage && (page === 'mixed' || previousPage === 'mixed')) {
    clearSelection();
    renderedBoard = undefined;
  }
  const visiblePage = mixedQuestion ? 'practice' : page;
  for (const id of Object.keys(pages)) $(id + '-page').hidden = id !== visiblePage;
  $('practice-heading').hidden = $('practice-controls').hidden = Boolean(mixedQuestion);
  $('mixed-heading').hidden = $('mixed-controls').hidden = !mixedQuestion;
  for (const link of document.querySelectorAll('nav [data-page]')) {
    if (link.dataset.page === (page === 'variations' ? 'library' : page)) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  $('breadcrumb').textContent = pages[page];
  updateMetrics();
  if (page === 'practice') renderPractice();
  if (page === 'library') renderLibrary();
  if (page === 'variations') renderVariations(selectedOpening);
  if (page === 'courses') {
    const course = courses.find(item => item.id === openingId);
    $('course-content').innerHTML = course ? renderCourseOutline(course, stats) : renderCourseCatalog(courses, stats);
  }
  if (page === 'review') renderReview();
  if (page === 'mixed') {
    if (mixedQuestion) renderMixedQuestion(mixedQuestion);
    else renderMixedLanding();
  }
  if (page === 'progress') renderProgress();
}

function activeMixedQuestion() {
  return page === 'mixed' ? mixedRound?.questions[mixedRound.index] : null;
}

function boardView() {
  const question = activeMixedQuestion();
  if (!question) return { line, cursor, orientation, movable: mode === 'recall' && !busy && !completed };
  const result = mixedRound.results[mixedRound.index];
  const answer = result?.answer ?? question.prompt;
  return { line: answer.line, cursor: answer.ply + Number(Boolean(result)), orientation: mixedRound.orientation, movable: !result, blind: !result };
}

function boardOrder(orientation = boardView().orientation) {
  return {
    columns: orientation === 'w' ? [...files] : [...files].reverse(),
    rows: orientation === 'w' ? [...'87654321'] : [...'12345678'],
  };
}

function renderBoard() {
  boardDrag.cancel();
  const { line, cursor, orientation, movable, blind } = boardView();
  const boardElement = $('board');
  const regainFocus = boardElement.contains(document.activeElement);
  const previous = renderedBoard;
  renderedBoard = { line, orientation, cursor };
  const position = line.positions[cursor];
  const last = blind ? null : line.moves[cursor - 1];
  const expected = line.moves[cursor];
  const { columns, rows } = boardOrder(orientation);
  boardElement.innerHTML = rows.map((rank, row) => columns.map((file, column) => {
    const square = file + rank;
    const piece = position.board[square];
    const editable = movable && piece?.[0] === line.side;
    const classes = ['square'];
    if ((row + column) % 2) classes.push('dark');
    if (piece) classes.push('occupied');
    if (editable) classes.push('movable');
    if (last?.from === square || last?.to === square) classes.push('last');
    if (square === selected) classes.push('selected');
    if (destinations.includes(square)) classes.push('destination');
    if (hintLevel && (square === expected?.from || (hintLevel > 1 && square === expected?.to))) classes.push('hinted');
    if (square === wrongSquare) classes.push('wrong');
    const image = piece ? `<img class="piece" src="./pieces/${piece}.png" alt="" draggable="false">` : '';
    const label = piece ? `${square}, ${sides[piece[0]]} ${names[piece[1]]}` : `${square}, empty`;
    const coords = (column === 0 ? `<span class="coord rank" aria-hidden="true">${rank}</span>` : '')
      + (row === 7 ? `<span class="coord file" aria-hidden="true">${file}</span>` : '');
    return `<button type="button" class="${classes.join(' ')}" data-square="${square}" aria-label="${label}" aria-pressed="${square === selected}" tabindex="${square === focusSquare ? 0 : -1}">${image}${coords}</button>`;
  }).join('')).join('');
  if (regainFocus) boardElement.querySelector('[tabindex="0"]').focus({ preventScroll: true });
  if (previous?.line === line && previous.orientation === orientation && Math.abs(previous.cursor - cursor) === 1
    && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const move = line.moves[Math.min(cursor, previous.cursor)];
    const backward = cursor < previous.cursor;
    if (!previous.placedByPointer) {
      animateMove(boardElement, columns, rows, backward ? move.to : move.from, backward ? move.from : move.to);
    }
    if (move.san === 'O-O' || move.san === 'O-O-O') {
      const kingSide = move.san === 'O-O';
      const rookFrom = (kingSide ? 'h' : 'a') + move.from[1];
      const rookTo = (kingSide ? 'f' : 'd') + move.from[1];
      animateMove(boardElement, columns, rows, backward ? rookTo : rookFrom, backward ? rookFrom : rookTo);
    }
  }
}

function animateMove(boardElement, columns, rows, from, to) {
  const piece = boardElement.querySelector(`[data-square="${to}"] .piece`);
  if (!piece?.animate) return;
  const x = columns.indexOf(from[0]) - columns.indexOf(to[0]);
  const y = rows.indexOf(from[1]) - rows.indexOf(to[1]);
  const squareSize = piece.parentElement.offsetWidth;
  piece.animate(
    [{ transform: `translate(${x * squareSize}px, ${y * squareSize}px)`, zIndex: 2 }, { transform: 'translate(0, 0)', zIndex: 2 }],
    { duration: 185, easing: 'cubic-bezier(.2,.75,.3,1)' },
  );
}

function renderPractice() {
  if (page === 'mixed') return;
  renderBoard();
  const studying = mode === 'study';
  const sideToMove = cursor % 2 ? 'b' : 'w';
  const studyFinished = studying && cursor === line.moves.length;
  const focused = focusedPly !== null;
  $('turn-dot').className = completed || studyFinished ? 'finished' : sideToMove === 'b' ? 'black' : '';
  $('turn-label').textContent = completed || studyFinished ? (focused && !studying ? 'Move complete' : 'Line complete') : `${sides[sideToMove]} to move`;
  $('board-side').textContent = studying ? 'Study mode' : `You play ${sides[line.side]}`;
  const boardInstruction = $('board-instruction');
  boardInstruction.textContent = studying
    ? (cursor ? formatMove(cursor - 1) : 'Step through the line in Study mode')
    : feedback.boardText ?? 'Click or drag a piece to move';
  boardInstruction.dataset.tone = studying ? '' : feedback.tone ?? '';
  $('line-title').textContent = line.title;
  $('line-variation').textContent = line.variation;
  const currentCourse = courses.find(item => item.id === line.courseId);
  const lineLabel = focused ? 'FOCUSED PRACTICE' : reviewSession ? 'SPACED REVIEW' : currentCourse ? 'COURSE LESSON' : line.parentId ? 'VARIATION' : 'MAIN LINE';
  $('line-code').textContent = currentCourse ? lineLabel : `${line.code} · ${lineLabel}`;
  $('course-drill-strip').hidden = !currentCourse;
  if (currentCourse) {
    let lessons = courseLessons(currentCourse, courseTrack(currentCourse, stats));
    if (!lessons.includes(line)) lessons = currentCourse.lessons;
    $('course-drill-position').textContent = `Lesson ${lessons.indexOf(line) + 1} of ${lessons.length}`;
    $('course-outline-link').setAttribute('href', `#courses/${currentCourse.id}`);
  }
  $('course-recall').hidden = !currentCourse || focused || !studyFinished;
  $('branch-context').hidden = !line.parentId;
  if (line.parentId) {
    $('branch-heading').textContent = branchPoint(line);
    $('branch-plan').textContent = line.description;
    $('branch-plan').hidden = !studying;
    $('branch-back').setAttribute('href', `#variations/${line.parentId}`);
  }
  document.querySelector('.drill-heading img').src = `./pieces/${line.side}${line.icon}.png`;
  $('recall').setAttribute('aria-pressed', !studying);
  $('study').setAttribute('aria-pressed', studying);
  const total = studying ? line.moves.length : focused ? 1 : line.drillLength;
  const done = studying ? cursor : Math.min(total, Math.ceil((cursor - (focusedPly ?? line.start)) / 2));
  $('progress-label').textContent = studying ? 'Line progress' : 'Drill progress';
  $('progress-count').textContent = `${done} / ${total} ${total === 1 ? 'move' : 'moves'}`;
  $('segments').innerHTML = Array.from({ length: total }, (_, i) => `<span class="${i < done ? 'done' : i === done ? 'current' : ''}"></span>`).join('');
  const currentFeedback = studying
    ? {
        title: cursor ? formatMove(cursor - 1) : 'Study the full line',
        text: cursor ? line.moves[cursor - 1].idea : 'Step through the moves to see the idea behind each one.',
        icon: 'book',
      }
    : feedback;

  if ($('feedback-title').textContent !== currentFeedback.title || $('feedback-text').textContent !== currentFeedback.text) {
    $('feedback-title').textContent = currentFeedback.title;
    $('feedback-text').textContent = currentFeedback.text;
    $('feedback-icon').innerHTML = icon(currentFeedback.icon);
  }
  $('feedback').dataset.tone = currentFeedback.tone ?? '';
  $('switch-variation').hidden = !currentFeedback.branchId;
  if (currentFeedback.branchId) $('switch-variation').dataset.line = currentFeedback.branchId;
  else delete $('switch-variation').dataset.line;
  const hintLabel = hintLevel ? 'Show destination' : 'Show hint';
  $('hint-label').textContent = hintLabel;
  $('quick-hint').setAttribute('aria-label', hintLabel);
  $('quick-hint').title = hintLabel;
  $('quick-hint').hidden = studying || completed;
  $('restart').hidden = false;
  $('hint').disabled = busy || hintLevel >= 2;
  $('quick-hint').disabled = $('hint').disabled;
  $('reveal').disabled = busy;
  $('recall-actions').hidden = studying || completed;
  $('study-actions').hidden = !studying;
  $('complete-actions').hidden = !completed;
  $('drill-summary').hidden = !completed || focused;
  $('feedback').classList.toggle('celebrate', completed);
  $('explore-variations').hidden = !completed || Boolean(line.parentId) || Boolean(currentCourse) || reviewSession || focused;
  $('explore-variations').setAttribute('href', `#variations/${line.id}`);
  $('next-line').textContent = focused ? 'Back to progress' : reviewSession
    ? (dueLines().length === 0 ? 'Review queue' : 'Next review')
    : currentCourse ? (nextCourseLesson(courseLessons(currentCourse, courseTrack(currentCourse, stats)), stats, line.id) ? 'Next lesson' : 'Course outline')
      : 'Next opening';
  $('next-line').classList.toggle('primary', $('explore-variations').hidden);
  $('next-line').classList.toggle('secondary', !$('explore-variations').hidden);
  $('previous').disabled = cursor === 0;
  $('next').disabled = studyFinished;
  renderHistory(studying);
  $('study-guide').hidden = !studying;
  $('study-continuation').hidden = !studying || cursor === 0;
  if (studying) renderStudyGuide();
}

function formatMove(ply, opening = line) {
  return `${Math.floor(ply / 2) + 1}${ply % 2 ? '…' : '.'} ${opening.moves[ply].san}`;
}

function renderStudyGuide() {
  $('white-plan').textContent = line.plans.w;
  $('black-plan').textContent = line.plans.b;
  $('study-moves').innerHTML = line.moves.map((move, ply) => `<li>
    <button type="button" data-study-step="${ply + 1}"${cursor === ply + 1 ? ' aria-current="step"' : ''}>
      <strong>${formatMove(ply)}</strong><span>${move.idea}</span>
    </button>
  </li>`).join('');
  if (cursor === 0) return;
  const move = line.moves[cursor - 1];
  const color = cursor % 2 ? 'w' : 'b';
  const followup = line.moves[cursor + 1];
  const continuationTitle = $('study-continuation-title');
  const continuationText = $('study-continuation-text');
  if (move.setup) {
    continuationTitle.textContent = 'What it sets up';
    continuationText.textContent = move.setup;
  } else if (followup) {
    continuationTitle.textContent = `How ${sides[color]} follows up`;
    continuationText.textContent = `${formatMove(cursor + 1)} · ${followup.idea}`;
  } else {
    continuationTitle.textContent = `${sides[color]}’s goal from here`;
    continuationText.textContent = line.plans[color];
  }
}

function renderHistory(studying) {
  const showNext = !studying && !completed && !busy;
  $('move-count').textContent = `${cursor} ${cursor === 1 ? 'half-move' : 'half-moves'}`;
  const visible = cursor + Number(showNext);
  const pairs = [];
  for (let ply = 0; ply < visible; ply += 2) {
    const tokens = line.moves.slice(ply, Math.min(ply + 2, visible)).map((move, offset) => {
      const index = ply + offset;
      if (index === cursor) return '<span class="move-token next-token" aria-label="Your next move">?</span>';
      const classes = [index === cursor - 1 ? 'latest' : '', index === line.at ? 'branch-move' : ''].filter(Boolean);
      return `<span class="move-token ${classes.join(' ')}"${index === line.at ? ' title="Branch point"' : ''}>${move.san}</span>`;
    });
    pairs.push(`<span class="move-pair"><span class="move-number">${ply / 2 + 1}.</span>${tokens.join('')}</span>`);
  }
  $('move-history').innerHTML = pairs.join('') || '<span class="board-caption">Starting position</span>';
}

function destinationsFor(square) {
  const { line, cursor } = boardView();
  const position = line.positions[cursor];
  return squares.filter(to => legalMove(position, square, to));
}

function selectSquare(square) {
  selected = square;
  destinations = destinationsFor(square);
  wrongSquare = null;
}

function clickSquare(square) {
  const { line, cursor, movable } = boardView();
  if (!movable) return;
  focusSquare = square;
  if (selected === square) {
    selected = null;
    destinations = [];
    renderBoard();
  } else if (line.positions[cursor].board[square]?.[0] === line.side) {
    selectSquare(square);
    renderBoard();
  } else if (selected) {
    tryMove(selected, square);
  }
}

function tryMove(from, to, placedByPointer = false) {
  const question = activeMixedQuestion();
  if (question) return tryMixedMove(question, from, to, placedByPointer);
  if (busy || completed || mode !== 'recall' || from === to) return false;
  const expected = line.moves[cursor];
  if (from === expected.from && to === expected.to) {
    if (placedByPointer) {
      renderedBoard.placedByPointer = true;
      focusSquare = to;
    }
    advance(false);
    return true;
  }
  const legal = legalMove(line.positions[cursor], from, to);
  if (legal) {
    mistakes++;
    trackMove('wrong');
  }
  selectSquare(from);
  wrongSquare = to;
  const knownBranch = legal && focusedPly === null && variationsByOpening[line.id]?.find(variation =>
    variation.at === cursor && variation.moves[cursor].from === from && variation.moves[cursor].to === to);
  if (knownBranch) {
    const unlocked = variationsUnlocked(line.id);
    feedback = {
      title: `That move leads to ${knownBranch.variation}`,
      text: unlocked ? 'Switch to practice what to play after the opponent replies.' : 'Finish one main-line drill to unlock this continuation.',
      tone: 'hint',
      icon: 'branch',
      boardText: 'Known variation',
      branchId: unlocked ? knownBranch.id : null,
    };
    wrongSquare = null;
  } else {
    feedback = legal
      ? { title: 'That’s a different line', text: 'Try another move for this variation, or show a hint.', tone: 'wrong', icon: 'warning', boardText: 'Different line · try again' }
      : { title: 'That move is unavailable', text: 'Choose a highlighted square or select a different piece.', tone: 'wrong', icon: 'warning', boardText: 'That move is unavailable' };
  }
  renderPractice();
  return false;
}

function trackMove(outcome) {
  if (recordMoveRecall(stats, line, cursor, outcome, moveAttempt)) saveStats();
}

function advance(reveal) {
  const move = line.moves[cursor];
  const moveLabel = formatMove(cursor);
  if (reveal) trackMove('reveal');
  else if (!moveAttempt.size) {
    firstTry++;
    trackMove('correct');
  }
  moveAttempt.clear();
  cursor++;
  clearSelection();
  const hasReply = cursor < line.moves.length;
  feedback = {
    title: reveal ? `Revealed ${moveLabel}` : `Correct · ${moveLabel}`,
    text: move.idea,
    icon: reveal ? 'bulb' : 'check',
    tone: reveal ? 'hint' : 'success',
    boardText: reveal ? `Revealed ${moveLabel}` : `Correct · ${moveLabel}`,
  };
  if (focusedPly !== null) {
    completed = true;
    renderPractice();
    return;
  }
  if (!hasReply) {
    completeDrill(move);
    return;
  }
  busy = true;
  renderPractice();
  replyTimer = setTimeout(() => {
    cursor++;
    busy = false;
    if (cursor === line.moves.length) completeDrill(move);
    else renderPractice();
  }, 420);
}

function completeDrill(lastMove) {
  completed = true;
  const { earned, clean, due } = recordCompletion();
  const headline = `${clean ? 'Perfect recall' : 'Line complete'} · +${earned} XP`;
  const dueDate = new Date(due);
  const sameDay = dateKey(dueDate) === dateKey(new Date());
  $('first-try-count').textContent = `${firstTry} / ${line.drillLength}`;
  $('next-review-date').textContent = sameDay ? reviewTimeFormat.format(dueDate) : dateFormat.format(dueDate);
  feedback = {
    title: headline,
    text: lastMove.idea,
    icon: clean ? 'sparkles' : 'check',
    tone: 'success',
    boardText: headline,
  };
  renderPractice();
  if (page === 'review') renderReview();
  if (page === 'progress') renderProgress();
}

function showHint() {
  if ($('hint').disabled || mode !== 'recall' || completed) return;
  assisted = true;
  trackMove('hint');
  hintLevel++;
  wrongSquare = null;
  const move = line.moves[cursor];
  const piece = names[line.positions[cursor].board[move.from][1]];
  feedback = hintLevel === 1
    ? { title: 'Look at the ' + piece, text: `Start with the ${piece} on ${move.from}.`, icon: 'bulb', tone: 'hint', boardText: `Hint · ${piece} on ${move.from}` }
    : { title: `Look at ${move.to}`, text: `Move the ${piece} from ${move.from} to ${move.to}.`, icon: 'bulb', tone: 'hint', boardText: `Hint · ${move.from} to ${move.to}` };
  renderPractice();
}

function nextLine() {
  if (focusedPly !== null) {
    location.hash = 'progress';
    return;
  }
  if (reviewSession) {
    const due = dueLines()[0];
    if (due) selectLine(due, 'recall', true);
    else location.hash = 'review';
    return;
  }
  const course = courses.find(item => item.id === line.courseId);
  if (course) {
    const next = nextCourseLesson(courseLessons(course, courseTrack(course, stats)), stats, line.id);
    if (next) selectLine(next, 'study');
    else location.hash = `courses/${course.id}`;
    return;
  }
  const index = openings.findIndex(opening => opening.id === (line.parentId ?? line.id));
  selectLine(openings[(index + 1) % openings.length], 'recall');
}

function renderMixedLanding() {
  const results = mixedRound?.results ?? [];
  $('mixed-setup').hidden = Boolean(results.length);
  $('mixed-results').hidden = !results.length;
  if (results.length) {
    const correct = results.filter(result => result.outcome === 'correct').length;
    const wrong = results.filter(result => result.outcome === 'wrong').length;
    $('mixed-score').textContent = `${correct} / ${results.length} on the first try`;
    const unplayed = mixedRound.questions.length - results.length;
    $('mixed-breakdown').textContent = [`${wrong} missed`, `${results.length - correct - wrong} revealed`,
      ...(unplayed ? [`${unplayed} unanswered`] : [])].join(' · ');
    const missed = results.filter(result => result.outcome !== 'correct');
    $('mixed-review').innerHTML = missed.length ? `
      <h2 class="section-heading">Positions to revisit</h2>
      <ul class="missed-list">${missed.map(({ answer: { line, ply }, outcome }) => `
        <li class="card missed-position mixed-review-item">
          <div class="missed-context"><strong>${formatMove(ply, line)} · ${outcome === 'wrong' ? 'Missed' : 'Revealed'}</strong>
          <p>${line.title} · ${line.variation}</p></div>
          <button class="button secondary" type="button" data-line="${line.id}" data-mode="study" data-study-position="${ply + 1}">Study answer</button>
        </li>`).join('')}</ul>` : '';
    return;
  }
  const positions = mixedRecallPositions(stats, trainingLines);
  const mastered = positions.filter(answers => answers.some(answer => answer.mastered)).length;
  const countLabel = count => `${count} ${count === 1 ? 'position' : 'positions'}`;
  $('mixed-completed-count').textContent = positions.length ? countLabel(positions.length) : 'Finish a Recall drill to unlock your first positions.';
  $('mixed-mastered-count').textContent = mastered ? countLabel(mastered) : 'Recall a move unaided twice, at least 24 hours apart.';
  $('mixed-mastered').disabled = !mastered;
  if (!mastered) $('mixed-completed').checked = true;
  $('mixed-start').disabled = !positions.length;
  $('mixed-practice-link').hidden = Boolean(positions.length);
}

function startMixedTest() {
  const questions = mixedRecallQuestions(mixedRecallPositions(stats, trainingLines), $('mixed-mastered').checked);
  if (!questions.length) return;
  mixedRound = { questions, results: [], index: 0, orientation: questions[0].prompt.line.side };
  showMixedPosition();
}

function showMixedPosition() {
  clearSelection();
  renderedBoard = undefined;
  renderPage();
  const question = activeMixedQuestion();
  const target = question ? $('board').querySelector('[tabindex="0"]') : $('mixed-results-heading');
  target.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function renderMixedQuestion({ prompt }) {
  const { index, questions, results } = mixedRound;
  const result = results[index];
  const side = prompt.line.side;
  renderBoard();
  $('turn-dot').className = result ? 'finished' : side === 'b' ? 'black' : '';
  $('turn-label').textContent = result ? 'Answer shown' : `${sides[side]} to move`;
  $('board-side').textContent = `Position ${index + 1} of ${questions.length}`;
  $('board-instruction').textContent = result ? formatMove(result.answer.ply, result.answer.line)
    : wrongSquare ? 'That move is unavailable' : 'Click or drag a piece to move';
  $('board-instruction').dataset.tone = result?.outcome === 'correct' ? 'success' : wrongSquare ? 'wrong' : '';
  $('quick-hint').hidden = $('restart').hidden = true;
  $('mixed-round-progress').textContent = `${results.length} of ${questions.length} answered`;
  $('mixed-segments').innerHTML = questions.map((_, i) => `<span class="${i < results.length ? 'done' : i === index ? 'current' : ''}"></span>`).join('');
  $('mixed-prompt-heading').textContent = result ? `${result.answer.line.title} · ${result.answer.line.variation}` : 'Find your move';
  $('mixed-feedback-title').hidden = !result;
  $('mixed-feedback').dataset.tone = result ? { correct: 'success', wrong: 'wrong', reveal: 'hint' }[result.outcome] : '';
  if (result) {
    const { line, ply } = result.answer;
    const label = { correct: 'First try', wrong: 'Missed', reveal: 'Revealed' }[result.outcome];
    $('mixed-feedback-title').textContent = `${label} · ${formatMove(ply, line)}`;
    $('mixed-feedback-text').textContent = line.moves[ply].idea;
  } else {
    $('mixed-feedback-title').textContent = '';
    $('mixed-feedback-text').textContent = 'Play a move you practiced in this position.';
  }
  $('mixed-reveal').hidden = Boolean(result);
  $('mixed-next').hidden = !result;
  $('mixed-next').textContent = index === questions.length - 1 ? 'See results' : 'Next position';
}

function tryMixedMove(question, from, to, placedByPointer) {
  if (mixedRound.results[mixedRound.index] || from === to) return false;
  const { line, ply } = question.prompt;
  const position = line.positions[ply];
  if (position.board[from]?.[0] !== line.side) return false;
  if (!legalMove(position, from, to)) {
    selectSquare(from);
    wrongSquare = to;
    renderMixedQuestion(question);
    return false;
  }
  const match = question.answers.find(answer => answer.from === from && answer.to === to);
  if (placedByPointer && match) renderedBoard.placedByPointer = true;
  answerMixedQuestion(match ?? question.prompt, match ? 'correct' : 'wrong');
  return Boolean(match);
}

function answerMixedQuestion(answer, outcome) {
  const question = activeMixedQuestion();
  if (!question || mixedRound.results[mixedRound.index]) return;
  mixedRound.results.push({ answer, outcome });
  recordMoveRecall(stats, answer.line, answer.ply, outcome, new Set());
  saveStats();
  clearSelection();
  renderMixedQuestion(question);
  $('mixed-next').focus({ preventScroll: true });
}

function finishMixedTest() {
  if (!mixedRound.results.length) {
    mixedRound = null;
    renderPage();
    $('mixed-setup-heading').focus({ preventScroll: true });
    window.scrollTo(0, 0);
    return;
  }
  mixedRound.index = mixedRound.questions.length;
  showMixedPosition();
}

function lineTile(opening, context) {
  const entry = stats.lines[opening.id] ?? { count: 0, clean: 0 };
  const detail = context === 'library' ? opening.description
    : context === 'review' ? 'Ready for another recall drill.'
    : context === 'upcoming' ? `Review on ${dateFormat.format(entry.due)}`
    : entry.count ? `${entry.count} ${entry.count === 1 ? 'drill' : 'drills'} completed · ${entry.clean} perfect` : 'Recall started';
  const practiceLabel = context === 'review' ? 'Review line' : 'Practice';
  const primaryMode = context === 'review' ? 'review' : 'recall';
  const course = context === 'library' && courses.find(item => item.openingId === opening.id);
  const variationCount = variationsByOpening[opening.id]?.length;
  const libraryLink = context === 'library'
    ? `<a class="tile-variations" href="#variations/${opening.id}">${icon('branch')} ${variationCount} ${variationCount === 1 ? 'variation' : 'variations'}${variationsUnlocked(opening.id) ? '' : `<span class="lock-mark" aria-label="Locked">${icon('lock')}</span>`}</a>`
    : '';
  return `<article class="card line-tile">
    <div class="tile-heading">
      <div class="drill-icon"><img src="./pieces/${opening.side}${opening.icon}.png" alt=""></div>
      <div><h2>${opening.title}</h2><p>${opening.variation}</p></div>
    </div>
    <p>${detail}</p>
    <div class="tile-meta">${opening.courseId ? '' : `${opening.code} · `}Play as ${sides[opening.side]} · ${opening.drillLength} recall moves</div>
    <div class="tile-actions">
      <button class="button secondary" data-line="${opening.id}" data-mode="study">Study</button>
      <button class="button primary" data-line="${opening.id}" data-mode="${primaryMode}">${practiceLabel}</button>
    </div>
    ${libraryLink}
    ${course ? `<a class="tile-variations tile-course" href="#courses/${course.id}">${icon('layers')} Full course · ${course.lessons.length} lines</a>` : ''}
  </article>`;
}

function renderLibrary() {
  $('library-course-link').hidden = filter === 'w';
  $('library-white-course-link').hidden = filter === 'b';
  $('library-list').innerHTML = openings.filter(opening => filter === 'all' || opening.side === filter || (filter === 'gambits' && opening.kind === 'gambit'))
    .map(opening => lineTile(opening, 'library')).join('');
}

function renderVariations(opening) {
  const unlocked = variationsUnlocked(opening.id);
  $('variations-heading').textContent = opening.title;
  const intro = unlocked ? '' : `<section class="card unlock-notice">
    <span class="unlock-icon">${icon('lock')}</span>
    <div><h2>Complete the main line to unlock variations</h2><p>Finish one recall drill of ${opening.variation}.</p></div>
    <button class="button primary" type="button" data-line="${opening.id}" data-mode="recall">Practice main line</button>
  </section>`;
  const sample = replySamples[opening.id];
  const { at, games, replies } = sample;
  const candidates = [opening, ...variationsByOpening[opening.id].filter(variation => variation.at === at)];
  const featured = replies.map(([reply, count]) => {
    const continuation = candidates.find(candidate => candidate.moves[at].from + candidate.moves[at].to === reply);
    return { continuation, count };
  });
  const featuredIds = new Set(featured.map(item => item.continuation.id));
  const position = opening.moves.slice(0, at);
  const moveOrder = position.map((move, ply) => ply % 2 ? move.san : formatMove(ply, opening)).join(' ');
  const explorerMoves = position.map(move => move.from + move.to).join(',');
  const common = `<section aria-labelledby="common-replies-heading" class="common-replies">
    <h2 class="section-heading" id="common-replies-heading">Common opponent replies</h2>
    <p class="sample-position">After <span>${moveOrder}</span></p>
    <div class="reply-list">${featured.map(({ continuation, count }) => {
      const ready = unlocked || !continuation.parentId;
      const response = continuation.moves[at + 1];
      return `<article class="card reply-row">
        <div class="reply-opponent">
          <div class="reply-move">${formatMove(at, continuation)}</div>
          <h3>${continuation.variation}</h3>
          <p>${replyShare.format(count / games)} of games</p>
        </div>
        <div class="reply-response">
          <span>Recommended response</span>
          <strong>${formatMove(at + 1, continuation)}</strong>
          <p>${response.idea}</p>
        </div>
        ${ready ? `<div class="reply-actions">
          <button class="button secondary" type="button" data-line="${continuation.id}" data-mode="study" data-study-position="${at + 2}">Study</button>
          <button class="button primary" type="button" data-line="${continuation.id}" data-mode="recall">Practice</button>
        </div>` : `<span class="reply-locked">${icon('lock')} Locked</span>`}
      </article>`;
    }).join('')}</div>
    <p class="sample-source">Move shares from ${sampleNumber.format(games)} master games in this position. Recommended responses were checked with Stockfish 17.1 at depth 15. <a href="https://explorer.lichess.ovh/masters?play=${explorerMoves}&amp;topGames=0" target="_blank" rel="noopener noreferrer">Lichess Masters data</a></p>
  </section>`;
  const cards = variationsByOpening[opening.id].filter(variation => !featuredIds.has(variation.id)).map(variation => `<article class="card line-tile variation-tile">
    <div class="branch-kicker">${icon('branch')} ${variation.pivot.ownMove ? 'Your alternate move' : 'Opponent changes course'}</div>
    <div><h2>${variation.variation}</h2><p class="variation-trigger">${branchPoint(variation)}</p></div>
    <p>${variation.description}</p>
    <p class="other-response"><strong>Recommended response</strong> ${formatMove(variation.start, variation)}</p>
    ${unlocked ? `<div class="tile-actions">
      <button class="button secondary" type="button" data-line="${variation.id}" data-mode="study">Study</button>
      <button class="button primary" type="button" data-line="${variation.id}" data-mode="recall">Practice</button>
    </div>` : ''}
  </article>`).join('');
  $('variation-list').innerHTML = intro + common + (cards ? `<h2 class="section-heading">Other variations</h2><div class="tile-grid">${cards}</div>` : '');
}

function renderReview() {
  const due = dueLines();
  const upcoming = trainingLines.filter(opening => (stats.lines[opening.id]?.due ?? 0) > Date.now())
    .sort((a, b) => stats.lines[a.id].due - stats.lines[b.id].due);
  const ready = due.length
    ? `<h2 class="section-heading">Ready to review</h2><div class="tile-grid">${due.map(opening => lineTile(opening, 'review')).join('')}</div>`
    : `<section class="card empty"><h2>${upcoming.length ? 'You’re all caught up' : 'Your review queue is empty'}</h2>
       <p>${upcoming.length ? 'Come back when your next line is due.' : 'Finish a recall drill to schedule your first review.'}</p>
       <a class="button primary" href="#practice">Go to practice</a></section>`;
  const scheduled = upcoming.length
    ? `<h2 class="section-heading">Upcoming</h2><div class="tile-grid">${upcoming.map(opening => lineTile(opening, 'upcoming')).join('')}</div>`
    : '';
  $('review-list').innerHTML = ready + scheduled;
}

function renderMissedPositions(records) {
  return `<ul class="missed-list">${records.map(record => {
    const opening = trainingLines.find(item => item.id === record.lineId);
    if (!opening?.moves[record.ply]) return '';
    const context = record.ply ? `After ${formatMove(record.ply - 1, opening)}` : 'Starting position';
    return `<li class="card missed-position">
      <div class="missed-context">
        <strong>${context} · ${sides[opening.side]} to play</strong>
        <p>${opening.title} · ${opening.variation}</p>
      </div>
      <dl class="missed-counts">
        <div><dt>Wrong</dt><dd>${record.wrong}</dd></div>
        <div><dt>Hints</dt><dd>${record.hint}</dd></div>
        <div><dt>Reveals</dt><dd>${record.reveal}</dd></div>
        <div><dt>First try</dt><dd>${record.correct}/${record.attempts}</dd></div>
      </dl>
      <div class="missed-actions">
        <button class="button secondary" type="button" data-line="${opening.id}" data-mode="study" data-study-position="${record.ply + 1}">Study answer</button>
        <button class="button primary" type="button" data-line="${opening.id}" data-mode="recall" data-recall-position="${record.ply}">Practice move</button>
      </div>
    </li>`;
  }).join('')}</ul>`;
}

function renderProgress() {
  const groups = { work: [], learning: [], mastered: [] };
  for (const opening of trainingLines) {
    const status = lineMastery(stats, opening);
    if (status) groups[status].push(opening);
  }
  const practiced = trainingLines.filter(opening => stats.lines[opening.id]?.count);
  const { attempts, correct, missed, recovered } = recallOverview(stats, trainingLines);
  const mastery = [
    [groups.mastered.length, 'Mastered lines'],
    [groups.work.length, 'Lines needing work'],
    [attempts ? replyShare.format(correct / attempts) : '—', 'First-try move accuracy'],
  ];
  const totals = [
    [Object.values(stats.days).reduce((sum, count) => sum + count, 0), 'Drills completed'],
    [`${practiced.length} / ${trainingLines.length}`, 'Lines practiced'],
    [stats.xp, 'XP earned'],
  ];
  const statCards = items => `<div class="stats-block">${items.map(([value, label]) =>
    `<div class="card stats-card"><div class="stat-value">${value}</div><div class="stat-label">${label}</div></div>`).join('')}</div>`;
  const lineGroups = Object.entries(groups).filter(([, lines]) => lines.length);

  $('progress-content').innerHTML = `
    <h2 class="section-heading">Recall mastery</h2>
    ${statCards(mastery)}
    <p class="memory-caption">Master a line with two full first-try recalls at least 24 hours apart. A wrong move or help on a later attempt starts a new recall check.</p>
    <h2 class="section-heading">Most-missed positions</h2>
    ${missed.length ? `<p class="memory-caption">Ranked by wrong attempts, then by total attempts that needed a retry or help. A wrong move is a legal move outside the drill’s line.</p>${renderMissedPositions(missed.slice(0, 8))}`
      : `<div class="card memory-empty">${attempts ? 'No positions currently need extra practice.' : 'Play a Recall drill to start tracking first-try moves, mistakes, and hints.'}</div>`}
    ${missed.length > 8 ? `<details class="card memory-group">
      <summary><span>More positions to practice</span><span>${missed.length - 8}</span></summary>
      ${renderMissedPositions(missed.slice(8))}
    </details>` : ''}
    ${recovered.length ? `<details class="card memory-group">
      <summary><span>Recovered positions</span><span>${recovered.length}</span></summary>
      ${renderMissedPositions(recovered)}
    </details>` : ''}
    ${lineGroups.length ? `<h2 class="section-heading">Line mastery</h2>${lineGroups.map(([status, lines]) =>
      `<details class="card memory-group"${status === (groups.work.length ? 'work' : groups.learning.length ? 'learning' : 'mastered') ? ' open' : ''}>
        <summary><span class="mastery-status ${status}">${masteryLabels[status]}</span><span>${lines.length} ${lines.length === 1 ? 'line' : 'lines'}</span></summary>
        <div class="tile-grid">${lines.map(opening => lineTile(opening, 'progress')).join('')}</div>
      </details>`).join('')}` : ''}
    <h2 class="section-heading">Practice totals</h2>
    ${statCards(totals)}`;
}

const boardDrag = enablePieceDragging($('board'), {
  destinationsFor,
  playMove: (from, to) => tryMove(from, to, true),
  selectOrigin(square) {
    focusSquare = square;
    selectSquare(square);
    renderBoard();
  },
});

$('board').addEventListener('click', event => {
  if (boardDrag.ignoreClick(event)) return;
  const square = event.target.closest('[data-square]')?.dataset.square;
  if (square) clickSquare(square);
});
$('board').addEventListener('focusin', event => {
  const square = event.target.dataset.square;
  if (!square || square === focusSquare) return;
  const previous = $('board').querySelector('[tabindex="0"]');
  if (previous) previous.tabIndex = -1;
  event.target.tabIndex = 0;
  focusSquare = square;
});
$('board').addEventListener('keydown', event => {
  const directions = { ArrowLeft: [-1, 0], ArrowRight: [1, 0], ArrowUp: [0, -1], ArrowDown: [0, 1] };
  const direction = directions[event.key];
  if (!direction) return;
  event.preventDefault();
  const { columns, rows } = boardOrder();
  const [dx, dy] = direction;
  const file = columns[columns.indexOf(focusSquare[0]) + dx];
  const rank = rows[rows.indexOf(focusSquare[1]) + dy];
  if (file && rank) $('board').querySelector(`[data-square="${file + rank}"]`).focus({ preventScroll: true });
});
document.addEventListener('click', event => {
  const track = event.target.closest('[data-track]');
  if (track && page === 'courses') {
    const { course, track: depth } = track.dataset;
    const selectedCourse = courses.find(item => item.id === course);
    if (!selectedCourse?.tracks.some(option => option.id === depth)) return;
    stats.courseTracks[course] = depth;
    saveStats();
    renderPage();
    $('course-content').querySelector(`[data-track="${depth}"]`)?.focus({ preventScroll: true });
    return;
  }
  const step = event.target.closest('[data-study-step]');
  if (step && page === 'practice' && mode === 'study') {
    cursor = Number(step.dataset.studyStep);
    renderPractice();
    $('study-moves').querySelector(`[data-study-step="${cursor}"]`)?.focus({ preventScroll: true });
    return;
  }
  const action = event.target.closest('[data-line]');
  if (action) {
    const opening = trainingLines.find(item => item.id === action.dataset.line);
    const studyPosition = action.dataset.studyPosition ? Number(action.dataset.studyPosition) : undefined;
    const recallPosition = action.dataset.recallPosition === undefined ? null : Number(action.dataset.recallPosition);
    selectLine(opening, action.dataset.mode === 'study' ? 'study' : 'recall', action.dataset.mode === 'review', studyPosition, recallPosition);
  }
  const button = event.target.closest('[data-filter]');
  if (button) {
    filter = button.dataset.filter;
    for (const option of document.querySelectorAll('[data-filter]')) {
      option.setAttribute('aria-pressed', option === button);
    }
    renderLibrary();
  }
});
$('flip').addEventListener('click', () => {
  const flipped = boardView().orientation === 'w' ? 'b' : 'w';
  if (activeMixedQuestion()) mixedRound.orientation = flipped;
  else orientation = flipped;
  renderBoard();
});
$('mixed-start').addEventListener('click', startMixedTest);
$('mixed-reveal').addEventListener('click', () => {
  const question = activeMixedQuestion();
  if (question) answerMixedQuestion(question.prompt, 'reveal');
});
$('mixed-next').addEventListener('click', () => {
  if (!activeMixedQuestion() || !mixedRound.results[mixedRound.index]) return;
  mixedRound.index++;
  const next = activeMixedQuestion();
  if (next) mixedRound.orientation = next.prompt.line.side;
  showMixedPosition();
});
$('mixed-end').addEventListener('click', finishMixedTest);
$('mixed-again').addEventListener('click', () => {
  mixedRound = null;
  renderMixedLanding();
  $('mixed-setup-heading').focus({ preventScroll: true });
  window.scrollTo(0, 0);
});
$('restart').addEventListener('click', () => reset());
$('recall').addEventListener('click', () => { if (mode !== 'recall') reset('recall'); });
$('study').addEventListener('click', () => { if (mode !== 'study') reset('study'); });
$('hint').addEventListener('click', showHint);
$('quick-hint').addEventListener('click', showHint);
$('reveal').addEventListener('click', () => {
  assisted = true;
  advance(true);
});
$('retry').addEventListener('click', () => {
  reset('recall');
  $('board').querySelector('[tabindex="0"]').focus();
});
$('next-line').addEventListener('click', () => {
  nextLine();
  if (location.hash === '#practice') $('board').querySelector('[tabindex="0"]').focus();
});
$('course-recall').addEventListener('click', () => {
  reset('recall');
  $('board').querySelector('[tabindex="0"]').focus({ preventScroll: true });
  window.scrollTo(0, 0);
});
$('previous').addEventListener('click', () => { cursor--; renderPractice(); });
$('next').addEventListener('click', () => { cursor++; renderPractice(); });
$('shortcuts').addEventListener('click', () => $('shortcuts-dialog').showModal());
document.addEventListener('keydown', event => {
  if ((page !== 'practice' && !activeMixedQuestion()) || event.altKey || event.metaKey || event.ctrlKey || $('shortcuts-dialog').open) return;
  if (event.key === 'Escape') {
    selected = null;
    destinations = [];
    renderBoard();
  }
  if (event.key.toLowerCase() === 'f') $('flip').click();
  if (page !== 'practice') return;
  if (event.key.toLowerCase() === 'r') $('restart').click();
  if (event.key.toLowerCase() === 'h') showHint();
});
window.addEventListener('hashchange', () => {
  renderPage();
  window.scrollTo(0, 0);
});
window.addEventListener('focus', () => {
  updateMetrics();
  if (page === 'review' || page === 'progress') renderPage();
});
renderPage();
