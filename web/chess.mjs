export const files = 'abcdefgh';
export const sides = { w: 'White', b: 'Black' };
export const names = { p: 'pawn', n: 'knight', b: 'bishop', r: 'rook', q: 'queen', k: 'king' };

export function initialPosition() {
  const board = {};
  for (const [index, file] of [...files].entries()) {
    const piece = 'rnbqkbnr'[index];
    board[file + '1'] = 'w' + piece;
    board[file + '2'] = 'wp';
    board[file + '7'] = 'bp';
    board[file + '8'] = 'b' + piece;
  }
  return { board, castle: 'KQkq', enPassant: null };
}

function fileAt(square) { return files.indexOf(square[0]); }
function rankAt(square) { return Number(square[1]); }
function squareAt(file, rank) { return files[file] + rank; }

function clearPath(board, from, to) {
  const x = fileAt(from);
  const y = rankAt(from);
  const dx = fileAt(to) - x;
  const dy = rankAt(to) - y;
  for (let step = 1; step < Math.max(Math.abs(dx), Math.abs(dy)); step++) {
    if (board[squareAt(x + Math.sign(dx) * step, y + Math.sign(dy) * step)]) return false;
  }
  return true;
}

function canReach(position, from, to, attacksOnly = false) {
  const { board, enPassant } = position;
  if (from === to) return false;
  const [side, piece] = board[from];
  const dx = Math.abs(fileAt(to) - fileAt(from));
  const dy = Math.abs(rankAt(to) - rankAt(from));
  if (piece === 'n') return dx * dy === 2;
  if (piece === 'k') return dx <= 1 && dy <= 1;
  if (piece === 'p') {
    const direction = side === 'w' ? 1 : -1;
    const forward = (rankAt(to) - rankAt(from)) * direction;
    if (dx === 1) return forward === 1 && (attacksOnly || Boolean(board[to]) || to === enPassant);
    if (attacksOnly || dx || board[to]) return false;
    const home = side === 'w' ? 2 : 7;
    return forward === 1 || (forward === 2 && rankAt(from) === home && !board[from[0] + (home + direction)]);
  }
  const diagonal = dx === dy;
  const straight = dx === 0 || dy === 0;
  const shape = (piece === 'b' && diagonal) || (piece === 'r' && straight) || (piece === 'q' && (diagonal || straight));
  return shape && clearPath(board, from, to);
}

function attacked(position, square, side) {
  return Object.entries(position.board).some(([from, piece]) =>
    piece[0] !== side && canReach(position, from, square, true));
}

export function applyMove(position, from, to) {
  const board = { ...position.board };
  const [side, piece] = board[from];
  let castle = position.castle;
  let enPassant = null;
  if (piece === 'p') {
    if (to === position.enPassant && from[0] !== to[0] && !board[to]) delete board[to[0] + from[1]];
    if (Math.abs(rankAt(from) - rankAt(to)) === 2) enPassant = from[0] + ((rankAt(from) + rankAt(to)) / 2);
  }
  if (piece === 'k') {
    castle = castle.replace(side === 'w' ? /[KQ]/g : /[kq]/g, '');
    if (from[0] === 'e' && (to[0] === 'g' || to[0] === 'c')) {
      const rookFrom = (to[0] === 'g' ? 'h' : 'a') + from[1];
      const rookTo = (to[0] === 'g' ? 'f' : 'd') + from[1];
      board[rookTo] = board[rookFrom];
      delete board[rookFrom];
    }
  }
  const rookRights = { a1: 'Q', h1: 'K', a8: 'q', h8: 'k' };
  for (const square of [from, to]) {
    if (rookRights[square]) castle = castle.replace(rookRights[square], '');
  }
  const promotes = piece === 'p' && ['1', '8'].includes(to[1]);
  board[to] = promotes ? side + 'q' : board[from];
  delete board[from];
  return { board, castle, enPassant };
}

function canCastle(position, from, to, side) {
  const rank = side === 'w' ? '1' : '8';
  if (from !== 'e' + rank || !['g' + rank, 'c' + rank].includes(to)) return false;
  const short = to[0] === 'g';
  const right = short ? 'K' : 'Q';
  if (!position.castle.includes(side === 'w' ? right : right.toLowerCase())) return false;
  const empty = short ? 'fg' : 'dcb';
  const through = (short ? 'f' : 'd') + rank;
  return [...empty].every(file => !position.board[file + rank])
    && !attacked(position, from, side)
    && !attacked(applyMove(position, from, through), through, side);
}

export function legalMove(position, from, to) {
  const mover = position.board[from];
  if (!mover || !/^[a-h][1-8]$/.test(to)) return false;
  const target = position.board[to];
  const [side, piece] = mover;
  if (target?.[0] === side || target?.[1] === 'k') return false;
  if (!canReach(position, from, to) && !(piece === 'k' && canCastle(position, from, to, side))) return false;
  const moved = applyMove(position, from, to);
  const king = Object.keys(moved.board).find(square => moved.board[square] === side + 'k');
  return !attacked(moved, king, side);
}

export const squares = [...files].flatMap(file => Array.from({ length: 8 }, (_, rank) => file + (rank + 1)));
