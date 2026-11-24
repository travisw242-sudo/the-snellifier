export const hippopotamusCourse = {
  "id": "hippopotamus-defense",
  "title": "Hippopotamus Defense",
  "side": "b",
  "code": "B06",
  "icon": "n",
  "coverPly": 18,
  "masterPosition": "e2e4,g7g6,d2d4,f8g7",
  "description": "Build the double fianchetto, then learn when to keep the setup and when to strike back with a central break.",
  "credit": "Core lines are curated. Deeper branches use moves played in master games and continuations prepared with Stockfish 17.1. Engine-prepared practice positions cover replies with sparse master-game examples.",
  "tracks": [
    {
      "id": "core",
      "title": "Core repertoire",
      "description": "Learn the main setups and responses.",
      "lines": 18
    },
    {
      "id": "advanced",
      "title": "Advanced repertoire",
      "description": "Add common deviations and move-order choices.",
      "lines": 36
    },
    {
      "id": "full",
      "title": "Complete repertoire",
      "description": "Study every branch, including deeper replies.",
      "lines": 54
    }
  ],
  "chapters": [
    {
      "id": "setup",
      "title": "The double fianchetto",
      "description": "Build the pawn screen, put the bishops on b7 and g7, and develop the knights behind the center."
    },
    {
      "id": "center",
      "title": "When White opens the center",
      "description": "Answer e5 and d5 with exchanges or a pawn break. Keep enough time to develop and secure the king."
    },
    {
      "id": "space",
      "title": "Against the c4 center",
      "description": "Watch the d5 square and decide whether to challenge White with …c5, …e5, or an exchange."
    },
    {
      "id": "flanks",
      "title": "Flank attacks and move orders",
      "description": "Meet early h4 or a4 and recognize when an English or kingside fianchetto calls for a different setup."
    }
  ],
  "lessons": [
    {
      "id": "hippopotamus-defense-setup-main",
      "variation": "The full Hippopotamus setup",
      "chapter": "setup",
      "core": true,
      "at": 0,
      "start": 1,
      "caption": "Build the two fianchettos and both knight posts.",
      "description": "Develop both bishops, then put the knights on d7 and e7. Keep …c5 and …f5 in reserve until White commits the center.",
      "plans": {
        "w": "Take space with e4, d4, and f4. Develop and choose a central break before Black’s pieces can coordinate.",
        "b": "Develop both bishops, then put the knights on d7 and e7. Keep …c5 and …f5 in reserve until White commits the center."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f2f4", "f4", "Advance the pawn to f4. It controls e5."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It attacks the pawn on a6."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."],
        ["c1e3", "Be3", "Develop the bishop to e3. It supports the pawn on d4."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["d1d2", "Qd2", "Move the queen to d2. The piece is ready to support the next phase of development."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."]
      ]
    },
    {
      "id": "hippopotamus-defense-setup-nf3",
      "variation": "Quiet Nf3 move order",
      "chapter": "setup",
      "core": true,
      "at": 4,
      "start": 5,
      "caption": "Recognize the Hippo after a quieter start.",
      "description": "Use the quieter move order to finish both fianchettos. Watch e5 once White has a rook on e1.",
      "plans": {
        "w": "Castle and use Re1 to support e4. Keep a push to e5 available and develop the c1-bishop.",
        "b": "Use the quieter move order to finish both fianchettos. Watch e5 once White has a rook on e1."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["f1e2", "Be2", "Develop the bishop to e2. It attacks the pawn on a6."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["f1e1", "Re1", "Bring the rook to e1 to support play along the e-file."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["e2f1", "Bf1", "Move the bishop to f1. It attacks the pawn on a6."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."],
        ["c1e3", "Be3", "Develop the bishop to e3. It supports the pawn on d4."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."]
      ]
    },
    {
      "id": "hippopotamus-defense-setup-long",
      "variation": "Be3 and long castling",
      "chapter": "setup",
      "core": true,
      "at": 6,
      "start": 7,
      "caption": "Close the h-file when White prepares a pawn storm.",
      "description": "Keep the center flexible while the bishops develop. When White plays h4, stop the immediate advance with …h5 and consider queenside play.",
      "plans": {
        "w": "Build a battery with Be3 and Qd2, castle queenside, and use h4 to gain space around Black’s king.",
        "b": "Keep the center flexible while the bishops develop. When White plays h4, stop the immediate advance with …h5 and consider queenside play."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["c1e3", "Be3", "Develop the bishop to e3. It supports the pawn on d4."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["d1d2", "Qd2", "Move the queen to d2. It supports the pawn on d4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["f2f3", "f3", "Advance the pawn to f3. It supports the pawn on e4."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["e1c1", "O-O-O", "Castle queenside to activate the rook on the d-file and move the king away from the center."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."],
        ["h2h4", "h4", "Advance the pawn to h4. This changes the kingside pawn cover and gives nearby pieces more room."],
        ["h7h5", "h5", "Block White’s h-pawn on h4.", "White can still use g4 to challenge the structure, so keep the king flexible."]
      ]
    },
    {
      "id": "hippopotamus-defense-setup-bc4",
      "variation": "Early Bc4",
      "chapter": "setup",
      "core": true,
      "at": 8,
      "start": 9,
      "caption": "Cover the bishop’s diagonal and finish development.",
      "description": "Keep f7 in mind while developing. …e6 interrupts the c4-bishop’s diagonal, and …Nd7 helps prepare a central break.",
      "plans": {
        "w": "Aim the bishop at f7 and castle. Use a4 to restrain Black’s queenside expansion.",
        "b": "Keep f7 in mind while developing. …e6 interrupts the c4-bishop’s diagonal, and …Nd7 helps prepare a central break."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["f1c4", "Bc4", "Develop the bishop to c4. It attacks the pawn on a6 and pawn on f7."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["f1e1", "Re1", "Bring the rook to e1 to support play along the e-file. It supports the pawn on e4."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["a2a4", "a4", "Advance the pawn to a4. This gains space on the queenside and changes which pawn exchanges are available."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."]
      ]
    },
    {
      "id": "hippopotamus-defense-center-e5",
      "variation": "The early e5 break",
      "chapter": "center",
      "core": true,
      "at": 10,
      "start": 11,
      "caption": "Trade on e5 and prepare to castle.",
      "description": "Exchange on e5, use …e6 to control d5, and develop the knight to e7 so Black can castle.",
      "plans": {
        "w": "Advance e5 before Black has finished developing. Recapture with the f-pawn and use the space to develop actively.",
        "b": "Exchange on e5, use …e6 to control d5, and develop the knight to e7 so Black can castle."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f2f4", "f4", "Advance the pawn to f4. It controls e5."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["e4e5", "e5", "Advance the pawn to e5. It attacks the pawn on d6."],
        ["d6e5", "dxe5", "Take the pawn on e5. It attacks the pawn on d4 and pawn on f4."],
        ["f4e5", "fxe5", "Take the pawn on e5."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It attacks the pawn on a6 and pawn on g6."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."]
      ]
    },
    {
      "id": "hippopotamus-defense-center-d5",
      "variation": "The early d5 push",
      "chapter": "center",
      "core": true,
      "at": 10,
      "start": 11,
      "caption": "Challenge the advanced pawn with …e6.",
      "description": "Attack the advanced pawn with …e6. If White exchanges, recover with the bishop and finish kingside development.",
      "plans": {
        "w": "Advance d5 to gain space and choose whether to keep the tension or exchange on e6.",
        "b": "Attack the advanced pawn with …e6. If White exchanges, recover with the bishop and finish kingside development."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f2f4", "f4", "Advance the pawn to f4. It controls e5."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["d4d5", "d5", "Advance the pawn to d5. This changes the central pawn structure and the lines available to the pieces."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["d5e6", "dxe6", "Take the pawn on e6. It attacks the pawn on f7."],
        ["c8e6", "Bxe6", "Take the pawn on e6 while developing the bishop. It attacks the pawn on a2."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It attacks the pawn on a6."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."]
      ]
    },
    {
      "id": "hippopotamus-defense-center-late-e5",
      "variation": "e5 after White castles",
      "chapter": "center",
      "core": true,
      "at": 14,
      "start": 15,
      "caption": "Recapture toward the center when White takes on d6.",
      "description": "Solidify with …e6 and answer exd6 with …cxd6. Develop the g8-knight and look to castle.",
      "plans": {
        "w": "Use e5 to gain space, then open lines by exchanging on d6 while Black’s king is in the center.",
        "b": "Solidify with …e6 and answer exd6 with …cxd6. Develop the g8-knight and look to castle."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f2f4", "f4", "Advance the pawn to f4. It controls e5."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It attacks the pawn on a6."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."],
        ["e4e5", "e5", "Advance the pawn to e5. It attacks the pawn on d6."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["e5d6", "exd6", "Take the pawn on d6. It attacks the pawn on c7."],
        ["c7d6", "cxd6", "Take the pawn on d6. It controls e5."],
        ["d1e2", "Qe2", "Move the queen to e2. It attacks the pawn on e6."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."]
      ]
    },
    {
      "id": "hippopotamus-defense-center-late-d5",
      "variation": "d5 against the pawn screen",
      "chapter": "center",
      "core": true,
      "at": 16,
      "start": 17,
      "caption": "Exchange before the space advantage grows.",
      "description": "Use …exd5 to ease the tension, then develop the knight and prepare to pressure the d5-pawn.",
      "plans": {
        "w": "Push d5 while the bishops and knights are active. Recapture toward the center to keep a pawn on d5.",
        "b": "Use …exd5 to ease the tension, then develop the knight and prepare to pressure the d5-pawn."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f2f4", "f4", "Advance the pawn to f4. It controls e5."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It attacks the pawn on a6."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."],
        ["c1e3", "Be3", "Develop the bishop to e3. It supports the pawn on d4."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["d4d5", "d5", "Advance the pawn to d5. It attacks the pawn on e6."],
        ["e6d5", "exd5", "Take the pawn on d5. It attacks the pawn on e4."],
        ["e4d5", "exd5", "Take the pawn on d5."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."]
      ]
    },
    {
      "id": "hippopotamus-defense-space-main",
      "variation": "The broad center with c4",
      "chapter": "space",
      "core": true,
      "at": 4,
      "start": 5,
      "caption": "Finish the setup against three central pawns.",
      "description": "Develop behind the pawn screen and aim both bishops toward the center. Wait for a useful …c5 or …f5 break.",
      "plans": {
        "w": "Hold the c4–d4–e4 center and develop behind it. Use d5 when it gains space without overextending.",
        "b": "Develop behind the pawn screen and aim both bishops toward the center. Wait for a useful …c5 or …f5 break."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["f1e2", "Be2", "Develop the bishop to e2. It supports the pawn on c4."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."],
        ["c1e3", "Be3", "Develop the bishop to e3. It supports the pawn on d4."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."]
      ]
    },
    {
      "id": "hippopotamus-defense-space-re1",
      "variation": "Re1 reinforces e4",
      "chapter": "space",
      "core": true,
      "at": 14,
      "start": 15,
      "caption": "Secure the king before testing e4.",
      "description": "Finish knight development and castle. The rook supports e4, so use a pawn break to challenge the center rather than relying on piece pressure alone.",
      "plans": {
        "w": "Place the rook on e1 and keep the bishop on f1 so the center can advance safely.",
        "b": "Finish knight development and castle. The rook supports e4, so use a pawn break to challenge the center rather than relying on piece pressure alone."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["f1e2", "Be2", "Develop the bishop to e2. It supports the pawn on c4."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."],
        ["f1e1", "Re1", "Bring the rook to e1 to support play along the e-file."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."],
        ["e2f1", "Bf1", "Move the bishop to f1. It supports the pawn on c4."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."]
      ]
    },
    {
      "id": "hippopotamus-defense-space-f3",
      "variation": "The f3 center",
      "chapter": "space",
      "core": true,
      "at": 8,
      "start": 9,
      "caption": "Complete development against a reinforced e4-pawn.",
      "description": "Develop both bishops and knights. Look for counterplay on d4, especially while White’s king remains in the center.",
      "plans": {
        "w": "Reinforce e4 with f3, develop Be3 and Qd2, and preserve long castling as an option.",
        "b": "Develop both bishops and knights. Look for counterplay on d4, especially while White’s king remains in the center."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["f2f3", "f3", "Advance the pawn to f3. It supports the pawn on e4."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["c1e3", "Be3", "Develop the bishop to e3. It supports the pawn on d4."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["d1d2", "Qd2", "Move the queen to d2. It supports the pawn on d4."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It supports the pawn on c4 and pawn on e4."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."]
      ]
    },
    {
      "id": "hippopotamus-defense-space-d5",
      "variation": "d5 closes the center",
      "chapter": "space",
      "core": true,
      "at": 14,
      "start": 15,
      "caption": "Use …e5 when a closed center favors flank play.",
      "description": "Close the center with …e5. Develop and look toward …f5 or …c6 according to White’s setup.",
      "plans": {
        "w": "Advance d5 and develop behind the pawn chain. Seek a favorable pawn break once the center is closed.",
        "b": "Close the center with …e5. Develop and look toward …f5 or …c6 according to White’s setup."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["f1e2", "Be2", "Develop the bishop to e2. It supports the pawn on c4."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."],
        ["d4d5", "d5", "Advance the pawn to d5. It attacks the pawn on e6."],
        ["e6e5", "e5", "Advance the pawn to e5. It controls d4."],
        ["c1e3", "Be3", "Develop the bishop to e3. It attacks the pawn on b6."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."]
      ]
    },
    {
      "id": "hippopotamus-defense-space-d4",
      "variation": "Starting against 1.d4",
      "chapter": "space",
      "core": true,
      "at": 2,
      "start": 3,
      "caption": "Reach the same structure through 1.d4 and 2.c4.",
      "description": "Recognize the transposition. The familiar …b6, …Bb7 and knight setup also works after White begins with d4 and c4.",
      "plans": {
        "w": "Use c4 and e4 to occupy the center and restrict the bishops before Black completes development.",
        "b": "Recognize the transposition. The familiar …b6, …Bb7 and knight setup also works after White begins with d4 and c4."
      },
      "moves": [
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It controls e4 and d5."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["e2e4", "e4", "Advance the pawn to e4. It controls d5."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["f1e2", "Be2", "Develop the bishop to e2. It supports the pawn on c4."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."],
        ["c1e3", "Be3", "Develop the bishop to e3. It supports the pawn on d4."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."]
      ]
    },
    {
      "id": "hippopotamus-defense-flanks-h4",
      "variation": "Immediate h4",
      "chapter": "flanks",
      "core": true,
      "at": 4,
      "start": 5,
      "caption": "Block the h-pawn before it reaches h5.",
      "description": "Stop h5 with …h5, then develop. Keep the king flexible until you see where White places the queen and king.",
      "plans": {
        "w": "Advance h4 early to threaten h5 and test the kingside fianchetto before Black can finish developing.",
        "b": "Stop h5 with …h5, then develop. Keep the king flexible until you see where White places the queen and king."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["h2h4", "h4", "Advance the pawn to h4. This changes the kingside pawn cover and gives nearby pieces more room."],
        ["h7h5", "h5", "Block White’s h-pawn on h4.", "White can still use g4 to challenge the structure, so keep the king flexible."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["c1e3", "Be3", "Develop the bishop to e3. It supports the pawn on d4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["d1d2", "Qd2", "Move the queen to d2. It supports the pawn on d4."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."]
      ]
    },
    {
      "id": "hippopotamus-defense-flanks-h4-late",
      "variation": "h4 after Nc3",
      "chapter": "flanks",
      "core": true,
      "at": 6,
      "start": 7,
      "caption": "Shift to queenside play when White threatens the king.",
      "description": "Hold the h-file and use …c6 and …b5 for counterplay. If White castles long, the queenside becomes the immediate target.",
      "plans": {
        "w": "Prepare long castling with Be3 and Qd2, then look for kingside play while Black must choose where to put the king.",
        "b": "Hold the h-file and use …c6 and …b5 for counterplay. If White castles long, the queenside becomes the immediate target."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["h2h4", "h4", "Advance the pawn to h4. This changes the kingside pawn cover and gives nearby pieces more room."],
        ["h7h5", "h5", "Block White’s h-pawn on h4.", "White can still use g4 to challenge the structure, so keep the king flexible."],
        ["c1e3", "Be3", "Develop the bishop to e3. It supports the pawn on d4."],
        ["c7c6", "c6", "Advance the pawn to c6. It controls d5."],
        ["d1d2", "Qd2", "Move the queen to d2. It supports the pawn on d4."],
        ["b7b5", "b5", "Advance the pawn to b5. This gains space on the queenside and changes which pawn exchanges are available."],
        ["e1c1", "O-O-O", "Castle queenside to activate the rook on the d-file and move the king away from the center."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."]
      ]
    },
    {
      "id": "hippopotamus-defense-flanks-a4",
      "variation": "a4 restrains the queenside",
      "chapter": "flanks",
      "core": true,
      "at": 8,
      "start": 9,
      "caption": "Use the fianchetto when …b5 is restrained.",
      "description": "Develop the second bishop with …b6 and …Bb7. When …b5 is restrained, put the knights in place and plan a central break.",
      "plans": {
        "w": "Use a4 to limit …b5 without postponing development. Castle and keep the central choices open.",
        "b": "Develop the second bishop with …b6 and …Bb7. When …b5 is restrained, put the knights in place and plan a central break."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["a2a4", "a4", "Advance the pawn to a4. This gains space on the queenside and changes which pawn exchanges are available."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["f1e2", "Be2", "Develop the bishop to e2. It attacks the pawn on a6."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["c1e3", "Be3", "Develop the bishop to e3. It supports the pawn on d4."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."]
      ]
    },
    {
      "id": "hippopotamus-defense-flanks-english",
      "variation": "The English fianchetto",
      "chapter": "flanks",
      "core": true,
      "at": 2,
      "start": 3,
      "caption": "Use …e5 when White leaves the central squares free.",
      "description": "Take space with …e5 while you can. Develop the knights and castle into a reversed Sicilian structure.",
      "plans": {
        "w": "Control d5 with c4 and the g2-bishop. Develop and wait for a useful central advance instead of pushing d4 immediately.",
        "b": "Take space with …e5 while you can. Develop the knights and castle into a reversed Sicilian structure."
      },
      "moves": [
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["b1c3", "Nc3", "Develop the knight to c3. It controls e4 and d5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["g2g3", "g3", "Advance the pawn to g3. This changes the kingside pawn cover and gives nearby pieces more room."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f1g2", "Bg2", "Develop the bishop to g2. It attacks the pawn on b7."],
        ["e7e5", "e5", "Contest space in the center and control d4 and f4."],
        ["d2d3", "d3", "Advance the pawn to d3. It supports the pawn on c4."],
        ["b8c6", "Nc6", "Develop the knight to c6. It supports the pawn on e5."],
        ["g1f3", "Nf3", "Develop the knight and attack e5.", "The knight also clears g1 so White can castle after developing the bishop."],
        ["g8e7", "Nge7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."]
      ]
    },
    {
      "id": "hippopotamus-defense-flanks-g3",
      "variation": "The d4 and g3 setup",
      "chapter": "flanks",
      "core": true,
      "at": 4,
      "start": 5,
      "caption": "Match the fianchetto and prepare the knights.",
      "description": "Develop the b7-bishop and preserve flexibility in the center. Delay an early pawn break until the knights are ready.",
      "plans": {
        "w": "Place the bishop on g2 to contest the long diagonal, then expand with c4 after castling.",
        "b": "Develop the b7-bishop and preserve flexibility in the center. Delay an early pawn break until the knights are ready."
      },
      "moves": [
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["g2g3", "g3", "Advance the pawn to g3. This changes the kingside pawn cover and gives nearby pieces more room."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f1g2", "Bg2", "Develop the bishop to g2. This puts the bishop on a new diagonal for later play."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."],
        ["b1c3", "Nc3", "Develop the knight to c3. It controls e4 and d5."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."]
      ]
    },
    {
      "id": "hippopotamus-defense-setup-main-4-c2c3",
      "variation": "Against 3.c3",
      "chapter": "setup",
      "core": false,
      "at": 4,
      "start": 5,
      "caption": "The full Hippopotamus setup · 1,556 master games with this reply",
      "description": "Advance the pawn to d5. It attacks the pawn on e4. Advance the pawn to f6. It attacks the pawn on e5.",
      "plans": {
        "w": "Advance the pawn to c3. It supports the pawn on d4. Advance the pawn to e5. This changes the central pawn structure and the lines available to the pieces.",
        "b": "Advance the pawn to d5. It attacks the pawn on e4. Advance the pawn to f6. It attacks the pawn on e5."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["c2c3", "c3", "Advance the pawn to c3. It supports the pawn on d4."],
        ["d7d5", "d5", "Advance the pawn to d5. It attacks the pawn on e4."],
        ["e4e5", "e5", "Advance the pawn to e5. This changes the central pawn structure and the lines available to the pieces."],
        ["f7f6", "f6", "Advance the pawn to f6. It attacks the pawn on e5."]
      ]
    },
    {
      "id": "hippopotamus-defense-setup-nf3-6-f1c4",
      "variation": "Against 4.Bc4",
      "chapter": "setup",
      "core": false,
      "at": 6,
      "start": 7,
      "caption": "Quiet Nf3 move order · 2,355 master games with this reply",
      "description": "Develop the knight to f6. It attacks the pawn on e4. Advance the pawn to c6. It controls d5.",
      "plans": {
        "w": "Develop the bishop to c4. It attacks the pawn on f7. Move the queen to e2. It supports the bishop on c4 and pawn on e4.",
        "b": "Develop the knight to f6. It attacks the pawn on e4. Advance the pawn to c6. It controls d5."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f1c4", "Bc4", "Develop the bishop to c4. It attacks the pawn on f7."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["d1e2", "Qe2", "Move the queen to e2. It supports the bishop on c4 and pawn on e4."],
        ["c7c6", "c6", "Advance the pawn to c6. It controls d5."]
      ]
    },
    {
      "id": "hippopotamus-defense-setup-main-6-c1g5",
      "variation": "Against 4.Bg5",
      "chapter": "setup",
      "core": false,
      "at": 6,
      "start": 7,
      "caption": "The full Hippopotamus setup · 1,053 master games with this reply",
      "description": "Take space on the queenside and put pressure on d4. Develop the knight to f6. It attacks the pawn on e4 and pawn on d5.",
      "plans": {
        "w": "Develop the bishop to g5. It attacks the pawn on e7. Advance the pawn to d5. This changes the central pawn structure and the lines available to the pieces.",
        "b": "Take space on the queenside and put pressure on d4. Develop the knight to f6. It attacks the pawn on e4 and pawn on d5."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["c1g5", "Bg5", "Develop the bishop to g5. It attacks the pawn on e7."],
        ["c7c5", "c5", "Take space on the queenside and put pressure on d4."],
        ["d4d5", "d5", "Advance the pawn to d5. This changes the central pawn structure and the lines available to the pieces."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4 and pawn on d5."]
      ]
    },
    {
      "id": "hippopotamus-defense-setup-long-8-a2a4",
      "variation": "Against 5.a4",
      "chapter": "setup",
      "core": false,
      "at": 8,
      "start": 9,
      "caption": "Be3 and long castling · 804 master games with this reply",
      "description": "Develop the knight to f6. It attacks the pawn on e4. Castle kingside to secure the king and bring the rook toward the center.",
      "plans": {
        "w": "Advance the pawn to a4. This gains space on the queenside and changes which pawn exchanges are available. Advance the pawn to h3. This changes the kingside pawn cover and gives nearby pieces more room.",
        "b": "Develop the knight to f6. It attacks the pawn on e4. Castle kingside to secure the king and bring the rook toward the center."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["c1e3", "Be3", "Develop the bishop to e3. It supports the pawn on d4."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["a2a4", "a4", "Advance the pawn to a4. This gains space on the queenside and changes which pawn exchanges are available."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["h2h3", "h3", "Advance the pawn to h3. This changes the kingside pawn cover and gives nearby pieces more room."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."]
      ]
    },
    {
      "id": "hippopotamus-defense-center-late-d5-20-f4f5",
      "variation": "Against 11.f5",
      "chapter": "center",
      "core": false,
      "at": 20,
      "start": 21,
      "caption": "d5 against the pawn screen · Engine-prepared practice position",
      "description": "Castle kingside to secure the king and bring the rook toward the center. Take the knight on c3. It attacks the pawn on b2.",
      "plans": {
        "w": "Advance the pawn to f5. It attacks the pawn on g6. Move the knight to g5. It attacks the pawn on f7 and pawn on h7.",
        "b": "Castle kingside to secure the king and bring the rook toward the center. Take the knight on c3. It attacks the pawn on b2."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f2f4", "f4", "Advance the pawn to f4. It controls e5."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It attacks the pawn on a6."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."],
        ["c1e3", "Be3", "Develop the bishop to e3. It supports the pawn on d4."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["d4d5", "d5", "Advance the pawn to d5. It attacks the pawn on e6."],
        ["e6d5", "exd5", "Take the pawn on d5. It attacks the pawn on e4."],
        ["e4d5", "exd5", "Take the pawn on d5."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."],
        ["f4f5", "f5", "Advance the pawn to f5. It attacks the pawn on g6."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["f3g5", "Ng5", "Move the knight to g5. It attacks the pawn on f7 and pawn on h7."],
        ["g7c3", "Bxc3", "Take the knight on c3. It attacks the pawn on b2."]
      ]
    },
    {
      "id": "hippopotamus-defense-center-late-d5-20-e3d4",
      "variation": "Against 11.Bd4",
      "chapter": "center",
      "core": false,
      "at": 20,
      "start": 21,
      "caption": "d5 against the pawn screen · Engine-prepared practice position",
      "description": "Castle kingside to secure the king and bring the rook toward the center. Take the bishop on g7 while developing the king.",
      "plans": {
        "w": "Move the bishop to d4. It attacks the pawn on b6 and bishop on g7. Take the bishop on g7. It attacks the rook on f8.",
        "b": "Castle kingside to secure the king and bring the rook toward the center. Take the bishop on g7 while developing the king."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f2f4", "f4", "Advance the pawn to f4. It controls e5."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It attacks the pawn on a6."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."],
        ["c1e3", "Be3", "Develop the bishop to e3. It supports the pawn on d4."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["d4d5", "d5", "Advance the pawn to d5. It attacks the pawn on e6."],
        ["e6d5", "exd5", "Take the pawn on d5. It attacks the pawn on e4."],
        ["e4d5", "exd5", "Take the pawn on d5."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."],
        ["e3d4", "Bd4", "Move the bishop to d4. It attacks the pawn on b6 and bishop on g7."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["d4g7", "Bxg7", "Take the bishop on g7. It attacks the rook on f8."],
        ["g8g7", "Kxg7", "Take the bishop on g7 while developing the king."]
      ]
    },
    {
      "id": "hippopotamus-defense-center-late-d5-20-d1e1",
      "variation": "Against 11.Qe1",
      "chapter": "center",
      "core": false,
      "at": 20,
      "start": 21,
      "caption": "d5 against the pawn screen · Engine-prepared practice position",
      "description": "Move the knight to c5. It attacks the bishop on d3. Take the bishop on d3. It attacks the queen on e1 and pawn on b2.",
      "plans": {
        "w": "Move the queen to e1. The piece is ready to support the next phase of development. Move the bishop to d4. It attacks the knight on c5 and bishop on g7.",
        "b": "Move the knight to c5. It attacks the bishop on d3. Take the bishop on d3. It attacks the queen on e1 and pawn on b2."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f2f4", "f4", "Advance the pawn to f4. It controls e5."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It attacks the pawn on a6."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."],
        ["c1e3", "Be3", "Develop the bishop to e3. It supports the pawn on d4."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["d4d5", "d5", "Advance the pawn to d5. It attacks the pawn on e6."],
        ["e6d5", "exd5", "Take the pawn on d5. It attacks the pawn on e4."],
        ["e4d5", "exd5", "Take the pawn on d5."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."],
        ["d1e1", "Qe1", "Move the queen to e1. The piece is ready to support the next phase of development."],
        ["d7c5", "Nc5", "Move the knight to c5. It attacks the bishop on d3."],
        ["e3d4", "Bd4", "Move the bishop to d4. It attacks the knight on c5 and bishop on g7."],
        ["c5d3", "Nxd3", "Take the bishop on d3. It attacks the queen on e1 and pawn on b2."]
      ]
    },
    {
      "id": "hippopotamus-defense-center-late-e5-20-c3e4",
      "variation": "Against 11.Ne4",
      "chapter": "center",
      "core": false,
      "at": 20,
      "start": 21,
      "caption": "e5 after White castles · Engine-prepared practice position",
      "description": "Move the queen to c7. It attacks the pawn on c2. Castle kingside to secure the king and bring the rook toward the center.",
      "plans": {
        "w": "Move the knight to e4. It attacks the pawn on d6. Advance the pawn to a4. This gains space on the queenside and changes which pawn exchanges are available.",
        "b": "Move the queen to c7. It attacks the pawn on c2. Castle kingside to secure the king and bring the rook toward the center."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f2f4", "f4", "Advance the pawn to f4. It controls e5."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It attacks the pawn on a6."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."],
        ["e4e5", "e5", "Advance the pawn to e5. It attacks the pawn on d6."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["e5d6", "exd6", "Take the pawn on d6. It attacks the pawn on c7."],
        ["c7d6", "cxd6", "Take the pawn on d6. It controls e5."],
        ["d1e2", "Qe2", "Move the queen to e2. It attacks the pawn on e6."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."],
        ["c3e4", "Ne4", "Move the knight to e4. It attacks the pawn on d6."],
        ["d8c7", "Qc7", "Move the queen to c7. It attacks the pawn on c2."],
        ["a2a4", "a4", "Advance the pawn to a4. This gains space on the queenside and changes which pawn exchanges are available."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."]
      ]
    },
    {
      "id": "hippopotamus-defense-space-d4-4-g1f3",
      "variation": "Against 3.Nf3",
      "chapter": "space",
      "core": false,
      "at": 4,
      "start": 5,
      "caption": "Starting against 1.d4 · 2,297 master games with this reply",
      "description": "Develop the knight to f6. It controls e4 and d5. Advance the pawn to d5. It attacks the pawn on c4.",
      "plans": {
        "w": "Develop the knight to f3. It supports the pawn on d4. Develop the knight to c3. It controls e4 and d5.",
        "b": "Develop the knight to f6. It controls e4 and d5. Advance the pawn to d5. It attacks the pawn on c4."
      },
      "moves": [
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["g8f6", "Nf6", "Develop the knight to f6. It controls e4 and d5."],
        ["b1c3", "Nc3", "Develop the knight to c3. It controls e4 and d5."],
        ["d7d5", "d5", "Advance the pawn to d5. It attacks the pawn on c4."]
      ]
    },
    {
      "id": "hippopotamus-defense-space-d4-4-g2g3",
      "variation": "Against 3.g3",
      "chapter": "space",
      "core": false,
      "at": 4,
      "start": 5,
      "caption": "Starting against 1.d4 · 355 master games with this reply",
      "description": "Take space on the queenside and put pressure on d4. Move the queen to a5. The move gives check and forces a reply.",
      "plans": {
        "w": "Advance the pawn to g3. This changes the kingside pawn cover and gives nearby pieces more room. Advance the pawn to d5. This changes the central pawn structure and the lines available to the pieces.",
        "b": "Take space on the queenside and put pressure on d4. Move the queen to a5. The move gives check and forces a reply."
      },
      "moves": [
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["g2g3", "g3", "Advance the pawn to g3. This changes the kingside pawn cover and gives nearby pieces more room."],
        ["c7c5", "c5", "Take space on the queenside and put pressure on d4."],
        ["d4d5", "d5", "Advance the pawn to d5. This changes the central pawn structure and the lines available to the pieces."],
        ["d8a5", "Qa5+", "Move the queen to a5. The move gives check and forces a reply."]
      ]
    },
    {
      "id": "hippopotamus-defense-space-d4-6-g1f3",
      "variation": "Against 4.Nf3",
      "chapter": "space",
      "core": false,
      "at": 6,
      "start": 7,
      "caption": "Starting against 1.d4 · 1,085 master games with this reply",
      "description": "Develop the knight to f6. It controls e4 and d5. Castle kingside to secure the king and bring the rook toward the center.",
      "plans": {
        "w": "Develop the knight to f3. It supports the pawn on d4. Advance the pawn to e4. It controls d5.",
        "b": "Develop the knight to f6. It controls e4 and d5. Castle kingside to secure the king and bring the rook toward the center."
      },
      "moves": [
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It controls e4 and d5."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["g8f6", "Nf6", "Develop the knight to f6. It controls e4 and d5."],
        ["e2e4", "e4", "Advance the pawn to e4. It controls d5."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."]
      ]
    },
    {
      "id": "hippopotamus-defense-space-main-6-g1f3",
      "variation": "Against 4.Nf3",
      "chapter": "space",
      "core": false,
      "at": 6,
      "start": 7,
      "caption": "The broad center with c4 · 285 master games with this reply",
      "description": "Develop the knight to f6. It attacks the pawn on e4. Castle kingside to secure the king and bring the rook toward the center.",
      "plans": {
        "w": "Develop the knight to f3. It supports the pawn on d4. Develop the knight to c3. It supports the pawn on e4.",
        "b": "Develop the knight to f6. It attacks the pawn on e4. Castle kingside to secure the king and bring the rook toward the center."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."]
      ]
    },
    {
      "id": "hippopotamus-defense-space-d4-6-g2g3",
      "variation": "Against 4.g3",
      "chapter": "space",
      "core": false,
      "at": 6,
      "start": 7,
      "caption": "Starting against 1.d4 · 164 master games with this reply",
      "description": "Develop the knight to f6. It controls e4 and d5. Develop the queenside knight behind the pawn screen.",
      "plans": {
        "w": "Advance the pawn to g3. This changes the kingside pawn cover and gives nearby pieces more room. Develop the bishop to g2. It attacks the pawn on b7.",
        "b": "Develop the knight to f6. It controls e4 and d5. Develop the queenside knight behind the pawn screen."
      },
      "moves": [
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It controls e4 and d5."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["g2g3", "g3", "Advance the pawn to g3. This changes the kingside pawn cover and gives nearby pieces more room."],
        ["g8f6", "Nf6", "Develop the knight to f6. It controls e4 and d5."],
        ["f1g2", "Bg2", "Develop the bishop to g2. It attacks the pawn on b7."],
        ["b8d7", "Nbd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."]
      ]
    },
    {
      "id": "hippopotamus-defense-flanks-english-4-d2d4",
      "variation": "Against 3.d4",
      "chapter": "flanks",
      "core": false,
      "at": 4,
      "start": 5,
      "caption": "The English fianchetto · 1,457 master games with this reply",
      "description": "Control e5 and free the c8-bishop’s diagonal. Develop the knight to f6. It controls e4 and d5.",
      "plans": {
        "w": "Advance the pawn to d4. It controls e5. Develop the knight to f3. It supports the pawn on d4.",
        "b": "Control e5 and free the c8-bishop’s diagonal. Develop the knight to f6. It controls e4 and d5."
      },
      "moves": [
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["b1c3", "Nc3", "Develop the knight to c3. It controls e4 and d5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["g8f6", "Nf6", "Develop the knight to f6. It controls e4 and d5."]
      ]
    },
    {
      "id": "hippopotamus-defense-flanks-g3-4-c2c3",
      "variation": "Against 3.c3",
      "chapter": "flanks",
      "core": false,
      "at": 4,
      "start": 5,
      "caption": "The d4 and g3 setup · 531 master games with this reply",
      "description": "Develop the knight to f6. It controls e4 and d5. Take space on the queenside and put pressure on d4.",
      "plans": {
        "w": "Advance the pawn to c3. It supports the pawn on d4. Develop the bishop to g5. It attacks the knight on f6.",
        "b": "Develop the knight to f6. It controls e4 and d5. Take space on the queenside and put pressure on d4."
      },
      "moves": [
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["c2c3", "c3", "Advance the pawn to c3. It supports the pawn on d4."],
        ["g8f6", "Nf6", "Develop the knight to f6. It controls e4 and d5."],
        ["c1g5", "Bg5", "Develop the bishop to g5. It attacks the knight on f6."],
        ["c7c5", "c5", "Take space on the queenside and put pressure on d4."]
      ]
    },
    {
      "id": "hippopotamus-defense-flanks-english-8-e2e3",
      "variation": "Against 5.e3",
      "chapter": "flanks",
      "core": false,
      "at": 8,
      "start": 9,
      "caption": "The English fianchetto · 660 master games with this reply",
      "description": "Develop the knight to f6. It controls e4 and d5. Castle kingside to secure the king and bring the rook toward the center.",
      "plans": {
        "w": "Control d4 with the e-pawn and support a possible d-pawn advance. The bishop on g2 is already developed. Develop the knight to e2. It controls d4.",
        "b": "Develop the knight to f6. It controls e4 and d5. Castle kingside to secure the king and bring the rook toward the center."
      },
      "moves": [
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["b1c3", "Nc3", "Develop the knight to c3. It controls e4 and d5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["g2g3", "g3", "Advance the pawn to g3. This changes the kingside pawn cover and gives nearby pieces more room."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f1g2", "Bg2", "Develop the bishop to g2. It attacks the pawn on b7."],
        ["e7e5", "e5", "Contest space in the center and control d4 and f4."],
        ["e2e3", "e3", "Control d4 with the e-pawn and support a possible d-pawn advance. The bishop on g2 is already developed."],
        ["g8f6", "Nf6", "Develop the knight to f6. It controls e4 and d5."],
        ["g1e2", "Nge2", "Develop the knight to e2. It controls d4."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."]
      ]
    },
    {
      "id": "hippopotamus-defense-flanks-english-10-e2e4",
      "variation": "Against 6.e4",
      "chapter": "flanks",
      "core": false,
      "at": 10,
      "start": 11,
      "caption": "The English fianchetto · 515 master games with this reply",
      "description": "Put the knight behind the pawn screen and clear g8 for castling. Advance the pawn to a5. This gains space on the queenside and changes which pawn exchanges are available.",
      "plans": {
        "w": "Advance the pawn to e4. It controls d5. Develop the knight to e2. It controls d4.",
        "b": "Put the knight behind the pawn screen and clear g8 for castling. Advance the pawn to a5. This gains space on the queenside and changes which pawn exchanges are available."
      },
      "moves": [
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["b1c3", "Nc3", "Develop the knight to c3. It controls e4 and d5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["g2g3", "g3", "Advance the pawn to g3. This changes the kingside pawn cover and gives nearby pieces more room."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f1g2", "Bg2", "Develop the bishop to g2. It attacks the pawn on b7."],
        ["e7e5", "e5", "Contest space in the center and control d4 and f4."],
        ["d2d3", "d3", "Advance the pawn to d3. It supports the pawn on c4."],
        ["b8c6", "Nc6", "Develop the knight to c6. It supports the pawn on e5."],
        ["e2e4", "e4", "Advance the pawn to e4. It controls d5."],
        ["g8e7", "Nge7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."],
        ["g1e2", "Nge2", "Develop the knight to e2. It controls d4."],
        ["a7a5", "a5", "Advance the pawn to a5. This gains space on the queenside and changes which pawn exchanges are available."]
      ]
    },
    {
      "id": "hippopotamus-defense-flanks-a4-10-f1c4",
      "variation": "Against 6.Bc4",
      "chapter": "flanks",
      "core": false,
      "at": 10,
      "start": 11,
      "caption": "a4 restrains the queenside · 232 master games with this reply",
      "description": "Control d5 and clear the diagonal for the f8-bishop. Advance the pawn to h6. This changes the kingside pawn cover and gives nearby pieces more room.",
      "plans": {
        "w": "Develop the bishop to c4. It attacks the pawn on a6 and pawn on f7. Advance the pawn to h4. This changes the kingside pawn cover and gives nearby pieces more room.",
        "b": "Control d5 and clear the diagonal for the f8-bishop. Advance the pawn to h6. This changes the kingside pawn cover and gives nearby pieces more room."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["a2a4", "a4", "Advance the pawn to a4. This gains space on the queenside and changes which pawn exchanges are available."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["f1c4", "Bc4", "Develop the bishop to c4. It attacks the pawn on a6 and pawn on f7."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["h2h4", "h4", "Advance the pawn to h4. This changes the kingside pawn cover and gives nearby pieces more room."],
        ["h7h6", "h6", "Advance the pawn to h6. This changes the kingside pawn cover and gives nearby pieces more room."]
      ]
    },
    {
      "id": "hippopotamus-defense-setup-nf3-6-f1e2",
      "variation": "Against 4.Be2",
      "chapter": "setup",
      "core": false,
      "at": 6,
      "start": 7,
      "caption": "Quiet Nf3 move order · 1,819 master games with this reply",
      "description": "Develop the knight to f6. It attacks the pawn on e4. Castle kingside to secure the king and bring the rook toward the center.",
      "plans": {
        "w": "Develop the bishop to e2. This puts the bishop on a new diagonal for later play. Develop the knight to c3. It supports the pawn on e4.",
        "b": "Develop the knight to f6. It attacks the pawn on e4. Castle kingside to secure the king and bring the rook toward the center."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f1e2", "Be2", "Develop the bishop to e2. This puts the bishop on a new diagonal for later play."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."]
      ]
    },
    {
      "id": "hippopotamus-defense-setup-nf3-6-c2c3",
      "variation": "Against 4.c3",
      "chapter": "setup",
      "core": false,
      "at": 6,
      "start": 7,
      "caption": "Quiet Nf3 move order · 1,696 master games with this reply",
      "description": "Develop the knight to f6. It attacks the pawn on e4. Castle kingside to secure the king and bring the rook toward the center.",
      "plans": {
        "w": "Advance the pawn to c3. It supports the pawn on d4. Develop the bishop to d3. It supports the pawn on e4.",
        "b": "Develop the knight to f6. It attacks the pawn on e4. Castle kingside to secure the king and bring the rook toward the center."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["c2c3", "c3", "Advance the pawn to c3. It supports the pawn on d4."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It supports the pawn on e4."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."]
      ]
    },
    {
      "id": "hippopotamus-defense-setup-main-6-g2g3",
      "variation": "Against 4.g3",
      "chapter": "setup",
      "core": false,
      "at": 6,
      "start": 7,
      "caption": "The full Hippopotamus setup · 870 master games with this reply",
      "description": "Develop the knight to f6. It attacks the pawn on e4. Castle kingside to secure the king and bring the rook toward the center.",
      "plans": {
        "w": "Advance the pawn to g3. This changes the kingside pawn cover and gives nearby pieces more room. Develop the knight to e2. It supports the pawn on d4.",
        "b": "Develop the knight to f6. It attacks the pawn on e4. Castle kingside to secure the king and bring the rook toward the center."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["g2g3", "g3", "Advance the pawn to g3. This changes the kingside pawn cover and gives nearby pieces more room."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["g1e2", "Nge2", "Develop the knight to e2. It supports the pawn on d4."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."]
      ]
    },
    {
      "id": "hippopotamus-defense-setup-nf3-8-c1e3",
      "variation": "Against 5.Be3",
      "chapter": "setup",
      "core": false,
      "at": 8,
      "start": 9,
      "caption": "Quiet Nf3 move order · 334 master games with this reply",
      "description": "Develop the knight to f6. It attacks the pawn on e4. Castle kingside to secure the king and bring the rook toward the center.",
      "plans": {
        "w": "Develop the bishop to e3. It supports the pawn on d4. Move the queen to d2. It supports the pawn on d4.",
        "b": "Develop the knight to f6. It attacks the pawn on e4. Castle kingside to secure the king and bring the rook toward the center."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["c1e3", "Be3", "Develop the bishop to e3. It supports the pawn on d4."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["d1d2", "Qd2", "Move the queen to d2. It supports the pawn on d4."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."]
      ]
    },
    {
      "id": "hippopotamus-defense-center-d5-18-f4f5",
      "variation": "Against 10.f5",
      "chapter": "center",
      "core": false,
      "at": 18,
      "start": 19,
      "caption": "The early d5 push · Engine-prepared practice position",
      "description": "Move the bishop to c8. It attacks the pawn on f5. Take the knight on c3. It attacks the pawn on b2.",
      "plans": {
        "w": "Advance the pawn to f5. It attacks the bishop on e6 and pawn on g6. Move the knight to g5. It attacks the pawn on f7 and pawn on h7.",
        "b": "Move the bishop to c8. It attacks the pawn on f5. Take the knight on c3. It attacks the pawn on b2."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f2f4", "f4", "Advance the pawn to f4. It controls e5."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["d4d5", "d5", "Advance the pawn to d5. This changes the central pawn structure and the lines available to the pieces."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["d5e6", "dxe6", "Take the pawn on e6. It attacks the pawn on f7."],
        ["c8e6", "Bxe6", "Take the pawn on e6 while developing the bishop. It attacks the pawn on a2."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It attacks the pawn on a6."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["f4f5", "f5", "Advance the pawn to f5. It attacks the bishop on e6 and pawn on g6."],
        ["e6c8", "Bc8", "Move the bishop to c8. It attacks the pawn on f5."],
        ["f3g5", "Ng5", "Move the knight to g5. It attacks the pawn on f7 and pawn on h7."],
        ["g7c3", "Bxc3", "Take the knight on c3. It attacks the pawn on b2."]
      ]
    },
    {
      "id": "hippopotamus-defense-center-d5-18-f3g5",
      "variation": "Against 10.Ng5",
      "chapter": "center",
      "core": false,
      "at": 18,
      "start": 19,
      "caption": "The early d5 push · Engine-prepared practice position",
      "description": "Advance the pawn to h6. It attacks the knight on g5. Take the knight on e6. It controls d5.",
      "plans": {
        "w": "Move the knight to g5. It attacks the bishop on e6 and pawn on f7. Take the bishop on e6. It attacks the pawn on c7 and bishop on g7.",
        "b": "Advance the pawn to h6. It attacks the knight on g5. Take the knight on e6. It controls d5."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f2f4", "f4", "Advance the pawn to f4. It controls e5."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["d4d5", "d5", "Advance the pawn to d5. This changes the central pawn structure and the lines available to the pieces."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["d5e6", "dxe6", "Take the pawn on e6. It attacks the pawn on f7."],
        ["c8e6", "Bxe6", "Take the pawn on e6 while developing the bishop. It attacks the pawn on a2."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It attacks the pawn on a6."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["f3g5", "Ng5", "Move the knight to g5. It attacks the bishop on e6 and pawn on f7."],
        ["h7h6", "h6", "Advance the pawn to h6. It attacks the knight on g5."],
        ["g5e6", "Nxe6", "Take the bishop on e6. It attacks the pawn on c7 and bishop on g7."],
        ["f7e6", "fxe6", "Take the knight on e6. It controls d5."]
      ]
    },
    {
      "id": "hippopotamus-defense-center-late-e5-20-d3e4",
      "variation": "Against 11.Be4",
      "chapter": "center",
      "core": false,
      "at": 20,
      "start": 21,
      "caption": "e5 after White castles · Engine-prepared practice position",
      "description": "Move the queen to c7. It attacks the knight on c3. Move the knight to c5. It attacks the bishop on e4.",
      "plans": {
        "w": "Move the bishop to e4. It attacks the pawn on g6 and bishop on b7. Advance the pawn to d5. It attacks the pawn on e6.",
        "b": "Move the queen to c7. It attacks the knight on c3. Move the knight to c5. It attacks the bishop on e4."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f2f4", "f4", "Advance the pawn to f4. It controls e5."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It attacks the pawn on a6."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."],
        ["e4e5", "e5", "Advance the pawn to e5. It attacks the pawn on d6."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["e5d6", "exd6", "Take the pawn on d6. It attacks the pawn on c7."],
        ["c7d6", "cxd6", "Take the pawn on d6. It controls e5."],
        ["d1e2", "Qe2", "Move the queen to e2. It attacks the pawn on e6."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."],
        ["d3e4", "Be4", "Move the bishop to e4. It attacks the pawn on g6 and bishop on b7."],
        ["d8c7", "Qc7", "Move the queen to c7. It attacks the knight on c3."],
        ["d4d5", "d5", "Advance the pawn to d5. It attacks the pawn on e6."],
        ["d7c5", "Nc5", "Move the knight to c5. It attacks the bishop on e4."]
      ]
    },
    {
      "id": "hippopotamus-defense-center-late-e5-20-a2a4",
      "variation": "Against 11.a4",
      "chapter": "center",
      "core": false,
      "at": 20,
      "start": 21,
      "caption": "e5 after White castles · Engine-prepared practice position",
      "description": "Take the knight on f3. It attacks the queen on e2 and pawn on g2. Move the knight to c6. It attacks the pawn on d4.",
      "plans": {
        "w": "Advance the pawn to a4. This gains space on the queenside and changes which pawn exchanges are available. Take the bishop on f3 while developing the rook.",
        "b": "Take the knight on f3. It attacks the queen on e2 and pawn on g2. Move the knight to c6. It attacks the pawn on d4."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f2f4", "f4", "Advance the pawn to f4. It controls e5."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It attacks the pawn on a6."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."],
        ["e4e5", "e5", "Advance the pawn to e5. It attacks the pawn on d6."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["e5d6", "exd6", "Take the pawn on d6. It attacks the pawn on c7."],
        ["c7d6", "cxd6", "Take the pawn on d6. It controls e5."],
        ["d1e2", "Qe2", "Move the queen to e2. It attacks the pawn on e6."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."],
        ["a2a4", "a4", "Advance the pawn to a4. This gains space on the queenside and changes which pawn exchanges are available."],
        ["b7f3", "Bxf3", "Take the knight on f3. It attacks the queen on e2 and pawn on g2."],
        ["f1f3", "Rxf3", "Take the bishop on f3 while developing the rook."],
        ["e7c6", "Nc6", "Move the knight to c6. It attacks the pawn on d4."]
      ]
    },
    {
      "id": "hippopotamus-defense-space-main-6-g1e2",
      "variation": "Against 4.Ne2",
      "chapter": "space",
      "core": false,
      "at": 6,
      "start": 7,
      "caption": "The broad center with c4 · 109 master games with this reply",
      "description": "Develop the knight to f6. It attacks the pawn on e4. Castle kingside to secure the king and bring the rook toward the center.",
      "plans": {
        "w": "Develop the knight to e2. It supports the pawn on d4. Develop the knight to c3. It supports the pawn on e4.",
        "b": "Develop the knight to f6. It attacks the pawn on e4. Castle kingside to secure the king and bring the rook toward the center."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["g1e2", "Ne2", "Develop the knight to e2. It supports the pawn on d4."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["b1c3", "Nbc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."]
      ]
    },
    {
      "id": "hippopotamus-defense-space-main-6-f1e2",
      "variation": "Against 4.Be2",
      "chapter": "space",
      "core": false,
      "at": 6,
      "start": 7,
      "caption": "The broad center with c4 · 45 master games with this reply",
      "description": "Develop the knight to c6. It attacks the pawn on d4. Contest space in the center and control d4 and f4.",
      "plans": {
        "w": "Develop the bishop to e2. It supports the pawn on c4. Develop the knight to f3. It supports the pawn on d4.",
        "b": "Develop the knight to c6. It attacks the pawn on d4. Contest space in the center and control d4 and f4."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f1e2", "Be2", "Develop the bishop to e2. It supports the pawn on c4."],
        ["b8c6", "Nc6", "Develop the knight to c6. It attacks the pawn on d4."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["e7e5", "e5", "Contest space in the center and control d4 and f4."]
      ]
    },
    {
      "id": "hippopotamus-defense-space-d4-6-c1g5",
      "variation": "Against 4.Bg5",
      "chapter": "space",
      "core": false,
      "at": 6,
      "start": 7,
      "caption": "Starting against 1.d4 · 27 master games with this reply",
      "description": "Take space on the queenside and put pressure on d4. Take the knight on c3. The capture also gives check.",
      "plans": {
        "w": "Develop the bishop to g5. It attacks the pawn on e7. Advance the pawn to d5. This changes the central pawn structure and the lines available to the pieces.",
        "b": "Take space on the queenside and put pressure on d4. Take the knight on c3. The capture also gives check."
      },
      "moves": [
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["b1c3", "Nc3", "Develop the knight to c3. It controls e4 and d5."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["c1g5", "Bg5", "Develop the bishop to g5. It attacks the pawn on e7."],
        ["c7c5", "c5", "Take space on the queenside and put pressure on d4."],
        ["d4d5", "d5", "Advance the pawn to d5. This changes the central pawn structure and the lines available to the pieces."],
        ["g7c3", "Bxc3+", "Take the knight on c3. The capture also gives check."]
      ]
    },
    {
      "id": "hippopotamus-defense-space-main-10-f1d3",
      "variation": "Against 6.Bd3",
      "chapter": "space",
      "core": false,
      "at": 10,
      "start": 11,
      "caption": "The broad center with c4 · 6 master games with this reply",
      "description": "Develop the knight to f6. It attacks the pawn on e4. Develop the queenside knight behind the pawn screen.",
      "plans": {
        "w": "Develop the bishop to d3. It supports the pawn on c4 and pawn on e4. Develop the bishop to g5. It attacks the knight on f6.",
        "b": "Develop the knight to f6. It attacks the pawn on e4. Develop the queenside knight behind the pawn screen."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It supports the pawn on c4 and pawn on e4."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["c1g5", "Bg5", "Develop the bishop to g5. It attacks the knight on f6."],
        ["b8d7", "Nbd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."]
      ]
    },
    {
      "id": "hippopotamus-defense-space-main-16-d1d2",
      "variation": "Against 9.Qd2",
      "chapter": "space",
      "core": false,
      "at": 16,
      "start": 17,
      "caption": "The broad center with c4 · 7 master games with this reply",
      "description": "Advance the pawn to h6. This changes the kingside pawn cover and gives nearby pieces more room. Control b5 and support an eventual …b5 advance.",
      "plans": {
        "w": "Move the queen to d2. It supports the pawn on d4. Bring the rook to e1 to support play along the e-file.",
        "b": "Advance the pawn to h6. This changes the kingside pawn cover and gives nearby pieces more room. Control b5 and support an eventual …b5 advance."
      },
      "moves": [
        ["e2e4", "e4", "Claim e4 and open lines for the f1-bishop and queen.", "If Black answers …e5, Nf3 can develop while attacking the e-pawn."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["b1c3", "Nc3", "Develop the knight to c3. It supports the pawn on e4."],
        ["b7b6", "b6", "Prepare the second fianchetto.", "The bishop on b7 can bring pressure to e4, especially if the center opens."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["c8b7", "Bb7", "Complete the queenside fianchetto and aim at e4.", "If White’s center advances or exchanges, the b7-bishop can support counterplay from the flank."],
        ["f1e2", "Be2", "Develop the bishop to e2. It supports the pawn on c4."],
        ["e7e6", "e6", "Control d5 and clear the diagonal for the f8-bishop."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["b8d7", "Nd7", "Develop the queenside knight behind the pawn screen.", "From d7, it can support a challenge on c5 or e5."],
        ["c1e3", "Be3", "Develop the bishop to e3. It supports the pawn on d4."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."],
        ["d1d2", "Qd2", "Move the queen to d2. It supports the pawn on d4."],
        ["h7h6", "h6", "Advance the pawn to h6. This changes the kingside pawn cover and gives nearby pieces more room."],
        ["a1e1", "Rae1", "Bring the rook to e1 to support play along the e-file."],
        ["a7a6", "a6", "Control b5 and support an eventual …b5 advance."]
      ]
    },
    {
      "id": "hippopotamus-defense-flanks-english-4-g1f3",
      "variation": "Against 3.Nf3",
      "chapter": "flanks",
      "core": false,
      "at": 4,
      "start": 5,
      "caption": "The English fianchetto · 452 master games with this reply",
      "description": "Take space on the queenside and put pressure on d4. Develop the knight to c6. It controls d4 and e5.",
      "plans": {
        "w": "Develop the knight to f3. It controls d4 and e5. Advance the pawn to g3. This changes the kingside pawn cover and gives nearby pieces more room.",
        "b": "Take space on the queenside and put pressure on d4. Develop the knight to c6. It controls d4 and e5."
      },
      "moves": [
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["b1c3", "Nc3", "Develop the knight to c3. It controls e4 and d5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["g1f3", "Nf3", "Develop the knight to f3. It controls d4 and e5."],
        ["c7c5", "c5", "Take space on the queenside and put pressure on d4."],
        ["g2g3", "g3", "Advance the pawn to g3. This changes the kingside pawn cover and gives nearby pieces more room."],
        ["b8c6", "Nc6", "Develop the knight to c6. It controls d4 and e5."]
      ]
    },
    {
      "id": "hippopotamus-defense-flanks-g3-4-c1f4",
      "variation": "Against 3.Bf4",
      "chapter": "flanks",
      "core": false,
      "at": 4,
      "start": 5,
      "caption": "The d4 and g3 setup · 401 master games with this reply",
      "description": "Take space on the queenside and put pressure on d4. Develop the knight to f6. It controls e4 and d5.",
      "plans": {
        "w": "Develop the bishop to f4. It attacks the pawn on c7. Support d4 and open the f1-bishop’s diagonal toward c4.",
        "b": "Take space on the queenside and put pressure on d4. Develop the knight to f6. It controls e4 and d5."
      },
      "moves": [
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the pawn on d4."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["c1f4", "Bf4", "Develop the bishop to f4. It attacks the pawn on c7."],
        ["c7c5", "c5", "Take space on the queenside and put pressure on d4."],
        ["e2e3", "e3", "Support d4 and open the f1-bishop’s diagonal toward c4."],
        ["g8f6", "Nf6", "Develop the knight to f6. It controls e4 and d5."]
      ]
    },
    {
      "id": "hippopotamus-defense-flanks-english-8-e2e4",
      "variation": "Against 5.e4",
      "chapter": "flanks",
      "core": false,
      "at": 8,
      "start": 9,
      "caption": "The English fianchetto · 459 master games with this reply",
      "description": "Put the knight behind the pawn screen and clear g8 for castling. Castle kingside to secure the king and bring the rook toward the center.",
      "plans": {
        "w": "Advance the pawn to e4. It controls d5. Advance the pawn to d3. It supports the pawn on c4 and pawn on e4.",
        "b": "Put the knight behind the pawn screen and clear g8 for castling. Castle kingside to secure the king and bring the rook toward the center."
      },
      "moves": [
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["b1c3", "Nc3", "Develop the knight to c3. It controls e4 and d5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["g2g3", "g3", "Advance the pawn to g3. This changes the kingside pawn cover and gives nearby pieces more room."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f1g2", "Bg2", "Develop the bishop to g2. It attacks the pawn on b7."],
        ["e7e5", "e5", "Contest space in the center and control d4 and f4."],
        ["e2e4", "e4", "Advance the pawn to e4. It controls d5."],
        ["g8e7", "Ne7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."],
        ["d2d3", "d3", "Advance the pawn to d3. It supports the pawn on c4 and pawn on e4."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."]
      ]
    },
    {
      "id": "hippopotamus-defense-flanks-english-10-a1b1",
      "variation": "Against 6.Rb1",
      "chapter": "flanks",
      "core": false,
      "at": 10,
      "start": 11,
      "caption": "The English fianchetto · 512 master games with this reply",
      "description": "Advance the pawn to a5. This gains space on the queenside and changes which pawn exchanges are available. Develop the knight to f6. It controls e4 and d5.",
      "plans": {
        "w": "Bring the rook to b1 to support play along the b-file. Advance the pawn to a3. This gains space on the queenside and changes which pawn exchanges are available.",
        "b": "Advance the pawn to a5. This gains space on the queenside and changes which pawn exchanges are available. Develop the knight to f6. It controls e4 and d5."
      },
      "moves": [
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["b1c3", "Nc3", "Develop the knight to c3. It controls e4 and d5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["g2g3", "g3", "Advance the pawn to g3. This changes the kingside pawn cover and gives nearby pieces more room."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f1g2", "Bg2", "Develop the bishop to g2. It attacks the pawn on b7."],
        ["e7e5", "e5", "Contest space in the center and control d4 and f4."],
        ["d2d3", "d3", "Advance the pawn to d3. It supports the pawn on c4."],
        ["b8c6", "Nc6", "Develop the knight to c6. It supports the pawn on e5."],
        ["a1b1", "Rb1", "Bring the rook to b1 to support play along the b-file."],
        ["a7a5", "a5", "Advance the pawn to a5. This gains space on the queenside and changes which pawn exchanges are available."],
        ["a2a3", "a3", "Advance the pawn to a3. This gains space on the queenside and changes which pawn exchanges are available."],
        ["g8f6", "Nf6", "Develop the knight to f6. It controls e4 and d5."]
      ]
    },
    {
      "id": "hippopotamus-defense-flanks-english-14-a1b1",
      "variation": "Against 8.Rb1",
      "chapter": "flanks",
      "core": false,
      "at": 14,
      "start": 15,
      "caption": "The English fianchetto · 152 master games with this reply",
      "description": "Advance the pawn to a5. This gains space on the queenside and changes which pawn exchanges are available. Move the knight to d4. It attacks the pawn on e2 and knight on f3.",
      "plans": {
        "w": "Bring the rook to b1 to support play along the b-file. Advance the pawn to a3. This gains space on the queenside and changes which pawn exchanges are available.",
        "b": "Advance the pawn to a5. This gains space on the queenside and changes which pawn exchanges are available. Move the knight to d4. It attacks the pawn on e2 and knight on f3."
      },
      "moves": [
        ["c2c4", "c4", "Advance the pawn to c4. It controls d5."],
        ["g7g6", "g6", "Prepare to develop the bishop on g7.", "The long diagonal can pressure d4 and e5 while Black keeps the central pawns flexible."],
        ["b1c3", "Nc3", "Develop the knight to c3. It controls e4 and d5."],
        ["f8g7", "Bg7", "Place the bishop on the long diagonal toward d4 and e5.", "The bishop stays useful behind the pawn screen, especially if a central exchange clears the diagonal."],
        ["g2g3", "g3", "Advance the pawn to g3. This changes the kingside pawn cover and gives nearby pieces more room."],
        ["d7d6", "d6", "Control e5 and free the c8-bishop’s diagonal.", "The queenside knight can develop to d7 while Black keeps several pawn breaks available."],
        ["f1g2", "Bg2", "Develop the bishop to g2. It attacks the pawn on b7."],
        ["e7e5", "e5", "Contest space in the center and control d4 and f4."],
        ["d2d3", "d3", "Advance the pawn to d3. It supports the pawn on c4."],
        ["b8c6", "Nc6", "Develop the knight to c6. It supports the pawn on e5."],
        ["g1f3", "Nf3", "Develop the knight and attack e5.", "The knight also clears g1 so White can castle after developing the bishop."],
        ["g8e7", "Nge7", "Put the knight behind the pawn screen and clear g8 for castling.", "From e7 it can support play on d5 and f5. Choose the pawn break according to White’s center."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook toward the center."],
        ["a1b1", "Rb1", "Bring the rook to b1 to support play along the b-file."],
        ["a7a5", "a5", "Advance the pawn to a5. This gains space on the queenside and changes which pawn exchanges are available."],
        ["a2a3", "a3", "Advance the pawn to a3. This gains space on the queenside and changes which pawn exchanges are available."],
        ["c6d4", "Nd4", "Move the knight to d4. It attacks the pawn on e2 and knight on f3."]
      ]
    }
  ]
};
