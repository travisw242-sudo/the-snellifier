import { applyMove, initialPosition, legalMove, sides } from './chess.mjs';
import { opponentBranches } from './data/opponent-lines.mjs';
import { mainPlans, branchOpponentPlans } from './data/opening-plans.mjs';
import { additionalOpenings, additionalVariations } from './data/expanded-repertoire.mjs';
import { qgaBlackCourse } from './courses/qga-black-course.mjs';
import { queenGambitWhiteCourse } from './courses/queen-gambit-white-course.mjs';
import { hippopotamusCourse } from './courses/hippopotamus-course.mjs';
import { italianGameCourse } from './courses/italian-game-course.mjs';
import { ruyLopezCourse } from './courses/ruy-lopez-course.mjs';

const repertoire = [
  {
    id: 'italian', title: 'Italian Game', variation: 'Giuoco Piano', code: 'C54', side: 'w', icon: 'b', start: 4,
    description: 'Develop the bishop to c4 and build a pawn center with c3 and d4.',
    moves: [
      ['e2e4', 'e4', 'Claim space in the center.'], ['e7e5', 'e5', 'Black matches White’s central pawn.'],
      ['g1f3', 'Nf3', 'Develop the king’s knight and attack e5.', 'Black has to account for the e5-pawn. Bringing out the knight also clears g1 for castling.'], ['b8c6', 'Nc6', 'Black defends e5 while developing.'],
      ['f1c4', 'Bc4', 'Develop the king’s bishop to pressure f7.', 'The bishop is active before you play c3 and d4. It also clears the last square your king needs for castling.'], ['f8c5', 'Bc5', 'Black mirrors the bishop development.'],
      ['c2c3', 'c3', 'Support a pawn push to d4.', 'If Black exchanges on d4, the c-pawn can recapture and leave you with pawns on d4 and e4.'], ['g8f6', 'Nf6', 'Black develops and attacks e4.', 'The knight clears g8 for castling. The attack on e4 also makes White choose how to handle the center.'],
      ['d2d4', 'd4', 'Challenge Black’s e5 pawn and open the center.'], ['e5d4', 'exd4', 'Black exchanges on d4.'],
      ['c3d4', 'cxd4', 'Recapture on d4 to restore the pawn center.'],
    ],
  },
  {
    id: 'ruy-lopez', title: 'Ruy Lopez', variation: 'Closed Spanish', code: 'C84', side: 'w', icon: 'n', start: 4,
    description: 'Pressure the c6 knight and castle early in this Spanish opening.',
    moves: [
      ['e2e4', 'e4', 'Take space and open the bishop’s diagonal.'], ['e7e5', 'e5', 'Black takes a share of the center.'],
      ['g1f3', 'Nf3', 'Attack the e5 pawn.'], ['b8c6', 'Nc6', 'Black defends the e5 pawn.'],
      ['f1b5', 'Bb5', 'Pressure the knight that defends e5.', 'The bishop makes Black decide whether to defend e5, move the knight, or challenge the bishop with …a6.'], ['a7a6', 'a6', 'Black asks the bishop to move.'],
      ['b5a4', 'Ba4', 'Keep the bishop on the diagonal toward c6.'], ['g8f6', 'Nf6', 'Black develops with pressure on e4.'],
      ['e1g1', 'O-O', 'Castle kingside to protect the king and activate a rook.'], ['f8e7', 'Be7', 'Black develops the bishop before castling.'],
      ['f1e1', 'Re1', 'Defend the e4 pawn with the rook.', 'With e4 protected by the rook, White can consider c3 and d4 without leaving the e-pawn dependent on a single piece.'],
    ],
  },
  {
    id: 'london', title: 'London System', variation: 'Classical setup', code: 'D02', side: 'w', icon: 'q', start: 2,
    description: 'Develop the dark-squared bishop before building a solid pawn triangle.',
    moves: [
      ['d2d4', 'd4', 'Stake out the center.'], ['d7d5', 'd5', 'Black contests central space.'],
      ['g1f3', 'Nf3', 'Develop the king’s knight toward the center.'], ['g8f6', 'Nf6', 'Black develops the king’s knight.'],
      ['c1f4', 'Bf4', 'Bring out the bishop before playing e3.', 'Once the bishop is outside the pawn chain, White can play e3 to defend d4 without trapping it on c1.'], ['e7e6', 'e6', 'Black strengthens d5 and opens the bishop’s diagonal.'],
      ['e2e3', 'e3', 'Support d4 and free the light-squared bishop.'], ['c7c5', 'c5', 'Black challenges the center from the flank.'],
      ['c2c3', 'c3', 'Reinforce d4 with the c-pawn.'],
    ],
  },
  {
    id: 'caro-kann', title: 'Caro-Kann Defense', variation: 'Classical variation', code: 'B18', side: 'b', icon: 'b', start: 1,
    description: 'Challenge the e4 pawn, then develop the bishop outside the pawn chain.',
    moves: [
      ['e2e4', 'e4', 'White begins by taking the center.'], ['c7c6', 'c6', 'Prepare to support a pawn on d5.', 'After …d5, Black can challenge e4 while retaining the option to develop the c8-bishop before playing …e6.'],
      ['d2d4', 'd4', 'White builds a two-pawn center.'], ['d7d5', 'd5', 'Challenge the e4 pawn.'],
      ['b1c3', 'Nc3', 'White develops and defends e4.'], ['d5e4', 'dxe4', 'Trade the d-pawn for White’s e-pawn.'],
      ['c3e4', 'Nxe4', 'White recaptures with the knight.'], ['c8f5', 'Bf5', 'Develop the light-squared bishop with tempo on the knight.', 'After the knight moves, Black can play …e6 without shutting the bishop behind the pawn chain.'],
    ],
  },
  {
    id: 'sicilian', title: 'Sicilian Defense', variation: 'Najdorf variation', code: 'B90', side: 'b', icon: 'r', start: 5,
    description: 'Trade your c-pawn for a central pawn and prepare queenside expansion.',
    moves: [
      ['e2e4', 'e4', 'White claims central space.'], ['c7c5', 'c5', 'Contest d4 from the flank.', 'If White plays d4, Black can trade a flank pawn for a central pawn and gain a half-open c-file.'],
      ['g1f3', 'Nf3', 'White prepares d4.'], ['d7d6', 'd6', 'Control e5 and support the center.'],
      ['d2d4', 'd4', 'White opens the center.'], ['c5d4', 'cxd4', 'Trade the flank pawn for White’s central pawn.'],
      ['f3d4', 'Nxd4', 'White recaptures with the knight.'], ['g8f6', 'Nf6', 'Develop with pressure on e4.'],
      ['b1c3', 'Nc3', 'White reinforces e4.'], ['a7a6', 'a6', 'Control b5 and prepare possible queenside expansion.', 'The pawn restrains Nb5 and supports a future …b5, which can gain space or move the c3-knight with …b4.'],
    ],
  },
  {
    id: 'queens-gambit', kind: 'gambit', title: 'Queen’s Gambit Declined', variation: 'Orthodox setup', code: 'D60', side: 'b', icon: 'q', start: 3,
    description: 'Keep a pawn on d5, develop your kingside, and castle.',
    moves: [
      ['d2d4', 'd4', 'White stakes out the center.'], ['d7d5', 'd5', 'Meet White’s pawn in the center.'],
      ['c2c4', 'c4', 'White offers the c-pawn to distract d5.'], ['e7e6', 'e6', 'Maintain a pawn on d5 and free the king’s bishop.', 'The bishop can develop to e7 so Black can castle. Later, …c5 can free the position.'],
      ['b1c3', 'Nc3', 'White increases pressure on d5.'], ['g8f6', 'Nf6', 'Develop and defend d5.'],
      ['c1g5', 'Bg5', 'White pins the knight to the queen.'], ['f8e7', 'Be7', 'Break the pin and prepare to castle.'],
      ['e2e3', 'e3', 'White supports d4 and opens a bishop diagonal.'], ['e8g8', 'O-O', 'Castle kingside to secure the king.'],
    ],
  },
  {
    id: 'scotch', title: 'Scotch Game', variation: 'Schmidt variation', code: 'C45', side: 'w', icon: 'r', start: 4,
    description: 'Open the center early and use your e-pawn to gain space.',
    moves: [
      ['e2e4', 'e4', 'Claim the center.'], ['e7e5', 'e5', 'Black matches White’s pawn.'],
      ['g1f3', 'Nf3', 'Develop and attack e5.'], ['b8c6', 'Nc6', 'Black defends the e5 pawn.'],
      ['d2d4', 'd4', 'Challenge e5 immediately.', 'An exchange on d4 opens the center while White can recapture with a developing knight move.'], ['e5d4', 'exd4', 'Black exchanges in the center.'],
      ['f3d4', 'Nxd4', 'Recover the pawn with the knight.'], ['g8f6', 'Nf6', 'Black develops and attacks e4.'],
      ['d4c6', 'Nxc6', 'Trade knights and change Black’s pawn structure.'],
      ['b7c6', 'bxc6', 'Black recaptures toward the center.'],
      ['e4e5', 'e5', 'Gain space and attack the knight.', 'The advanced pawn can drive the knight from f6. Watch for …Qe7, which pins it to the king.'], ['d8e7', 'Qe7', 'Black pins the e-pawn to the king.'],
      ['d1e2', 'Qe2', 'Neutralize the pin and support e5.'],
    ],
  },
  {
    id: 'queens-gambit-accepted', kind: 'gambit', title: 'Queen’s Gambit Accepted', variation: 'Classical variation', code: 'D27', side: 'w', icon: 'q', start: 2,
    description: 'Offer the c-pawn, then develop while reclaiming it.',
    moves: [
      ['d2d4', 'd4', 'Claim space in the center.'], ['d7d5', 'd5', 'Black contests the center.'],
      ['c2c4', 'c4', 'Offer the c-pawn to draw Black’s pawn away from d5.'],
      ['d5c4', 'dxc4', 'Black accepts the gambit.'],
      ['g1f3', 'Nf3', 'Develop and discourage an immediate …e5.'], ['g8f6', 'Nf6', 'Black develops and controls e4.'],
      ['e2e3', 'e3', 'Open the bishop’s path to c4.', 'Taking with the bishop recovers the gambit pawn while clearing f1 for castling.'], ['e7e6', 'e6', 'Black opens a diagonal for the kingside bishop.'],
      ['f1c4', 'Bxc4', 'Develop and recover the pawn.'], ['c7c5', 'c5', 'Black attacks d4 from the flank.'],
      ['e1g1', 'O-O', 'Castle before the center opens.'], ['a7a6', 'a6', 'Black prepares …b5.'],
      ['d1e2', 'Qe2', 'Support a future e4 push and connect the queen with the kingside pieces.'],
    ],
  },
  {
    id: 'english', title: 'English Opening', variation: 'Reversed Sicilian', code: 'A22', side: 'w', icon: 'b', start: 2,
    description: 'Control d5 from the flank and fianchetto the kingside bishop.',
    moves: [
      ['c2c4', 'c4', 'Control d5 with the c-pawn.', 'White can add Nc3 and Bg2 to increase control over d5. The d-pawn remains available for a later central break.'], ['e7e5', 'e5', 'Black stakes out central space.'],
      ['b1c3', 'Nc3', 'Add pressure to d5.'], ['g8f6', 'Nf6', 'Black develops toward the center.'],
      ['g2g3', 'g3', 'Prepare to develop the bishop on g2.'], ['d7d5', 'd5', 'Black challenges the c4 pawn.'],
      ['c4d5', 'cxd5', 'Exchange in the center.'], ['f6d5', 'Nxd5', 'Black recaptures with the knight.'],
      ['f1g2', 'Bg2', 'Put the bishop on the long diagonal.'], ['d5b6', 'Nb6', 'Black moves the knight away from the bishop.'],
      ['g1f3', 'Nf3', 'Develop the kingside knight.'], ['b8c6', 'Nc6', 'Black develops and supports e5.'],
      ['e1g1', 'O-O', 'Secure the king and activate the rook.'],
    ],
  },
  {
    id: 'french', title: 'French Defense', variation: 'Advance variation', code: 'C02', side: 'b', icon: 'b', start: 1,
    description: 'Attack the base of White’s advanced pawn chain.',
    moves: [
      ['e2e4', 'e4', 'White claims the center.'], ['e7e6', 'e6', 'Prepare a counter in the center with …d5.'],
      ['d2d4', 'd4', 'White builds a two-pawn center.'], ['d7d5', 'd5', 'Challenge the e4 pawn.'],
      ['e4e5', 'e5', 'White advances and gains space.'], ['c7c5', 'c5', 'Attack d4, the base of White’s pawn chain.', 'The c-pawn can exchange on d4. Before doing so, …Nc6 and …Qb6 add pressure to White’s center or queenside.'],
      ['c2c3', 'c3', 'White reinforces d4.'], ['b8c6', 'Nc6', 'Add a second attacker to d4.'],
      ['g1f3', 'Nf3', 'White adds another defender to d4.'], ['d8b6', 'Qb6', 'Pressure b2 and position the queen behind the c5 pawn.'],
    ],
  },
  {
    id: 'kings-indian', title: 'King’s Indian Defense', variation: 'Classical variation', code: 'E94', side: 'b', icon: 'n', start: 5,
    description: 'Fianchetto, castle, and challenge White’s broad center with …e5.',
    moves: [
      ['d2d4', 'd4', 'White takes central space.'], ['g8f6', 'Nf6', 'Develop and control e4.'],
      ['c2c4', 'c4', 'White gains queenside and central space.'], ['g7g6', 'g6', 'Prepare the kingside fianchetto.', 'The bishop on g7 contests the long diagonal and clears f8 so Black can castle.'],
      ['b1c3', 'Nc3', 'White prepares e4.'], ['f8g7', 'Bg7', 'Develop the bishop on the long diagonal.'],
      ['e2e4', 'e4', 'White establishes a broad center.'], ['d7d6', 'd6', 'Prepare to challenge the center with …e5.'],
      ['g1f3', 'Nf3', 'White develops and supports d4.'], ['e8g8', 'O-O', 'Castle before opening the center.'],
      ['f1e2', 'Be2', 'White prepares to castle.'], ['e7e5', 'e5', 'Challenge d4 directly.', 'White can exchange, maintain the tension, or close the center with d5. Those choices determine which side of the board to play on.'],
      ['e1g1', 'O-O', 'White secures the king.'], ['b8c6', 'Nc6', 'Develop and add pressure to d4.'],
    ],
  },
  {
    id: 'scandinavian', title: 'Scandinavian Defense', variation: 'Main line with …Qa5', code: 'B01', side: 'b', icon: 'q', start: 1,
    description: 'Challenge e4 immediately and develop the bishop before …e6.',
    moves: [
      ['e2e4', 'e4', 'White claims the center.'], ['d7d5', 'd5', 'Challenge the e4 pawn on the first move.', 'After exd5, Black can recover the pawn with the queen. Be ready for Nc3, which develops with an attack on the queen.'],
      ['e4d5', 'exd5', 'White captures on d5.'], ['d8d5', 'Qxd5', 'Recover the pawn with the queen.'],
      ['b1c3', 'Nc3', 'White develops with an attack on the queen.'], ['d5a5', 'Qa5', 'Move the queen out of attack while keeping it active.', 'The queen can check along the a5–e1 diagonal if it opens. With …c6, Black also gives the queen a retreat on c7.'],
      ['d2d4', 'd4', 'White occupies the center.'], ['g8f6', 'Nf6', 'Develop and control e4.'],
      ['g1f3', 'Nf3', 'White develops the kingside knight.'], ['c7c6', 'c6', 'Support d5 and give the queen a retreat on c7.'],
      ['f1c4', 'Bc4', 'White develops the bishop toward f7.'], ['c8f5', 'Bf5', 'Bring the bishop out before closing the diagonal with …e6.'],
    ],
  },
  ...additionalOpenings,
];

function compileLine(line) {
  let position = initialPosition();
  const positions = [position];
  const moves = line.moves.map(([coordinate, san, idea, setup], index) => {
    const from = coordinate.slice(0, 2);
    const to = coordinate.slice(2);
    const expectedSide = index % 2 ? 'b' : 'w';
    if (position.board[from]?.[0] !== expectedSide || !legalMove(position, from, to)) {
      throw new Error(`Invalid move ${san} in ${line.id}`);
    }
    position = applyMove(position, from, to);
    positions.push(position);
    return { from, to, san, idea, setup };
  });
  return { ...line, moves, positions, drillLength: Math.ceil((moves.length - line.start) / 2) };
}

function notation(index, san) {
  return `${Math.floor(index / 2) + 1}${index % 2 ? '…' : '.'}${san}`;
}

export const openings = repertoire.map(line => compileLine({ ...line, plans: line.plans ?? mainPlans[line.id] }));
export const variationsByOpening = Object.fromEntries(openings.map(opening => [opening.id, []]));

const branches = [
  ...opponentBranches,
  ...additionalVariations,
  {
    parentId: 'italian', id: 'italian-two-knights', variation: 'Two Knights Defense', code: 'C55', at: 5,
    description: 'Black’s knight attacks e4 early. Support the pawn with d3, then castle and build the center from a safer position.',
    moves: [
      ['g8f6', 'Nf6', 'Black attacks e4 before developing the bishop.'],
      ['d2d3', 'd3', 'Defend e4 and keep the center flexible.'], ['f8c5', 'Bc5', 'Black develops the bishop toward f2.'],
      ['e1g1', 'O-O', 'Tuck the king away.'], ['d7d6', 'd6', 'Black supports e5.'],
      ['c2c3', 'c3', 'Prepare d4 without committing to it yet.'], ['e8g8', 'O-O', 'Black secures the king.'],
      ['f1e1', 'Re1', 'Reinforce e4 before opening the center.'],
    ],
  },
  {
    parentId: 'italian', id: 'italian-hungarian', variation: 'Hungarian Defense', code: 'C50', at: 5,
    description: 'Black develops quietly to e7. Use the extra time to play d4 and bring your queenside knight into the center.',
    moves: [
      ['f8e7', 'Be7', 'Black develops the bishop to a quieter diagonal.'],
      ['d2d4', 'd4', 'Claim central space before Black is fully developed.'], ['d7d6', 'd6', 'Black supports e5.'],
      ['b1c3', 'Nc3', 'Develop and support both central pawns.'], ['g8f6', 'Nf6', 'Black develops the knight.'],
      ['e1g1', 'O-O', 'Secure the king while retaining the center.'], ['e8g8', 'O-O', 'Black castles too.'],
      ['f1e1', 'Re1', 'Support the e4 pawn.'],
    ],
  },
  {
    parentId: 'italian', id: 'italian-pianissimo', variation: 'Giuoco Pianissimo', code: 'C50', at: 6,
    description: 'If you already played d3, use the quieter setup. Castle, prepare d4 with c3, and reinforce e4 before opening the center.',
    moves: [
      ['d2d3', 'd3', 'Keep e4 defended with a compact center.'], ['g8f6', 'Nf6', 'Black develops and adds pressure to e4.'],
      ['e1g1', 'O-O', 'Castle before opening the position.'], ['d7d6', 'd6', 'Black supports e5.'],
      ['c2c3', 'c3', 'Prepare a later d4 push.'], ['e8g8', 'O-O', 'Black secures the king.'],
      ['f1e1', 'Re1', 'Support e4 and line up the rook against Black’s center.'],
    ],
  },
  {
    parentId: 'ruy-lopez', id: 'ruy-berlin', variation: 'Berlin Defense', code: 'C67', at: 5,
    description: 'Black attacks e4 with …Nf6. Castle, then use d4 to open the center if the knight takes your pawn.',
    moves: [
      ['g8f6', 'Nf6', 'Black challenges e4 immediately.'],
      ['e1g1', 'O-O', 'Secure the king and get the rook into play.'], ['f6e4', 'Nxe4', 'Black takes the e4 pawn.'],
      ['d2d4', 'd4', 'Open the center to regain activity and material.'], ['e4d6', 'Nd6', 'Black retreats and attacks the bishop on b5.'],
      ['b5c6', 'Bxc6', 'Trade bishop for knight and change Black’s pawn structure.'], ['d7c6', 'dxc6', 'Black’s d-pawn recaptures on c6. After dxe5, the white queen has a clear path to d8.'],
      ['d4e5', 'dxe5', 'Recover the pawn with tempo on the knight.'], ['d6f5', 'Nf5', 'Black saves the knight.'],
      ['d1d8', 'Qxd8+', 'Trade queens and enter the Berlin endgame.'], ['e8d8', 'Kxd8', 'Black recaptures with the king.'],
    ],
  },
  {
    parentId: 'london', id: 'london-early-c5', variation: 'Early …c5', code: 'D02', at: 3,
    description: 'An early …c5 puts pressure on d4 and opens the queen’s route to b6. Build your pawn triangle and be ready to defend b2.',
    moves: [
      ['c7c5', 'c5', 'Black challenges d4 early.'],
      ['c1f4', 'Bf4', 'Develop the bishop before playing e3.'], ['b8c6', 'Nc6', 'Black increases pressure on d4.'],
      ['e2e3', 'e3', 'Support d4 and open the bishop’s diagonal.'], ['g8f6', 'Nf6', 'Black develops the kingside knight.'],
      ['c2c3', 'c3', 'Reinforce d4 and make room for the queen.'], ['d8b6', 'Qb6', 'Black targets b2.'],
      ['d1b3', 'Qb3', 'Defend b2 and offer a queen trade.'],
    ],
  },
  {
    parentId: 'caro-kann', id: 'caro-advance', variation: 'Advance variation', code: 'B12', at: 4,
    description: 'White closes the center with e5. Develop your bishop to f5 before …e6, then use …c5 to attack d4.',
    moves: [
      ['e4e5', 'e5', 'White claims space and closes the center.'],
      ['c8f5', 'Bf5', 'Develop the bishop outside the pawn chain.'], ['g1f3', 'Nf3', 'White develops and supports d4.'],
      ['e7e6', 'e6', 'Reinforce d5 and open a path for the other bishop.'], ['f1e2', 'Be2', 'White prepares to castle.'],
      ['c6c5', 'c5', 'Attack d4, the base of the pawn chain.'],
    ],
  },
  {
    parentId: 'caro-kann', id: 'caro-exchange', variation: 'Exchange variation', code: 'B13', at: 4,
    description: 'White takes on d5 early. Recapture with the c-pawn and use the open c-file and natural knight development.',
    moves: [
      ['e4d5', 'exd5', 'White exchanges before developing the knight.'],
      ['c6d5', 'cxd5', 'Restore the center with the c-pawn.'], ['f1d3', 'Bd3', 'White points the bishop toward h7.'],
      ['b8c6', 'Nc6', 'Develop and pressure d4.'], ['c2c3', 'c3', 'White supports d4.'],
      ['g8f6', 'Nf6', 'Develop and control the e4 square.'],
    ],
  },
  {
    parentId: 'sicilian', id: 'sicilian-alapin', variation: 'Alapin variation', code: 'B22', at: 2,
    description: 'White’s c3 prepares a two-pawn center. Attack e4 with …Nf6 and use the d5 square if White advances.',
    moves: [
      ['c2c3', 'c3', 'White prepares d4 without developing a knight first.'],
      ['g8f6', 'Nf6', 'Immediately attack e4.'], ['e4e5', 'e5', 'White attacks the knight.'],
      ['f6d5', 'Nd5', 'Use the central square White has conceded.'], ['d2d4', 'd4', 'White builds the pawn center.'],
      ['c5d4', 'cxd4', 'Exchange before White can gain more space.'], ['c3d4', 'cxd4', 'White recaptures toward the center.'],
      ['d7d6', 'd6', 'Challenge the advance on e5.'],
    ],
  },
  {
    parentId: 'sicilian', id: 'sicilian-dragon', variation: 'Dragon variation', code: 'B70', at: 9,
    description: 'If you played …g6 here, follow through with …Bg7 and castle. The bishop will put pressure on White’s queenside from the long diagonal.',
    moves: [
      ['g7g6', 'g6', 'Choose a kingside fianchetto.'], ['c1e3', 'Be3', 'White develops and prepares a potential kingside attack.'],
      ['f8g7', 'Bg7', 'Develop the Dragon bishop.'], ['f2f3', 'f3', 'White strengthens e4.'],
      ['e8g8', 'O-O', 'Get the king out of the center.'], ['d1d2', 'Qd2', 'White connects the queen and bishop and prepares long castling.'],
      ['b8c6', 'Nc6', 'Develop with pressure on d4.'],
    ],
  },
  {
    parentId: 'queens-gambit', id: 'qgd-exchange', variation: 'Exchange variation', code: 'D35', at: 4,
    description: 'White exchanges early, producing an asymmetrical pawn structure. Recapture on d5, develop, and reinforce d5 with …c6.',
    moves: [
      ['c4d5', 'cxd5', 'White exchanges the c-pawn for the d-pawn.'],
      ['e6d5', 'exd5', 'Keep a pawn on d5 and give Black a half-open e-file.'], ['b1c3', 'Nc3', 'White puts pressure on d5.'],
      ['g8f6', 'Nf6', 'Develop and defend d5.'], ['c1g5', 'Bg5', 'White pins the knight to the queen.'],
      ['c7c6', 'c6', 'Stabilize the center and keep b5 under control.'], ['e2e3', 'e3', 'White opens a path for the bishop.'],
      ['f8e7', 'Be7', 'Break the pin and prepare to castle.'],
    ],
  },
  {
    parentId: 'scotch', id: 'scotch-classical', variation: 'Classical variation', code: 'C45', at: 7,
    description: 'Black’s bishop attacks the knight on d4. Develop your bishop to e3 and use c3 to reinforce d4 against …Qf6.',
    moves: [
      ['f8c5', 'Bc5', 'Black puts pressure on d4.'],
      ['c1e3', 'Be3', 'Develop while defending d4.'], ['d8f6', 'Qf6', 'Black adds pressure to d4.'],
      ['c2c3', 'c3', 'Give the knight another defender.'], ['g8e7', 'Nge7', 'Black develops and prepares to castle.'],
      ['f1c4', 'Bc4', 'Develop actively and prepare to castle.'],
    ],
  },
  {
    parentId: 'queens-gambit-accepted', id: 'qga-slav', variation: 'Slav Defense', code: 'D17', at: 3,
    description: 'Black supports d5 with …c6. If Black later takes on c4, use a4 to discourage …b5 before recovering the pawn.',
    moves: [
      ['c7c6', 'c6', 'Black steers the opening into the Slav Defense.'],
      ['g1f3', 'Nf3', 'Develop and support the center.'], ['g8f6', 'Nf6', 'Black develops.'],
      ['b1c3', 'Nc3', 'Develop the second knight and pressure d5.'], ['d5c4', 'dxc4', 'Black takes the c-pawn.'],
      ['a2a4', 'a4', 'Discourage …b5, which would secure the pawn on c4.'], ['c8f5', 'Bf5', 'Black develops before closing the diagonal.'],
      ['e2e3', 'e3', 'Open the path to recover the c4 pawn.'], ['e7e6', 'e6', 'Black supports the center and frees the other bishop.'],
      ['f1c4', 'Bxc4', 'Regain the pawn with a developing move.'],
    ],
  },
  {
    parentId: 'english', id: 'english-symmetrical', variation: 'Symmetrical English', code: 'A30', at: 1,
    description: 'Black mirrors your c-pawn. Develop both knights and fianchetto while keeping the central pawn breaks flexible.',
    moves: [
      ['c7c5', 'c5', 'Black creates a symmetrical pawn structure.'],
      ['g1f3', 'Nf3', 'Develop and control d4 and e5.'], ['b8c6', 'Nc6', 'Black develops toward the center.'],
      ['b1c3', 'Nc3', 'Develop the second knight and control d5.'], ['g8f6', 'Nf6', 'Black develops the second knight.'],
      ['g2g3', 'g3', 'Prepare the fianchetto.'], ['g7g6', 'g6', 'Black mirrors the setup.'],
      ['f1g2', 'Bg2', 'Put the bishop on the long diagonal.'], ['f8g7', 'Bg7', 'Black does the same.'],
      ['e1g1', 'O-O', 'Castle and keep your options open in the center.'],
    ],
  },
  {
    parentId: 'french', id: 'french-exchange', variation: 'Exchange variation', code: 'C01', at: 4,
    description: 'White trades on d5. Recapture toward the center, then develop naturally and castle in the symmetrical structure.',
    moves: [
      ['e4d5', 'exd5', 'White exchanges on d5. An e-pawn recapture will open the e-file.'],
      ['e6d5', 'exd5', 'Restore material and hold central space.'], ['g1f3', 'Nf3', 'White develops toward the center.'],
      ['g8f6', 'Nf6', 'Develop the knight.'], ['f1d3', 'Bd3', 'White develops toward the kingside.'],
      ['f8d6', 'Bd6', 'Develop your bishop with pressure on h2.'], ['e1g1', 'O-O', 'White castles.'],
      ['e8g8', 'O-O', 'Secure your own king.'],
    ],
  },
  {
    parentId: 'french', id: 'french-classical', variation: 'Classical variation', code: 'C14', at: 4,
    description: 'White defends e4 with Nc3. Develop the knight to f6, break the pin with …Be7, and retreat to d7 when White pushes e5.',
    moves: [
      ['b1c3', 'Nc3', 'White develops and reinforces e4.'],
      ['g8f6', 'Nf6', 'Develop and attack e4.'], ['c1g5', 'Bg5', 'White pins the knight to the queen.'],
      ['f8e7', 'Be7', 'Break the pin and prepare to castle.'], ['e4e5', 'e5', 'White gains space and attacks the knight.'],
      ['f6d7', 'Nfd7', 'Retreat and prepare to challenge the pawn chain with …c5.'],
      ['g5e7', 'Bxe7', 'White exchanges the bishops.'], ['d8e7', 'Qxe7', 'Recapture and support potential central play.'],
    ],
  },
  {
    parentId: 'kings-indian', id: 'kings-indian-fianchetto', variation: 'Fianchetto variation', code: 'E63', at: 6,
    description: 'White prepares Bg2 and keeps the e-pawn back. Castle, then develop with …Nc6 and prepare queenside play with …a6.',
    moves: [
      ['g2g3', 'g3', 'White prepares to oppose the long-diagonal bishop.'],
      ['e8g8', 'O-O', 'Secure the king while the center is flexible.'], ['f1g2', 'Bg2', 'White completes the fianchetto.'],
      ['d7d6', 'd6', 'Control e5 and prepare central play.'], ['g1f3', 'Nf3', 'White develops toward the center.'],
      ['b8c6', 'Nc6', 'Develop and pressure d4.'], ['e1g1', 'O-O', 'White secures the king.'],
      ['a7a6', 'a6', 'Prepare a queenside expansion with …Rb8 and …b5.'],
    ],
  },
  {
    parentId: 'scandinavian', id: 'scandinavian-qd8', variation: 'Queen retreat to d8', code: 'B01', at: 5,
    description: 'If the queen is already back on d8, develop the knights and bishops promptly. The queenside setup from the Qa5 line can wait.',
    moves: [
      ['d5d8', 'Qd8', 'Retreat to a square where the queen is hard to attack.'], ['d2d4', 'd4', 'White claims central space.'],
      ['g8f6', 'Nf6', 'Develop and control e4.'], ['g1f3', 'Nf3', 'White develops and defends d4.'],
      ['g7g6', 'g6', 'Prepare a kingside fianchetto.'], ['f1c4', 'Bc4', 'White develops toward f7.'],
      ['f8g7', 'Bg7', 'Complete the fianchetto and prepare to castle.'],
    ],
  },
  {
    parentId: 'scandinavian', id: 'scandinavian-advance', variation: 'Advance with 2.e5', code: 'B01', at: 2,
    description: 'White keeps the e-pawn and gains space. Strike with …c5 and develop your bishop before closing it in with …e6.',
    moves: [
      ['e4e5', 'e5', 'White advances instead of capturing.'],
      ['c7c5', 'c5', 'Attack the center before White can consolidate it.'], ['g1f3', 'Nf3', 'White develops.'],
      ['b8c6', 'Nc6', 'Develop and attack e5.'], ['d2d4', 'd4', 'White builds a pawn chain.'],
      ['c8g4', 'Bg4', 'Develop the bishop and pin the knight.'], ['f1e2', 'Be2', 'White breaks the pin.'],
      ['e7e6', 'e6', 'Support d5 after bringing the bishop outside the pawn chain.'],
    ],
  },
];

for (const branch of branches) {
  const parent = repertoire.find(opening => opening.id === branch.parentId);
  const { at, moves } = branch;
  const mainMove = parent.moves[at];
  if (!mainMove || mainMove[0] === moves[0][0]) throw new Error(`Invalid branch point for ${branch.id}`);
  const pivotSide = at % 2 ? 'b' : 'w';
  const ownMove = pivotSide === parent.side;
  const start = at + (ownMove ? 2 : 1);
  const opening = compileLine({
    ...parent,
    ...branch,
    revision: branch.revision,
    plans: { [parent.side]: branch.description, [parent.side === 'w' ? 'b' : 'w']: branch.opponentPlan ?? branchOpponentPlans[branch.id] },
    start,
    moves: [...parent.moves.slice(0, at), ...moves],
    pivot: {
      move: notation(at, moves[0][1]),
      main: notation(at, mainMove[1]),
      next: ownMove ? notation(at + 1, moves[1][1]) : null,
      playedBy: sides[pivotSide],
      ownMove,
    },
  });
  if (opening.drillLength < 1) throw new Error(`No recall moves for ${branch.id}`);
  variationsByOpening[parent.id].push(opening);
}

const acceptedCourse = {
  ...qgaBlackCourse,
  coverPly: 4,
  masterPosition: 'd2d4,d7d5,c2c4,d5c4',
  tracks: [
    { id: 'core', title: 'Core repertoire', description: 'Start with the main plans and common replies.', lines: qgaBlackCourse.lessons.filter(lesson => lesson.core).length },
    { id: 'full', title: 'Complete repertoire', description: 'Add deeper replies and move-order branches.', lines: qgaBlackCourse.lessons.length },
  ],
};

export const courses = [
  acceptedCourse,
  queenGambitWhiteCourse,
  { ...hippopotamusCourse, openingId: 'hippo' },
  { ...italianGameCourse, openingId: 'italian' },
  { ...ruyLopezCourse, openingId: 'ruy-lopez' },
].map(course => ({
  ...course,
  lessons: course.lessons.map(lesson => compileLine({
    ...lesson,
    title: course.title,
    side: course.side,
    code: course.code,
    icon: course.icon,
    courseId: course.id,
  })),
}));

export const trainingLines = [
  ...openings,
  ...Object.values(variationsByOpening).flat(),
  ...courses.flatMap(course => course.lessons),
];
