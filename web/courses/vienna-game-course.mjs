export const viennaGameCourse = {
  "id": "vienna-game",
  "title": "Vienna Game",
  "side": "w",
  "code": "C25–C29",
  "icon": "n",
  "coverPly": 5,
  "openingId": "vienna",
  "masterPosition": "e2e4,e7e5,b1c3",
  "description": "Play the Vienna with White. Learn the f4 gambit, central counterplay, and the quieter setups available when Black develops differently.",
  "credit": "Core lines are curated. Deeper branches use Lichess Masters replies and Stockfish 17.1 continuations. Engine practice positions cover tactical replies with few master games.",
  "tracks": [
    {
      "id": "core",
      "title": "Core repertoire",
      "description": "Learn the main replies and essential plans.",
      "lines": 20
    },
    {
      "id": "advanced",
      "title": "Advanced repertoire",
      "description": "Add more replies and optional White setups.",
      "lines": 38
    },
    {
      "id": "full",
      "title": "Complete repertoire",
      "description": "Study every line and the deeper tactical branches.",
      "lines": 56
    }
  ],
  "chapters": [
    {
      "id": "counter",
      "title": "The Vienna Gambit against …d5",
      "description": "Learn fxe5 and Nf3, then see how Black’s development and pressure on e4 change the correct central plan."
    },
    {
      "id": "accepted",
      "title": "When Black takes the f-pawn",
      "description": "Advance e5 with tempo. Compare the knight retreats, the …Qe7 pin, and the Nd5 queen trap."
    },
    {
      "id": "declined",
      "title": "Other ways to meet 3.f4",
      "description": "Practice against …d6, …Nc6, …Bc5, and …Bb4. Learn when to keep the tension or take on e5."
    },
    {
      "id": "max-lange",
      "title": "Max Lange Defense with 2…Nc6",
      "description": "Develop Bc4, defend e4 with d3 against …Nf6, and handle …Na5 or the bishop pin before opening the center."
    },
    {
      "id": "early",
      "title": "Early Black deviations",
      "description": "Adjust your plan against an early bishop, a quiet center, or a fianchetto."
    },
    {
      "id": "alternatives",
      "title": "Optional Bishop and Mieses setups",
      "description": "Study a different White plan once you know the main repertoire. Try Bc4 and Qh5 for forcing play or g3 and Bg2 for a quieter setup."
    }
  ],
  "lessons": [
    {
      "id": "vienna-game-central-counter",
      "variation": "The main counter with 3…d5",
      "chapter": "counter",
      "at": 1,
      "start": 2,
      "caption": "Enter the Vienna Gambit, then open the center safely after …Be7.",
      "description": "Play 2.Nc3 and 3.f4. Exchange on e5, develop Nf3, and challenge the e4-knight with a supported center.",
      "plans": {
        "w": "Play 2.Nc3 and 3.f4. Exchange on e5, develop Nf3, and challenge the e4-knight with a supported center.",
        "b": "Respond to f4 with …d5. After …Nxe4 and …Be7, be ready to exchange knights and castle."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d5", "d5", "Counter the gambit immediately by attacking e4 from the center.", "If White takes e5 with the f-pawn, …Nxe4 saves the f6-knight and recaptures a central pawn."],
        ["f4e5", "fxe5", "Capture on e5 and attack the f6-knight.", "Check whether Black can capture on e4 or recapture on e5 before you try to hold the advanced pawn."],
        ["f6e4", "Nxe4", "Save the attacked knight by capturing the e4-pawn.", "The knight is active, but Nf3 and a d-pawn advance can challenge it."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."],
        ["f8e7", "Be7", "Develop the bishop to e7. From here it controls a3 and b4."],
        ["d2d4", "d4", "Advance the pawn to d4. It supports the pawn on e5."],
        ["c7c5", "c5", "Advance the pawn to c5. It attacks the pawn on d4."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It attacks the knight on e4."],
        ["e4c3", "Nxc3", "Capture the knight on c3. It attacks the queen on d1 and pawn on a2."],
        ["b2c3", "bxc3", "Capture the knight on c3. It supports the pawn on d4."]
      ]
    },
    {
      "id": "vienna-game-counter-bc5",
      "variation": "5…Bc5 eyes the diagonal to g1",
      "chapter": "counter",
      "at": 9,
      "start": 10,
      "caption": "Use d4 to attack the bishop and block its line to g1.",
      "description": "Challenge the bishop with d4 and use the central pawn to keep e5 supported.",
      "plans": {
        "w": "Challenge the bishop with d4 and use the central pawn to keep e5 supported.",
        "b": "Put the bishop on the c5–g1 diagonal to interfere with castling. Respond actively when White’s d-pawn attacks it."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d5", "d5", "Counter the gambit immediately by attacking e4 from the center.", "If White takes e5 with the f-pawn, …Nxe4 saves the f6-knight and recaptures a central pawn."],
        ["f4e5", "fxe5", "Capture on e5 and attack the f6-knight.", "Check whether Black can capture on e4 or recapture on e5 before you try to hold the advanced pawn."],
        ["f6e4", "Nxe4", "Save the attacked knight by capturing the e4-pawn.", "The knight is active, but Nf3 and a d-pawn advance can challenge it."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."],
        ["f8c5", "Bc5", "Develop the bishop to c5. It controls d4."],
        ["d2d4", "d4", "Advance the pawn to d4. It attacks the bishop on c5."],
        ["c5b4", "Bb4", "Move the bishop to b4. It attacks the knight on c3."],
        ["c1d2", "Bd2", "Develop the bishop to d2. From here it controls c1 and e1."],
        ["c7c5", "c5", "Advance the pawn to c5. It attacks the pawn on d4."],
        ["d4c5", "dxc5", "Capture the pawn on c5."]
      ]
    },
    {
      "id": "vienna-game-counter-nc6",
      "variation": "5…Nc6 adds pressure to e5",
      "chapter": "counter",
      "at": 9,
      "start": 10,
      "caption": "Develop with pressure on the knight that attacks e5.",
      "description": "Use Bb5 to put pressure on c6 and be ready to challenge the other knight on e4.",
      "plans": {
        "w": "Use Bb5 to put pressure on c6 and be ready to challenge the other knight on e4.",
        "b": "Develop …Nc6 to attack e5. The e4-knight can trade on c3 to change White’s pawn structure."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d5", "d5", "Counter the gambit immediately by attacking e4 from the center.", "If White takes e5 with the f-pawn, …Nxe4 saves the f6-knight and recaptures a central pawn."],
        ["f4e5", "fxe5", "Capture on e5 and attack the f6-knight.", "Check whether Black can capture on e4 or recapture on e5 before you try to hold the advanced pawn."],
        ["f6e4", "Nxe4", "Save the attacked knight by capturing the e4-pawn.", "The knight is active, but Nf3 and a d-pawn advance can challenge it."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."],
        ["b8c6", "Nc6", "Develop the knight to c6. It attacks the pawn on e5."],
        ["f1b5", "Bb5", "Develop the bishop to b5. It attacks the knight on c6."],
        ["f8e7", "Be7", "Develop the bishop to e7. From here it controls a3 and b4."],
        ["d1e2", "Qe2", "Move the queen to e2. It attacks the knight on e4."],
        ["e4c3", "Nxc3", "Capture the knight on c3. It attacks the queen on e2 and bishop on b5."],
        ["d2c3", "dxc3", "Capture the knight on c3. It controls d4."]
      ]
    },
    {
      "id": "vienna-game-counter-bg4",
      "variation": "5…Bg4 pins the f3-knight",
      "chapter": "counter",
      "at": 9,
      "start": 10,
      "caption": "Work around the pin before relying on the knight.",
      "description": "Address the pin before depending on the f3-knight. The e4-knight is still a tactical target.",
      "plans": {
        "w": "Address the pin before depending on the f3-knight. The e4-knight is still a tactical target.",
        "b": "Pin the knight to the queen. An exchange on c3 or on f3 can change who controls the center."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d5", "d5", "Counter the gambit immediately by attacking e4 from the center.", "If White takes e5 with the f-pawn, …Nxe4 saves the f6-knight and recaptures a central pawn."],
        ["f4e5", "fxe5", "Capture on e5 and attack the f6-knight.", "Check whether Black can capture on e4 or recapture on e5 before you try to hold the advanced pawn."],
        ["f6e4", "Nxe4", "Save the attacked knight by capturing the e4-pawn.", "The knight is active, but Nf3 and a d-pawn advance can challenge it."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."],
        ["c8g4", "Bg4", "Develop the bishop to g4. It attacks the knight on f3."],
        ["d1e2", "Qe2", "Move the queen to e2. It attacks the knight on e4."],
        ["e4c3", "Nxc3", "Capture the knight on c3. It attacks the queen on e2 and pawn on a2."],
        ["d2c3", "dxc3", "Capture the knight on c3. It controls d4."],
        ["b8c6", "Nc6", "Develop the knight to c6. It attacks the pawn on e5."],
        ["c1f4", "Bf4", "Develop the bishop to f4. It supports the pawn on e5."]
      ]
    },
    {
      "id": "vienna-game-counter-c5",
      "variation": "5…c5 fights for d4",
      "chapter": "counter",
      "at": 9,
      "start": 10,
      "caption": "Watch the c-pawn when opening the center.",
      "description": "Keep e5 supported and account for …cxd4 before placing a pawn on d4.",
      "plans": {
        "w": "Keep e5 supported and account for …cxd4 before placing a pawn on d4.",
        "b": "Use the c-pawn to control d4. Keep the e4-knight active while developing the bishops."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d5", "d5", "Counter the gambit immediately by attacking e4 from the center.", "If White takes e5 with the f-pawn, …Nxe4 saves the f6-knight and recaptures a central pawn."],
        ["f4e5", "fxe5", "Capture on e5 and attack the f6-knight.", "Check whether Black can capture on e4 or recapture on e5 before you try to hold the advanced pawn."],
        ["f6e4", "Nxe4", "Save the attacked knight by capturing the e4-pawn.", "The knight is active, but Nf3 and a d-pawn advance can challenge it."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."],
        ["c7c5", "c5", "Advance the pawn to c5. It controls d4."],
        ["f1b5", "Bb5+", "Develop the bishop to b5. It also gives check."],
        ["b8c6", "Nc6", "Develop the knight to c6. It attacks the pawn on e5."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook to the f-file."],
        ["f8e7", "Be7", "Develop the bishop to e7. This reinforces the pawn on c5."],
        ["b5c6", "Bxc6+", "Capture the knight on c6. It also gives check."]
      ]
    },
    {
      "id": "vienna-game-gambit-accepted",
      "variation": "Taking f4 and retreating to g8",
      "chapter": "accepted",
      "at": 5,
      "start": 6,
      "caption": "Advance e5 immediately and use the time from the retreat.",
      "description": "Use 4.e5 to attack the knight. Once it retreats, develop and protect e5 before recovering f4.",
      "plans": {
        "w": "Use 4.e5 to attack the knight. Once it retreats, develop and protect e5 before recovering f4.",
        "b": "Retreat the knight to g8, then use …d6 or active development to challenge the e5-pawn."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["e5f4", "exf4", "Take the offered pawn and create a material imbalance.", "White can answer e5 with tempo against the knight on f6. Holding f4 takes time Black may need for development."],
        ["e4e5", "e5", "Attack the f6-knight with the e-pawn.", "Develop while Black deals with the knight. Once the center is under control, look for a way to regain f4."],
        ["f6g8", "Ng8", "Move the attacked knight to g8. From here it controls f6 and h6."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."],
        ["d7d5", "d5", "Advance the pawn to d5. It controls e4."],
        ["d2d4", "d4", "Advance the pawn to d4. It supports the pawn on e5."],
        ["g7g5", "g5", "Advance the pawn to g5. The pawn now contests f4 and h4."],
        ["h2h4", "h4", "Advance the pawn to h4. It attacks the pawn on g5."]
      ]
    },
    {
      "id": "vienna-game-accepted-qe7",
      "variation": "4…Qe7 pins the e5-pawn",
      "chapter": "accepted",
      "at": 7,
      "start": 8,
      "caption": "Unpin the pawn with Qe2, then regain time against the knight.",
      "description": "Use Qe2 to meet the pin. Look for Nd5 while the black queen remains on e7, especially after …d6.",
      "plans": {
        "w": "Use Qe2 to meet the pin. Look for Nd5 while the black queen remains on e7, especially after …d6.",
        "b": "The queen temporarily pins e5. Once White breaks the pin, move the f6-knight or meet the threat concretely."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["e5f4", "exf4", "Take the offered pawn and create a material imbalance.", "White can answer e5 with tempo against the knight on f6. Holding f4 takes time Black may need for development."],
        ["e4e5", "e5", "Attack the f6-knight with the e-pawn.", "Develop while Black deals with the knight. Once the center is under control, look for a way to regain f4."],
        ["d8e7", "Qe7", "Pin the e5-pawn to White’s king and buy time for the f6-knight.", "White can play Qe2 to break the pin to the king. Watch for Nd5 while the queen remains on e7."],
        ["d1e2", "Qe2", "Break the pin to the king so the e5-pawn can threaten the knight again.", "When the queen remains on e7, Nd5 can gain a tempo if Black challenges e5 with …d6."],
        ["f6g8", "Ng8", "Move the attacked knight to g8. From here it controls f6 and h6."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."],
        ["e7e6", "Qe6", "Move the queen to e6. It attacks the pawn on a2."],
        ["d2d4", "d4", "Advance the pawn to d4. It supports the pawn on e5."]
      ]
    },
    {
      "id": "vienna-game-accepted-nd5",
      "variation": "4…Nd5 is a tactical test",
      "chapter": "accepted",
      "at": 7,
      "start": 8,
      "caption": "Check which piece can capture on d5.",
      "description": "Calculate Nxd5 and any recaptures before resuming development. The knight on d5 is exposed.",
      "plans": {
        "w": "Calculate Nxd5 and any recaptures before resuming development. The knight on d5 is exposed.",
        "b": "The central retreat contests e3 and f4, but White can challenge it immediately with the c3-knight."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["e5f4", "exf4", "Take the offered pawn and create a material imbalance.", "White can answer e5 with tempo against the knight on f6. Holding f4 takes time Black may need for development."],
        ["e4e5", "e5", "Attack the f6-knight with the e-pawn.", "Develop while Black deals with the knight. Once the center is under control, look for a way to regain f4."],
        ["f6d5", "Nd5", "Move the attacked knight to d5. It attacks the knight on c3."],
        ["c3d5", "Nxd5", "Capture the knight on d5. It attacks the pawn on f4 and pawn on c7."],
        ["d8h4", "Qh4+", "Move the queen to h4. It also gives check."],
        ["e1e2", "Ke2", "Move the king to e2 to get out of check."],
        ["f4f3", "f3+", "Advance the pawn to f3. It also gives check."],
        ["e2e3", "Ke3", "Move the king to e3 to get out of check."]
      ]
    },
    {
      "id": "vienna-game-accepted-ne4",
      "variation": "4…Ne4 attacks the c3-knight",
      "chapter": "accepted",
      "at": 7,
      "start": 8,
      "caption": "Use the developed knight to resolve the threat.",
      "description": "Meet the knight on e4 directly. The knight also controls f2. Check forcing replies before playing a slow developing move.",
      "plans": {
        "w": "Meet the knight on e4 directly. The knight also controls f2. Check forcing replies before playing a slow developing move.",
        "b": "Try to gain compensation by attacking c3 and controlling f2. If White takes the knight, look for a central pawn break."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["e5f4", "exf4", "Take the offered pawn and create a material imbalance.", "White can answer e5 with tempo against the knight on f6. Holding f4 takes time Black may need for development."],
        ["e4e5", "e5", "Attack the f6-knight with the e-pawn.", "Develop while Black deals with the knight. Once the center is under control, look for a way to regain f4."],
        ["f6e4", "Ne4", "Save the attacked knight by capturing the e4-pawn.", "The knight is active, but Nf3 and a d-pawn advance can challenge it."],
        ["c3e4", "Nxe4", "Capture the knight on e4."],
        ["b8c6", "Nc6", "Develop the knight to c6. It attacks the pawn on e5."],
        ["d2d4", "d4", "Advance the pawn to d4. It supports the pawn on e5."],
        ["d7d5", "d5", "Advance the pawn to d5. It attacks the knight on e4."],
        ["e4f2", "Nf2", "Move the attacked knight to f2. It controls e4."]
      ]
    },
    {
      "id": "vienna-game-declined-d6",
      "variation": "3…d6 reinforces e5",
      "chapter": "declined",
      "at": 5,
      "start": 6,
      "caption": "Develop while keeping the f-pawn tension useful.",
      "description": "Develop Nf3 before committing to the exchange on e5. Look for Bc4 and castling if Black settles into a quiet setup.",
      "plans": {
        "w": "Develop Nf3 before committing to the exchange on e5. Look for Bc4 and castling if Black settles into a quiet setup.",
        "b": "Keep e5 supported and choose between developing the queenside knight and adding pressure to f3."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d6", "d6", "Advance the pawn to d6. It supports the pawn on e5."],
        ["g1f3", "Nf3", "Develop the knight to f3. It attacks the pawn on e5."],
        ["e5f4", "exf4", "Capture the pawn on f4."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["f6h5", "Nh5", "Move the knight to h5. This reinforces the pawn on f4."],
        ["c3d5", "Nd5", "Move the knight to d5. It attacks the pawn on f4 and pawn on c7."]
      ]
    },
    {
      "id": "vienna-game-declined-nc6",
      "variation": "3…Nc6 and the d4 pawn center",
      "chapter": "declined",
      "at": 5,
      "start": 6,
      "caption": "Take on e5 and use d4 to attack the recapturing knight.",
      "description": "Exchange on e5. If the c6-knight recaptures, use d4 to gain time and build a broad center.",
      "plans": {
        "w": "Exchange on e5. If the c6-knight recaptures, use d4 to gain time and build a broad center.",
        "b": "Use the queenside knight to recapture on e5. Be ready to retreat when White expands with d4."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["b8c6", "Nc6", "Develop the knight to c6. It supports the pawn on e5."],
        ["f4e5", "fxe5", "Capture on e5 and attack the f6-knight.", "Check whether Black can capture on e4 or recapture on e5 before you try to hold the advanced pawn."],
        ["c6e5", "Nxe5", "Capture the pawn on e5."],
        ["d2d4", "d4", "Advance the pawn to d4. It attacks the knight on e5."],
        ["e5g6", "Ng6", "Move the attacked knight to g6. It controls e5."],
        ["e4e5", "e5", "Advance the pawn to e5. It attacks the knight on f6."]
      ]
    },
    {
      "id": "vienna-game-declined-bc5",
      "variation": "3…Bc5 interferes with castling",
      "chapter": "declined",
      "at": 5,
      "start": 6,
      "caption": "Calculate the central exchange before playing slowly.",
      "description": "Look for fxe5 and account for any check or attack on f2. Develop with tempo once the knights move.",
      "plans": {
        "w": "Look for fxe5 and account for any check or attack on f2. Develop with tempo once the knights move.",
        "b": "Develop the bishop along the c5–g1 diagonal. When White takes on e5, try to open the center with a forcing reply."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["f8c5", "Bc5", "Develop the bishop to c5. It attacks the knight on g1."],
        ["f4e5", "fxe5", "Capture on e5 and attack the f6-knight.", "Check whether Black can capture on e4 or recapture on e5 before you try to hold the advanced pawn."],
        ["f6g8", "Ng8", "Move the attacked knight to g8. From here it controls f6 and h6."],
        ["d2d4", "d4", "Advance the pawn to d4. It attacks the bishop on c5."],
        ["c5b6", "Bb6", "Move the bishop to b6. It attacks the pawn on d4."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."]
      ]
    },
    {
      "id": "vienna-game-declined-bb4",
      "variation": "3…Bb4 pins the c3-knight",
      "chapter": "declined",
      "at": 5,
      "start": 6,
      "caption": "Check the pin before putting another pawn in the center.",
      "description": "Consider fxe5 while the f6-knight is vulnerable. Calculate the bishop’s exchange on c3 before settling the center.",
      "plans": {
        "w": "Consider fxe5 while the f6-knight is vulnerable. Calculate the bishop’s exchange on c3 before settling the center.",
        "b": "Tie down the c3-knight and look for a central counter. An exchange on c3 changes White’s queenside pawns."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["f8b4", "Bb4", "Develop the bishop to b4. It attacks the knight on c3."],
        ["f4e5", "fxe5", "Capture on e5 and attack the f6-knight.", "Check whether Black can capture on e4 or recapture on e5 before you try to hold the advanced pawn."],
        ["b4c3", "Bxc3", "Capture the knight on c3. It attacks the pawn on b2 and pawn on d2."],
        ["d2c3", "dxc3", "Capture the bishop on c3. It controls d4."],
        ["f6e4", "Nxe4", "Capture the pawn on e4. It attacks the pawn on c3."],
        ["d1g4", "Qg4", "Move the queen to g4. It attacks the knight on e4 and pawn on g7."]
      ]
    },
    {
      "id": "vienna-game-max-lange-na5",
      "variation": "Max Lange Defense and 4…Na5",
      "chapter": "max-lange",
      "at": 3,
      "start": 4,
      "caption": "Develop Bc4, defend e4, and respond to the attack on the bishop.",
      "description": "Choose 3.Bc4 against …Nc6 and reinforce e4 with d3. Handle …Na5 before planning development or f4.",
      "plans": {
        "w": "Choose 3.Bc4 against …Nc6 and reinforce e4 with d3. Handle …Na5 before planning development or f4.",
        "b": "Play …Nf6 against e4. Use …Na5 to challenge the bishop before it can keep pressure on f7."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["b8c6", "Nc6", "Develop and reinforce e5 with the queenside knight.", "White usually uses Bc4 or g3 here. Black can support the center before committing the kingside knight."],
        ["f1c4", "Bc4", "Develop the bishop toward f7 and make kingside castling easier.", "Keep the bishop active while deciding whether the center calls for d3 or a forcing attack."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["d2d3", "d3", "Advance the pawn to d3. It supports the pawn on e4."],
        ["c6a5", "Na5", "Attack the bishop on c4 with the knight.", "White can retreat to b3 or allow an exchange that changes the queenside pawn structure."],
        ["g1e2", "Nge2", "Develop the knight to e2. It controls d4."],
        ["a5c4", "Nxc4", "Capture the bishop on c4. It attacks the pawn on b2."],
        ["d3c4", "dxc4", "Capture the knight on c4. It controls d5."],
        ["f8c5", "Bc5", "Develop the bishop to c5. It attacks the pawn on f2."],
        ["d1d3", "Qd3", "Move the queen to d3. It attacks the pawn on d7."]
      ]
    },
    {
      "id": "vienna-game-max-lange-bb4",
      "variation": "4…Bb4 pins the queenside knight",
      "chapter": "max-lange",
      "at": 7,
      "start": 8,
      "caption": "Develop the other knight with the pin in mind.",
      "description": "Watch the c3-knight and develop so a bishop exchange on c3 leaves a workable center.",
      "plans": {
        "w": "Watch the c3-knight and develop so a bishop exchange on c3 leaves a workable center.",
        "b": "Use …Bb4 to make e4 harder to defend with the c3-knight. Look for a central break before White unpins."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["b8c6", "Nc6", "Develop and reinforce e5 with the queenside knight.", "White usually uses Bc4 or g3 here. Black can support the center before committing the kingside knight."],
        ["f1c4", "Bc4", "Develop the bishop toward f7 and make kingside castling easier.", "Keep the bishop active while deciding whether the center calls for d3 or a forcing attack."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["d2d3", "d3", "Advance the pawn to d3. It supports the pawn on e4."],
        ["f8b4", "Bb4", "Develop the bishop to b4. It attacks the knight on c3."],
        ["g1e2", "Ne2", "Develop the knight to e2. It controls d4."],
        ["d7d5", "d5", "Advance the pawn to d5. It attacks the bishop on c4 and pawn on e4."],
        ["e4d5", "exd5", "Capture the pawn on d5. It attacks the knight on c6."],
        ["f6d5", "Nxd5", "Capture the pawn on d5. It attacks the knight on c3."],
        ["a2a3", "a3", "Advance the pawn to a3. It attacks the bishop on b4."]
      ]
    },
    {
      "id": "vienna-game-max-lange-bc5",
      "variation": "4…Bc5 and the choice of central break",
      "chapter": "max-lange",
      "at": 7,
      "start": 8,
      "caption": "Develop against the c5-bishop and keep f4 or d4 in reserve.",
      "description": "Build a safe position with the kingside pieces first. Calculate f4 using the bishop on c5 and the pressure on e4.",
      "plans": {
        "w": "Build a safe position with the kingside pieces first. Calculate f4 using the bishop on c5 and the pressure on e4.",
        "b": "Use the c5-bishop against f2 and develop toward castling. Be ready to challenge a pawn push in the center."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["b8c6", "Nc6", "Develop and reinforce e5 with the queenside knight.", "White usually uses Bc4 or g3 here. Black can support the center before committing the kingside knight."],
        ["f1c4", "Bc4", "Develop the bishop toward f7 and make kingside castling easier.", "Keep the bishop active while deciding whether the center calls for d3 or a forcing attack."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["d2d3", "d3", "Advance the pawn to d3. It supports the pawn on e4."],
        ["f8c5", "Bc5", "Develop the bishop to c5. It attacks the pawn on f2."],
        ["g1f3", "Nf3", "Develop the knight to f3. It attacks the pawn on e5."],
        ["d7d6", "d6", "Advance the pawn to d6. It supports the pawn on e5."],
        ["c3a4", "Na4", "Move the knight to a4. It attacks the bishop on c5."],
        ["c5b6", "Bb6", "Move the bishop to b6. It attacks the pawn on f2."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook to the f-file."]
      ]
    },
    {
      "id": "vienna-game-max-copycat",
      "variation": "The Copycat Variation with 3…Bc5",
      "chapter": "max-lange",
      "at": 5,
      "start": 6,
      "caption": "Recognize the g7 target when the bishops mirror each other.",
      "description": "Consider Qg4 against the mirrored bishops. Use the double pressure on g7 and f7 to gain time without leaving f2 undefended.",
      "plans": {
        "w": "Consider Qg4 against the mirrored bishops. Use the double pressure on g7 and f7 to gain time without leaving f2 undefended.",
        "b": "Counter the queen’s pressure on g7 while keeping threats against f2. Developing with a threat matters more than copying moves."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["b8c6", "Nc6", "Develop and reinforce e5 with the queenside knight.", "White usually uses Bc4 or g3 here. Black can support the center before committing the kingside knight."],
        ["f1c4", "Bc4", "Develop the bishop toward f7 and make kingside castling easier.", "Keep the bishop active while deciding whether the center calls for d3 or a forcing attack."],
        ["f8c5", "Bc5", "Develop the bishop to c5. It attacks the pawn on f2."],
        ["d1g4", "Qg4", "Move the queen to g4. It attacks the pawn on d7 and pawn on g7."],
        ["g7g6", "g6", "Advance the pawn to g6. This makes g7 available for a fianchetto."],
        ["g4f3", "Qf3", "Move the queen to f3. It attacks the pawn on f7."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["g1e2", "Nge2", "Develop the knight to e2. It controls d4."]
      ]
    },
    {
      "id": "vienna-game-max-lange-d6",
      "variation": "3…d6 builds a solid center",
      "chapter": "max-lange",
      "at": 5,
      "start": 6,
      "caption": "Keep the bishop active and pick a useful development plan.",
      "description": "Keep e4 defended, complete kingside development, and decide which central file should open.",
      "plans": {
        "w": "Keep e4 defended, complete kingside development, and decide which central file should open.",
        "b": "Use …d6 to support e5 and free the c8-bishop. Develop the kingside before White expands."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["b8c6", "Nc6", "Develop and reinforce e5 with the queenside knight.", "White usually uses Bc4 or g3 here. Black can support the center before committing the kingside knight."],
        ["f1c4", "Bc4", "Develop the bishop toward f7 and make kingside castling easier.", "Keep the bishop active while deciding whether the center calls for d3 or a forcing attack."],
        ["d7d6", "d6", "Advance the pawn to d6. It supports the pawn on e5."],
        ["g1f3", "Nf3", "Develop the knight to f3. It attacks the pawn on e5."],
        ["f8e7", "Be7", "Develop the bishop to e7. This reinforces the pawn on d6."],
        ["d2d4", "d4", "Advance the pawn to d4. It attacks the pawn on e5."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["d4d5", "d5", "Advance the pawn to d5. It attacks the knight on c6."]
      ]
    },
    {
      "id": "vienna-game-early-bc5",
      "variation": "The Anderssen Defense with 2…Bc5",
      "chapter": "early",
      "at": 3,
      "start": 4,
      "caption": "Attack e5 with Nf3 and recognize the bishop’s pressure.",
      "description": "Develop Nf3 and decide between active Bc4 and a central break. Check f2 while the bishop sits on c5.",
      "plans": {
        "w": "Develop Nf3 and decide between active Bc4 and a central break. Check f2 while the bishop sits on c5.",
        "b": "Develop the bishop early and protect e5 with …d6 when White attacks it."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["f8c5", "Bc5", "Develop the bishop directly toward f2.", "After Nf3 attacks e5, …d6 defends the pawn while keeping the bishop active."],
        ["g1f3", "Nf3", "Develop the knight to f3. It attacks the pawn on e5."],
        ["d7d6", "d6", "Advance the pawn to d6. It supports the pawn on e5."],
        ["c3a4", "Na4", "Move the knight to a4. It attacks the bishop on c5."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["a4c5", "Nxc5", "Capture the bishop on c5. It attacks the pawn on b7."],
        ["d6c5", "dxc5", "Capture the knight on c5. It controls d4."],
        ["c2c3", "c3", "Advance the pawn to c3. It controls d4."]
      ]
    },
    {
      "id": "vienna-game-early-d6",
      "variation": "2…d6 before either knight develops",
      "chapter": "early",
      "at": 3,
      "start": 4,
      "caption": "Use the extra time to develop without forcing the gambit.",
      "description": "Take advantage of Black’s quieter setup to bring pieces out and keep d4 or f4 available.",
      "plans": {
        "w": "Take advantage of Black’s quieter setup to bring pieces out and keep d4 or f4 available.",
        "b": "Defend e5 compactly. Catch up in development before White opens the center."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["d7d6", "d6", "Reinforce e5 and release the c8-bishop.", "White has time to develop because neither black knight has entered the game yet."],
        ["d2d4", "d4", "Advance the pawn to d4. It attacks the pawn on e5."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["g1f3", "Nf3", "Develop the knight to f3. It attacks the pawn on e5."],
        ["b8d7", "Nbd7", "Develop the knight to d7. It supports the pawn on e5."],
        ["h2h3", "h3", "Advance the pawn to h3. This controls g4."]
      ]
    },
    {
      "id": "vienna-game-early-bc5-nc6",
      "variation": "2…Bc5 and 3…Nc6 allow a d4 fork",
      "chapter": "early",
      "at": 5,
      "start": 6,
      "caption": "Calculate the Nxe5 capture and the fork with d4.",
      "description": "If you take e5 and the knight on c6 recaptures, use d4 to fork the knight and bishop.",
      "plans": {
        "w": "If you take e5 and the knight on c6 recaptures, use d4 to fork the knight and bishop.",
        "b": "When White takes e5, compare recapturing with creating a more forcing threat. Recapturing can allow the d4 fork."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["f8c5", "Bc5", "Develop the bishop directly toward f2.", "After Nf3 attacks e5, …d6 defends the pawn while keeping the bishop active."],
        ["g1f3", "Nf3", "Develop the knight to f3. It attacks the pawn on e5."],
        ["b8c6", "Nc6", "Develop the knight to c6. It supports the pawn on e5."],
        ["f3e5", "Nxe5", "Capture the pawn on e5. It attacks the knight on c6 and pawn on d7."],
        ["c6e5", "Nxe5", "Capture the knight on e5."],
        ["d2d4", "d4", "Advance the pawn to d4. It attacks the bishop on c5 and knight on e5."],
        ["c5d6", "Bd6", "Move the bishop to d6. It supports the knight on e5."],
        ["d4e5", "dxe5", "Capture the knight on e5. It attacks the bishop on d6."]
      ]
    },
    {
      "id": "vienna-game-declined-d6-bg4",
      "variation": "After …d6, the …Bg4 pin",
      "chapter": "declined",
      "at": 7,
      "start": 8,
      "caption": "Address the f3 pin before relying on the knight.",
      "description": "Keep control of e5 while developing. Decide whether fxe5, d4, or a quieter setup fits Black’s reply.",
      "plans": {
        "w": "Keep control of e5 while developing. Decide whether fxe5, d4, or a quieter setup fits Black’s reply.",
        "b": "Support e5 and develop with a threat. Challenge the center before the f-file becomes useful to White."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d6", "d6", "Advance the pawn to d6. It supports the pawn on e5."],
        ["g1f3", "Nf3", "Develop the knight to f3. It attacks the pawn on e5."],
        ["c8g4", "Bg4", "Develop the bishop to g4. It attacks the knight on f3."],
        ["d2d3", "d3", "Advance the pawn to d3. It supports the pawn on e4."],
        ["g4f3", "Bxf3", "Capture the knight on f3. It attacks the queen on d1 and pawn on g2."],
        ["d1f3", "Qxf3", "Capture the bishop on f3. It supports the pawn on e4."],
        ["b8c6", "Nc6", "Develop the knight to c6. It supports the pawn on e5."],
        ["c1e3", "Be3", "Develop the bishop to e3. It attacks the pawn on a7."]
      ]
    },
    {
      "id": "vienna-game-declined-d6-nc6",
      "variation": "After …d6, Black develops …Nc6",
      "chapter": "declined",
      "at": 7,
      "start": 8,
      "caption": "Keep development and a central break in view.",
      "description": "Keep control of e5 while developing. Decide whether fxe5, d4, or a quieter setup fits Black’s reply.",
      "plans": {
        "w": "Keep control of e5 while developing. Decide whether fxe5, d4, or a quieter setup fits Black’s reply.",
        "b": "Support e5 and develop with a threat. Challenge the center before the f-file becomes useful to White."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d6", "d6", "Advance the pawn to d6. It supports the pawn on e5."],
        ["g1f3", "Nf3", "Develop the knight to f3. It attacks the pawn on e5."],
        ["b8c6", "Nc6", "Develop the knight to c6. It supports the pawn on e5."],
        ["f1b5", "Bb5", "Develop the bishop to b5. It attacks the knight on c6."],
        ["e5f4", "exf4", "Capture the pawn on f4."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["a7a6", "a6", "Advance the pawn to a6. It attacks the bishop on b5."],
        ["b5e2", "Be2", "Move the bishop to e2. It attacks the pawn on a6."]
      ]
    },
    {
      "id": "vienna-game-early-bb4",
      "variation": "2…Bb4 before …Nc6",
      "chapter": "early",
      "at": 3,
      "start": 4,
      "caption": "Respond to the early pin without conceding the center.",
      "description": "Use Black’s early commitment to develop with tempo or establish a central pawn pair.",
      "plans": {
        "w": "Use Black’s early commitment to develop with tempo or establish a central pawn pair.",
        "b": "Develop into a playable open game and keep enough support for e5."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["f8b4", "Bb4", "Develop the bishop to b4. It attacks the knight on c3."],
        ["d2d4", "d4", "Advance the pawn to d4. It attacks the pawn on e5."],
        ["d7d6", "d6", "Advance the pawn to d6. It supports the pawn on e5."],
        ["d4e5", "dxe5", "Capture the pawn on e5. It attacks the pawn on d6."],
        ["b4c3", "Bxc3+", "Capture the knight on c3. It also gives check."],
        ["b2c3", "bxc3", "Capture the bishop on c3. It controls d4."]
      ]
    },
    {
      "id": "vienna-game-early-c6",
      "variation": "Against 2…c6 and a coming …d5",
      "chapter": "early",
      "at": 3,
      "start": 4,
      "caption": "Account for the center break while developing.",
      "description": "Use Black’s early commitment to develop with tempo or establish a central pawn pair.",
      "plans": {
        "w": "Use Black’s early commitment to develop with tempo or establish a central pawn pair.",
        "b": "Develop into a playable open game and keep enough support for e5."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["c7c6", "c6", "Advance the pawn to c6. It controls d5."],
        ["d2d4", "d4", "Advance the pawn to d4. It attacks the pawn on e5."],
        ["d7d6", "d6", "Advance the pawn to d6. It supports the pawn on e5."],
        ["f2f4", "f4", "Advance the pawn to f4. It attacks the pawn on e5."],
        ["e5d4", "exd4", "Capture the pawn on d4. It attacks the knight on c3."],
        ["d1d4", "Qxd4", "Capture the pawn on d4. It attacks the pawn on d6 and pawn on a7."]
      ]
    },
    {
      "id": "vienna-game-early-g6",
      "variation": "Against 2…g6 and the fianchetto",
      "chapter": "early",
      "at": 3,
      "start": 4,
      "caption": "Take space before Black’s bishop reaches g7.",
      "description": "Use Black’s early commitment to develop with tempo or establish a central pawn pair.",
      "plans": {
        "w": "Use Black’s early commitment to develop with tempo or establish a central pawn pair.",
        "b": "Develop into a playable open game and keep enough support for e5."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g7g6", "g6", "Advance the pawn to g6. This makes g7 available for a fianchetto."],
        ["d2d4", "d4", "Advance the pawn to d4. It attacks the pawn on e5."],
        ["d7d6", "d6", "Advance the pawn to d6. It supports the pawn on e5."],
        ["d4e5", "dxe5", "Capture the pawn on e5. It attacks the pawn on d6."],
        ["d6e5", "dxe5", "Capture the pawn on e5. It controls d4."],
        ["d1d8", "Qxd8+", "Capture the queen on d8. It also gives check."]
      ]
    },
    {
      "id": "vienna-game-accepted-trap",
      "variation": "A queen trap after …Qe7 and …d6",
      "chapter": "accepted",
      "at": 11,
      "start": 12,
      "caption": "Attack the queen with Nd5 and see why taking on e5 can lose it.",
      "description": "Find Nd5 first. If Black takes on e5, win the queen on e7 before recovering more material.",
      "plans": {
        "w": "Find Nd5 first. If Black takes on e5, win the queen on e7 before recovering more material.",
        "b": "After Nd5, save the queen. Taking the e5-pawn leaves the queen attacked."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["e5f4", "exf4", "Take the offered pawn and create a material imbalance.", "White can answer e5 with tempo against the knight on f6. Holding f4 takes time Black may need for development."],
        ["e4e5", "e5", "Attack the f6-knight with the e-pawn.", "Develop while Black deals with the knight. Once the center is under control, look for a way to regain f4."],
        ["d8e7", "Qe7", "Pin the e5-pawn to White’s king and buy time for the f6-knight.", "White can play Qe2 to break the pin to the king. Watch for Nd5 while the queen remains on e7."],
        ["d1e2", "Qe2", "Break the pin to the king so the e5-pawn can threaten the knight again.", "When the queen remains on e7, Nd5 can gain a tempo if Black challenges e5 with …d6."],
        ["f6g8", "Ng8", "Move the attacked knight to g8. From here it controls f6 and h6."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."],
        ["d7d6", "d6", "Advance the pawn to d6. It attacks the pawn on e5."],
        ["c3d5", "Nd5", "Attack the black queen on e7 with the knight.", "If Black takes on e5 without moving the queen, Nxe7 wins it."],
        ["d6e5", "dxe5", "Capture the pawn on e5. It controls d4."],
        ["d5e7", "Nxe7", "Capture the queen on e7. It attacks the bishop on c8 and knight on g8."],
        ["f8e7", "Bxe7", "Capture the knight on e7."],
        ["e2e5", "Qxe5", "Capture the pawn on e5. It attacks the bishop on e7 and pawn on f4."],
        ["g8f6", "Nf6", "Develop the knight to f6. It controls e4 and d5."],
        ["f1b5", "Bb5+", "Develop the bishop to b5. It also gives check."]
      ]
    },
    {
      "id": "vienna-game-counter-d4",
      "variation": "Punish 4…d4 before Black saves the knight",
      "chapter": "counter",
      "at": 7,
      "start": 8,
      "caption": "Compare the knight threat with the advanced d-pawn.",
      "description": "Use fxe5, develop Nf3 and finish mobilizing before attacking. The center opens quickly after …d5.",
      "plans": {
        "w": "Use fxe5, develop Nf3 and finish mobilizing before attacking. The center opens quickly after …d5.",
        "b": "Strike back with …d5. The knight on e4 and an open center give Black time to develop and castle."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d5", "d5", "Counter the gambit immediately by attacking e4 from the center.", "If White takes e5 with the f-pawn, …Nxe4 saves the f6-knight and recaptures a central pawn."],
        ["f4e5", "fxe5", "Capture on e5 and attack the f6-knight.", "Check whether Black can capture on e4 or recapture on e5 before you try to hold the advanced pawn."],
        ["d5d4", "d4", "Advance the pawn to d4. It attacks the knight on c3."],
        ["e5f6", "exf6", "Capture the knight on f6. It attacks the pawn on g7."],
        ["d4c3", "dxc3", "Capture the knight on c3. It attacks the pawn on b2 and pawn on d2."],
        ["b2c3", "bxc3", "Capture the pawn on c3. It controls d4."],
        ["d8f6", "Qxf6", "Capture the pawn on f6. It attacks the bishop on f1 and pawn on c3."],
        ["d1f3", "Qf3", "Move the queen to f3. It attacks the queen on f6."]
      ]
    },
    {
      "id": "vienna-game-bishop-opening",
      "variation": "Optional 3.Bc4 and the attack on f7",
      "chapter": "alternatives",
      "at": 5,
      "start": 6,
      "caption": "Learn Qh5, Bb3, and Nb5 in the sharp bishop alternative.",
      "description": "Use Qh5 to threaten f7 after …Nxe4. Keep the bishop on its attacking diagonal with Bb3 and look for Nb5.",
      "plans": {
        "w": "Use Qh5 to threaten f7 after …Nxe4. Keep the bishop on its attacking diagonal with Bb3 and look for Nb5.",
        "b": "Use …Nd6 to defend f7, then develop …Nc6. Watch the threats on c7 and f7 before chasing the queen."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f1c4", "Bc4", "Develop the bishop toward f7 and make kingside castling easier.", "Keep the bishop active while deciding whether the center calls for d3 or a forcing attack."],
        ["f6e4", "Nxe4", "Capture the pawn on e4. It attacks the knight on c3 and pawn on d2."],
        ["d1h5", "Qh5", "Threaten Qxf7 mate with the bishop supporting f7.", "The main defense …Nd6 puts a knight in range to recapture on f7."],
        ["e4d6", "Nd6", "Move the knight to d6. It attacks the bishop on c4."],
        ["c4b3", "Bb3", "Move the bishop to b3. It attacks the pawn on f7."],
        ["b8c6", "Nc6", "Develop the knight to c6. It supports the pawn on e5."],
        ["c3b5", "Nb5", "Move the knight to b5. It attacks the knight on d6 and pawn on a7."],
        ["g7g6", "g6", "Advance the pawn to g6. It attacks the queen on h5."],
        ["h5f3", "Qf3", "Move the queen to f3. It attacks the knight on c6 and pawn on f7."],
        ["d6f5", "Nf5", "Move the knight to f5. It controls d4."],
        ["g2g4", "g4", "Advance the pawn to g4. It attacks the knight on f5."]
      ]
    },
    {
      "id": "vienna-game-bishop-tactics",
      "variation": "Optional Frankenstein–Dracula tactics",
      "chapter": "alternatives",
      "at": 13,
      "start": 14,
      "caption": "Calculate the fork on c7 and the consequences of taking the rook.",
      "description": "Use Qd5 and the fork on c7 to win material. Keep the a8-knight’s escape and your exposed queen in mind.",
      "plans": {
        "w": "Use Qd5 and the fork on c7 to win material. Keep the a8-knight’s escape and your exposed queen in mind.",
        "b": "After losing the rook, look for tempi against the queen and trap the a8-knight. Piece activity is Black’s compensation."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f1c4", "Bc4", "Develop the bishop toward f7 and make kingside castling easier.", "Keep the bishop active while deciding whether the center calls for d3 or a forcing attack."],
        ["f6e4", "Nxe4", "Capture the pawn on e4. It attacks the knight on c3 and pawn on d2."],
        ["d1h5", "Qh5", "Threaten Qxf7 mate with the bishop supporting f7.", "The main defense …Nd6 puts a knight in range to recapture on f7."],
        ["e4d6", "Nd6", "Move the knight to d6. It attacks the bishop on c4."],
        ["c4b3", "Bb3", "Move the bishop to b3. It attacks the pawn on f7."],
        ["b8c6", "Nc6", "Develop the knight to c6. It supports the pawn on e5."],
        ["c3b5", "Nb5", "Move the knight to b5. It attacks the knight on d6 and pawn on a7."],
        ["g7g6", "g6", "Advance the pawn to g6. It attacks the queen on h5."],
        ["h5f3", "Qf3", "Move the queen to f3. It attacks the knight on c6 and pawn on f7."],
        ["f7f5", "f5", "Advance the pawn to f5. It controls e4."],
        ["f3d5", "Qd5", "Move the queen to d5. It attacks the knight on d6 and pawn on e5."],
        ["d8e7", "Qe7", "Move the queen to e7. It supports the pawn on e5."],
        ["b5c7", "Nxc7+", "Fork Black’s king and a8-rook while taking the c7-pawn.", "If you capture the rook next, calculate where the knight can escape and how Black can chase your queen."],
        ["e8d8", "Kd8", "Move the king to d8 to get out of check."],
        ["c7a8", "Nxa8", "Capture the rook on a8."],
        ["b7b6", "b6", "Advance the pawn to b6. This makes b7 available for a fianchetto."],
        ["d5d3", "Qd3", "Move the queen to d3. It attacks the pawn on f5."],
        ["c8b7", "Bb7", "Develop the bishop to b7. It attacks the knight on a8."],
        ["g1e2", "Ne2", "Develop the knight to e2. It controls d4."]
      ]
    },
    {
      "id": "vienna-game-mieses-center",
      "variation": "Optional Mieses Variation against …d5",
      "chapter": "alternatives",
      "at": 5,
      "start": 6,
      "caption": "Meet the center break when you choose the kingside fianchetto.",
      "description": "Use g3 to prepare Bg2. Respond directly to …d5 before completing the fianchetto.",
      "plans": {
        "w": "Use g3 to prepare Bg2. Respond directly to …d5 before completing the fianchetto.",
        "b": "Use …d5 to contest the center before the bishop can develop to g2."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["g2g3", "g3", "Prepare to fianchetto the king’s bishop.", "Bg2 will reinforce e4 and give White a useful diagonal while the center remains flexible."],
        ["d7d5", "d5", "Advance the pawn to d5. It attacks the pawn on e4."],
        ["e4d5", "exd5", "Capture the pawn on d5."],
        ["f6d5", "Nxd5", "Capture the pawn on d5. It attacks the knight on c3."],
        ["f1g2", "Bg2", "Develop the bishop to g2. It attacks the knight on d5."],
        ["d5c3", "Nxc3", "Capture the knight on c3. It attacks the queen on d1 and pawn on a2."],
        ["b2c3", "bxc3", "Capture the knight on c3. It controls d4."]
      ]
    },
    {
      "id": "vienna-game-mieses-bishop",
      "variation": "Optional fianchetto against …Bc5",
      "chapter": "alternatives",
      "at": 5,
      "start": 6,
      "caption": "Learn the quiet g3 setup when Black develops the bishop.",
      "description": "Fianchetto the king’s bishop and keep f2 protected. Get the remaining knight out before opening the center.",
      "plans": {
        "w": "Fianchetto the king’s bishop and keep f2 protected. Get the remaining knight out before opening the center.",
        "b": "Develop …Bc5 against f2 and keep control of the center. Watch for a delayed White f4 break."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["b8c6", "Nc6", "Develop and reinforce e5 with the queenside knight.", "White usually uses Bc4 or g3 here. Black can support the center before committing the kingside knight."],
        ["g2g3", "g3", "Prepare to fianchetto the king’s bishop.", "Bg2 will reinforce e4 and give White a useful diagonal while the center remains flexible."],
        ["f8c5", "Bc5", "Develop the bishop to c5. It attacks the pawn on f2."],
        ["f1g2", "Bg2", "Develop the bishop to g2. It supports the pawn on e4."],
        ["d7d6", "d6", "Advance the pawn to d6. It supports the pawn on e5."],
        ["c3d5", "Nd5", "Move the knight to d5. It attacks the pawn on c7."],
        ["a7a5", "a5", "Advance the pawn to a5. The pawn now contests b4."],
        ["g1f3", "Nf3", "Develop the knight to f3. It attacks the pawn on e5."]
      ]
    },
    {
      "id": "vienna-game-central-counter-11-e8h8",
      "variation": "The main counter · 6…O-O",
      "chapter": "counter",
      "at": 11,
      "start": 12,
      "caption": "Develop the bishop to d3. It attacks the knight on e4.",
      "description": "Develop the bishop to d3. It attacks the knight on e4. Use fxe5, develop Nf3 and finish mobilizing before attacking. The center opens quickly after …d5.",
      "plans": {
        "w": "Develop the bishop to d3. It attacks the knight on e4. Use fxe5, develop Nf3 and finish mobilizing before attacking. The center opens quickly after …d5.",
        "b": "Castle kingside to secure the king and bring the rook to the f-file. Strike back with …d5. The knight on e4 and an open center give Black time to develop and castle."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d5", "d5", "Counter the gambit immediately by attacking e4 from the center.", "If White takes e5 with the f-pawn, …Nxe4 saves the f6-knight and recaptures a central pawn."],
        ["f4e5", "fxe5", "Capture on e5 and attack the f6-knight.", "Check whether Black can capture on e4 or recapture on e5 before you try to hold the advanced pawn."],
        ["f6e4", "Nxe4", "Save the attacked knight by capturing the e4-pawn.", "The knight is active, but Nf3 and a d-pawn advance can challenge it."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."],
        ["f8e7", "Be7", "Develop the bishop to e7. From here it controls a3 and b4."],
        ["d2d4", "d4", "Advance the pawn to d4. It supports the pawn on e5."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook to the f-file."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It attacks the knight on e4."],
        ["e4c3", "Nxc3", "Capture the knight on c3. It attacks the queen on d1 and pawn on a2."],
        ["b2c3", "bxc3", "Capture the knight on c3. It supports the pawn on d4."]
      ]
    },
    {
      "id": "vienna-game-counter-bc5-13-c8g4",
      "variation": "5…Bc5 eyes the diagonal to g1 · 7…Bg4",
      "chapter": "counter",
      "at": 13,
      "start": 14,
      "caption": "Capture the knight on e4.",
      "description": "Capture the knight on e4. Use fxe5, develop Nf3 and finish mobilizing before attacking. The center opens quickly after …d5.",
      "plans": {
        "w": "Capture the knight on e4. Use fxe5, develop Nf3 and finish mobilizing before attacking. The center opens quickly after …d5.",
        "b": "Develop the bishop to g4. It attacks the knight on f3. Strike back with …d5. The knight on e4 and an open center give Black time to develop and castle."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d5", "d5", "Counter the gambit immediately by attacking e4 from the center.", "If White takes e5 with the f-pawn, …Nxe4 saves the f6-knight and recaptures a central pawn."],
        ["f4e5", "fxe5", "Capture on e5 and attack the f6-knight.", "Check whether Black can capture on e4 or recapture on e5 before you try to hold the advanced pawn."],
        ["f6e4", "Nxe4", "Save the attacked knight by capturing the e4-pawn.", "The knight is active, but Nf3 and a d-pawn advance can challenge it."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."],
        ["f8c5", "Bc5", "Develop the bishop to c5. It controls d4."],
        ["d2d4", "d4", "Advance the pawn to d4. It attacks the bishop on c5."],
        ["c5b4", "Bb4", "Move the bishop to b4. It attacks the knight on c3."],
        ["c1d2", "Bd2", "Develop the bishop to d2. From here it controls c1 and e1."],
        ["c8g4", "Bg4", "Develop the bishop to g4. It attacks the knight on f3."],
        ["c3e4", "Nxe4", "Capture the knight on e4."],
        ["d5e4", "dxe4", "Capture the knight on e4. It attacks the knight on f3."],
        ["d2b4", "Bxb4", "Capture the bishop on b4."]
      ]
    },
    {
      "id": "vienna-game-central-counter-9-f8b4",
      "variation": "The main counter · 5…Bb4",
      "chapter": "counter",
      "at": 9,
      "start": 10,
      "caption": "Develop the bishop to d3. It attacks the knight on e4.",
      "description": "Develop the bishop to d3. It attacks the knight on e4. Use fxe5, develop Nf3 and finish mobilizing before attacking. The center opens quickly after …d5.",
      "plans": {
        "w": "Develop the bishop to d3. It attacks the knight on e4. Use fxe5, develop Nf3 and finish mobilizing before attacking. The center opens quickly after …d5.",
        "b": "Develop the bishop to b4. It attacks the knight on c3. Strike back with …d5. The knight on e4 and an open center give Black time to develop and castle."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d5", "d5", "Counter the gambit immediately by attacking e4 from the center.", "If White takes e5 with the f-pawn, …Nxe4 saves the f6-knight and recaptures a central pawn."],
        ["f4e5", "fxe5", "Capture on e5 and attack the f6-knight.", "Check whether Black can capture on e4 or recapture on e5 before you try to hold the advanced pawn."],
        ["f6e4", "Nxe4", "Save the attacked knight by capturing the e4-pawn.", "The knight is active, but Nf3 and a d-pawn advance can challenge it."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."],
        ["f8b4", "Bb4", "Develop the bishop to b4. It attacks the knight on c3."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It attacks the knight on e4."],
        ["f7f5", "f5", "Advance the pawn to f5. It supports the knight on e4."],
        ["e5f6", "exf6", "Use en passant on f6 to remove the pawn before the opportunity passes. It attacks the pawn on g7."]
      ]
    },
    {
      "id": "vienna-game-gambit-accepted-13-g5g4",
      "variation": "Taking f4 and retreating to g8 · 7…g4",
      "chapter": "accepted",
      "at": 13,
      "start": 14,
      "caption": "Move the attacked knight to g1. From here it controls e2 and f3.",
      "description": "Move the attacked knight to g1. From here it controls e2 and f3. Advance e5 with tempo. Use the extra time to develop and recover f4 when the center is safe.",
      "plans": {
        "w": "Move the attacked knight to g1. From here it controls e2 and f3. Advance e5 with tempo. Use the extra time to develop and recover f4 when the center is safe.",
        "b": "Advance the pawn to g4. It attacks the knight on f3. Save the attacked knight, challenge the e5-pawn, and catch up in development."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["e5f4", "exf4", "Take the offered pawn and create a material imbalance.", "White can answer e5 with tempo against the knight on f6. Holding f4 takes time Black may need for development."],
        ["e4e5", "e5", "Attack the f6-knight with the e-pawn.", "Develop while Black deals with the knight. Once the center is under control, look for a way to regain f4."],
        ["f6g8", "Ng8", "Move the attacked knight to g8. From here it controls f6 and h6."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."],
        ["d7d5", "d5", "Advance the pawn to d5. It controls e4."],
        ["d2d4", "d4", "Advance the pawn to d4. It supports the pawn on e5."],
        ["g7g5", "g5", "Advance the pawn to g5. The pawn now contests f4 and h4."],
        ["h2h4", "h4", "Advance the pawn to h4. It attacks the pawn on g5."],
        ["g5g4", "g4", "Advance the pawn to g4. It attacks the knight on f3."],
        ["f3g1", "Ng1", "Move the attacked knight to g1. From here it controls e2 and f3."],
        ["c7c5", "c5", "Advance the pawn to c5. It attacks the pawn on d4."],
        ["c1f4", "Bxf4", "Capture the pawn on f4. It supports the pawn on e5."]
      ]
    },
    {
      "id": "vienna-game-max-lange-bc5-9-h7h6",
      "variation": "4…Bc5 and the choice of central break · 5…h6",
      "chapter": "max-lange",
      "at": 9,
      "start": 10,
      "caption": "Advance the pawn to h3. This controls g4.",
      "description": "Advance the pawn to h3. This controls g4. Develop Bc4 and watch for a knight attack on the bishop. Prepare kingside development and a central break.",
      "plans": {
        "w": "Advance the pawn to h3. This controls g4. Develop Bc4 and watch for a knight attack on the bishop. Prepare kingside development and a central break.",
        "b": "Advance the pawn to h6. This controls g5. Contest e4 and avoid leaving f7 unprotected. Use …Na5, …Bb4, or central pressure to gain time."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["b8c6", "Nc6", "Develop and reinforce e5 with the queenside knight.", "White usually uses Bc4 or g3 here. Black can support the center before committing the kingside knight."],
        ["f1c4", "Bc4", "Develop the bishop toward f7 and make kingside castling easier.", "Keep the bishop active while deciding whether the center calls for d3 or a forcing attack."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["d2d3", "d3", "Advance the pawn to d3. It supports the pawn on e4."],
        ["f8c5", "Bc5", "Develop the bishop to c5. It attacks the pawn on f2."],
        ["g1f3", "Nf3", "Develop the knight to f3. It attacks the pawn on e5."],
        ["h7h6", "h6", "Advance the pawn to h6. This controls g5."],
        ["h2h3", "h3", "Advance the pawn to h3. This controls g4."],
        ["a7a6", "a6", "Advance the pawn to a6. This controls b5."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook to the f-file."]
      ]
    },
    {
      "id": "vienna-game-max-lange-na5-9-c7c6",
      "variation": "Max Lange Defense and 4…Na5 · 5…c6",
      "chapter": "max-lange",
      "at": 9,
      "start": 10,
      "caption": "Castle kingside to secure the king and bring the rook to the f-file.",
      "description": "Castle kingside to secure the king and bring the rook to the f-file. Develop Bc4 and watch for a knight attack on the bishop. Prepare kingside development and a central break.",
      "plans": {
        "w": "Castle kingside to secure the king and bring the rook to the f-file. Develop Bc4 and watch for a knight attack on the bishop. Prepare kingside development and a central break.",
        "b": "Advance the pawn to c6. It controls d5. Contest e4 and avoid leaving f7 unprotected. Use …Na5, …Bb4, or central pressure to gain time."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["b8c6", "Nc6", "Develop and reinforce e5 with the queenside knight.", "White usually uses Bc4 or g3 here. Black can support the center before committing the kingside knight."],
        ["f1c4", "Bc4", "Develop the bishop toward f7 and make kingside castling easier.", "Keep the bishop active while deciding whether the center calls for d3 or a forcing attack."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["d2d3", "d3", "Advance the pawn to d3. It supports the pawn on e4."],
        ["c6a5", "Na5", "Attack the bishop on c4 with the knight.", "White can retreat to b3 or allow an exchange that changes the queenside pawn structure."],
        ["g1e2", "Nge2", "Develop the knight to e2. It controls d4."],
        ["c7c6", "c6", "Advance the pawn to c6. It controls d5."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook to the f-file."],
        ["d7d5", "d5", "Advance the pawn to d5. It attacks the bishop on c4 and pawn on e4."],
        ["e4d5", "exd5", "Capture the pawn on d5. It attacks the pawn on c6."]
      ]
    },
    {
      "id": "vienna-game-central-counter-15-c5c4",
      "variation": "The main counter · 8…c4",
      "chapter": "counter",
      "at": 15,
      "start": 16,
      "caption": "Move the bishop to e2. It attacks the pawn on c4.",
      "description": "Move the bishop to e2. It attacks the pawn on c4. Use fxe5, develop Nf3 and finish mobilizing before attacking. The center opens quickly after …d5.",
      "plans": {
        "w": "Move the bishop to e2. It attacks the pawn on c4. Use fxe5, develop Nf3 and finish mobilizing before attacking. The center opens quickly after …d5.",
        "b": "Advance the pawn to c4. It attacks the bishop on d3. Strike back with …d5. The knight on e4 and an open center give Black time to develop and castle."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d5", "d5", "Counter the gambit immediately by attacking e4 from the center.", "If White takes e5 with the f-pawn, …Nxe4 saves the f6-knight and recaptures a central pawn."],
        ["f4e5", "fxe5", "Capture on e5 and attack the f6-knight.", "Check whether Black can capture on e4 or recapture on e5 before you try to hold the advanced pawn."],
        ["f6e4", "Nxe4", "Save the attacked knight by capturing the e4-pawn.", "The knight is active, but Nf3 and a d-pawn advance can challenge it."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."],
        ["f8e7", "Be7", "Develop the bishop to e7. From here it controls a3 and b4."],
        ["d2d4", "d4", "Advance the pawn to d4. It supports the pawn on e5."],
        ["c7c5", "c5", "Advance the pawn to c5. It attacks the pawn on d4."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It attacks the knight on e4."],
        ["e4c3", "Nxc3", "Capture the knight on c3. It attacks the queen on d1 and pawn on a2."],
        ["b2c3", "bxc3", "Capture the knight on c3. It supports the pawn on d4."],
        ["c5c4", "c4", "Advance the pawn to c4. It attacks the bishop on d3."],
        ["d3e2", "Be2", "Move the bishop to e2. It attacks the pawn on c4."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook to the f-file."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook to the f-file."],
        ["b8a6", "Na6", "Develop the knight to a6. From here it controls b4 and c5."],
        ["h2h3", "h3", "Advance the pawn to h3. This controls g4."]
      ]
    },
    {
      "id": "vienna-game-counter-nc6-11-c8g4",
      "variation": "5…Nc6 adds pressure to e5 · 6…Bg4",
      "chapter": "counter",
      "at": 11,
      "start": 12,
      "caption": "Advance the pawn to d3. It attacks the knight on e4.",
      "description": "Advance the pawn to d3. It attacks the knight on e4. Use fxe5, develop Nf3 and finish mobilizing before attacking. The center opens quickly after …d5.",
      "plans": {
        "w": "Advance the pawn to d3. It attacks the knight on e4. Use fxe5, develop Nf3 and finish mobilizing before attacking. The center opens quickly after …d5.",
        "b": "Develop the bishop to g4. It attacks the knight on f3. Strike back with …d5. The knight on e4 and an open center give Black time to develop and castle."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d5", "d5", "Counter the gambit immediately by attacking e4 from the center.", "If White takes e5 with the f-pawn, …Nxe4 saves the f6-knight and recaptures a central pawn."],
        ["f4e5", "fxe5", "Capture on e5 and attack the f6-knight.", "Check whether Black can capture on e4 or recapture on e5 before you try to hold the advanced pawn."],
        ["f6e4", "Nxe4", "Save the attacked knight by capturing the e4-pawn.", "The knight is active, but Nf3 and a d-pawn advance can challenge it."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."],
        ["b8c6", "Nc6", "Develop the knight to c6. It attacks the pawn on e5."],
        ["f1b5", "Bb5", "Develop the bishop to b5. It attacks the knight on c6."],
        ["c8g4", "Bg4", "Develop the bishop to g4. It attacks the knight on f3."],
        ["d2d3", "d3", "Advance the pawn to d3. It attacks the knight on e4."],
        ["e4c5", "Nc5", "Move the attacked knight to c5. It attacks the pawn on d3."],
        ["d3d4", "d4", "Advance the pawn to d4. It attacks the knight on c5."],
        ["c5e6", "Ne6", "Move the attacked knight to e6. It attacks the pawn on d4."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook to the f-file."]
      ]
    },
    {
      "id": "vienna-game-counter-bg4-15-d8d7",
      "variation": "5…Bg4 pins the f3-knight · 8…Qd7",
      "chapter": "counter",
      "at": 15,
      "start": 16,
      "caption": "Advance the pawn to h3. It attacks the bishop on g4.",
      "description": "Advance the pawn to h3. It attacks the bishop on g4. Use fxe5, develop Nf3 and finish mobilizing before attacking. The center opens quickly after …d5.",
      "plans": {
        "w": "Advance the pawn to h3. It attacks the bishop on g4. Use fxe5, develop Nf3 and finish mobilizing before attacking. The center opens quickly after …d5.",
        "b": "Move the queen to d7. It supports the pawn on d5. Strike back with …d5. The knight on e4 and an open center give Black time to develop and castle."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d5", "d5", "Counter the gambit immediately by attacking e4 from the center.", "If White takes e5 with the f-pawn, …Nxe4 saves the f6-knight and recaptures a central pawn."],
        ["f4e5", "fxe5", "Capture on e5 and attack the f6-knight.", "Check whether Black can capture on e4 or recapture on e5 before you try to hold the advanced pawn."],
        ["f6e4", "Nxe4", "Save the attacked knight by capturing the e4-pawn.", "The knight is active, but Nf3 and a d-pawn advance can challenge it."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."],
        ["c8g4", "Bg4", "Develop the bishop to g4. It attacks the knight on f3."],
        ["d1e2", "Qe2", "Move the queen to e2. It attacks the knight on e4."],
        ["e4c3", "Nxc3", "Capture the knight on c3. It attacks the queen on e2 and pawn on a2."],
        ["d2c3", "dxc3", "Capture the knight on c3. It controls d4."],
        ["b8c6", "Nc6", "Develop the knight to c6. It attacks the pawn on e5."],
        ["c1f4", "Bf4", "Develop the bishop to f4. It supports the pawn on e5."],
        ["d8d7", "Qd7", "Move the queen to d7. It supports the pawn on d5."],
        ["h2h3", "h3", "Advance the pawn to h3. It attacks the bishop on g4."],
        ["g4f5", "Bf5", "Move the bishop to f5. It attacks the pawn on c2."],
        ["e2f2", "Qf2", "Move the queen to f2. It attacks the pawn on a7."],
        ["a7a6", "a6", "Advance the pawn to a6. This controls b5."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It attacks the bishop on f5."]
      ]
    },
    {
      "id": "vienna-game-counter-bg4-11-e4g5",
      "variation": "5…Bg4 pins the f3-knight · 6…Ng5",
      "chapter": "counter",
      "at": 11,
      "start": 12,
      "caption": "Advance the pawn to d4. It supports the pawn on e5.",
      "description": "Advance the pawn to d4. It supports the pawn on e5. Use fxe5, develop Nf3 and finish mobilizing before attacking. The center opens quickly after …d5.",
      "plans": {
        "w": "Advance the pawn to d4. It supports the pawn on e5. Use fxe5, develop Nf3 and finish mobilizing before attacking. The center opens quickly after …d5.",
        "b": "Move the knight to g5. It attacks the knight on f3. Strike back with …d5. The knight on e4 and an open center give Black time to develop and castle."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d5", "d5", "Counter the gambit immediately by attacking e4 from the center.", "If White takes e5 with the f-pawn, …Nxe4 saves the f6-knight and recaptures a central pawn."],
        ["f4e5", "fxe5", "Capture on e5 and attack the f6-knight.", "Check whether Black can capture on e4 or recapture on e5 before you try to hold the advanced pawn."],
        ["f6e4", "Nxe4", "Save the attacked knight by capturing the e4-pawn.", "The knight is active, but Nf3 and a d-pawn advance can challenge it."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."],
        ["c8g4", "Bg4", "Develop the bishop to g4. It attacks the knight on f3."],
        ["d1e2", "Qe2", "Move the queen to e2. It attacks the knight on e4."],
        ["e4g5", "Ng5", "Move the knight to g5. It attacks the knight on f3."],
        ["d2d4", "d4", "Advance the pawn to d4. It supports the pawn on e5."],
        ["g5f3", "Nxf3+", "Capture the knight on f3. It also gives check."],
        ["g2f3", "gxf3", "Capture the knight on f3. It attacks the bishop on g4."],
        ["g4f5", "Bf5", "Move the bishop to f5. It attacks the pawn on c2."],
        ["c1e3", "Be3", "Develop the bishop to e3. It supports the pawn on d4."]
      ]
    },
    {
      "id": "vienna-game-counter-nc6-15-e8h8",
      "variation": "5…Nc6 adds pressure to e5 · 8…O-O",
      "chapter": "counter",
      "at": 15,
      "start": 16,
      "caption": "Develop the bishop to f4. It supports the pawn on e5.",
      "description": "Develop the bishop to f4. It supports the pawn on e5. Use fxe5, develop Nf3 and finish mobilizing before attacking. The center opens quickly after …d5.",
      "plans": {
        "w": "Develop the bishop to f4. It supports the pawn on e5. Use fxe5, develop Nf3 and finish mobilizing before attacking. The center opens quickly after …d5.",
        "b": "Castle kingside to secure the king and bring the rook to the f-file. Strike back with …d5. The knight on e4 and an open center give Black time to develop and castle."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d5", "d5", "Counter the gambit immediately by attacking e4 from the center.", "If White takes e5 with the f-pawn, …Nxe4 saves the f6-knight and recaptures a central pawn."],
        ["f4e5", "fxe5", "Capture on e5 and attack the f6-knight.", "Check whether Black can capture on e4 or recapture on e5 before you try to hold the advanced pawn."],
        ["f6e4", "Nxe4", "Save the attacked knight by capturing the e4-pawn.", "The knight is active, but Nf3 and a d-pawn advance can challenge it."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."],
        ["b8c6", "Nc6", "Develop the knight to c6. It attacks the pawn on e5."],
        ["f1b5", "Bb5", "Develop the bishop to b5. It attacks the knight on c6."],
        ["f8e7", "Be7", "Develop the bishop to e7. From here it controls a3 and b4."],
        ["d1e2", "Qe2", "Move the queen to e2. It attacks the knight on e4."],
        ["e4c3", "Nxc3", "Capture the knight on c3. It attacks the queen on e2 and bishop on b5."],
        ["d2c3", "dxc3", "Capture the knight on c3. It controls d4."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook to the f-file."],
        ["c1f4", "Bf4", "Develop the bishop to f4. It supports the pawn on e5."],
        ["a7a6", "a6", "Advance the pawn to a6. It attacks the bishop on b5."],
        ["b5d3", "Bd3", "Move the bishop to d3. It attacks the pawn on h7."],
        ["f7f6", "f6", "Advance the pawn to f6. It attacks the pawn on e5."],
        ["e1c1", "O-O-O", "Castle queenside to secure the king and bring the rook to the d-file."]
      ]
    },
    {
      "id": "vienna-game-accepted-ne4-9-d7d6",
      "variation": "4…Ne4 attacks the c3-knight · 5…d6",
      "chapter": "accepted",
      "at": 9,
      "start": 10,
      "caption": "Advance the pawn to d4. It supports the pawn on e5.",
      "description": "Advance the pawn to d4. It supports the pawn on e5. Advance e5 with tempo. Use the extra time to develop and recover f4 when the center is safe.",
      "plans": {
        "w": "Advance the pawn to d4. It supports the pawn on e5. Advance e5 with tempo. Use the extra time to develop and recover f4 when the center is safe.",
        "b": "Advance the pawn to d6. It attacks the pawn on e5. Save the attacked knight, challenge the e5-pawn, and catch up in development."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["e5f4", "exf4", "Take the offered pawn and create a material imbalance.", "White can answer e5 with tempo against the knight on f6. Holding f4 takes time Black may need for development."],
        ["e4e5", "e5", "Attack the f6-knight with the e-pawn.", "Develop while Black deals with the knight. Once the center is under control, look for a way to regain f4."],
        ["f6e4", "Ne4", "Save the attacked knight by capturing the e4-pawn.", "The knight is active, but Nf3 and a d-pawn advance can challenge it."],
        ["c3e4", "Nxe4", "Capture the knight on e4."],
        ["d7d6", "d6", "Advance the pawn to d6. It attacks the pawn on e5."],
        ["d2d4", "d4", "Advance the pawn to d4. It supports the pawn on e5."],
        ["d6e5", "dxe5", "Capture the pawn on e5. It attacks the pawn on d4."],
        ["d4e5", "dxe5", "Capture the pawn on e5."],
        ["d8h4", "Qh4+", "Move the queen to h4. It also gives check."],
        ["e4f2", "Nf2", "Move the knight to f2. It controls e4."]
      ]
    },
    {
      "id": "vienna-game-accepted-ne4-9-d8e7",
      "variation": "4…Ne4 attacks the c3-knight · 5…Qe7",
      "chapter": "accepted",
      "at": 9,
      "start": 10,
      "caption": "Move the queen to e2. It supports the knight on e4.",
      "description": "Move the queen to e2. It supports the knight on e4. Advance e5 with tempo. Use the extra time to develop and recover f4 when the center is safe.",
      "plans": {
        "w": "Move the queen to e2. It supports the knight on e4. Advance e5 with tempo. Use the extra time to develop and recover f4 when the center is safe.",
        "b": "Move the queen to e7. It attacks the pawn on e5. Save the attacked knight, challenge the e5-pawn, and catch up in development."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["e5f4", "exf4", "Take the offered pawn and create a material imbalance.", "White can answer e5 with tempo against the knight on f6. Holding f4 takes time Black may need for development."],
        ["e4e5", "e5", "Attack the f6-knight with the e-pawn.", "Develop while Black deals with the knight. Once the center is under control, look for a way to regain f4."],
        ["f6e4", "Ne4", "Save the attacked knight by capturing the e4-pawn.", "The knight is active, but Nf3 and a d-pawn advance can challenge it."],
        ["c3e4", "Nxe4", "Capture the knight on e4."],
        ["d8e7", "Qe7", "Move the queen to e7. It attacks the pawn on e5."],
        ["d1e2", "Qe2", "Move the queen to e2. It supports the knight on e4."],
        ["b8c6", "Nc6", "Develop the knight to c6. It attacks the pawn on e5."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."],
        ["g7g5", "g5", "Advance the pawn to g5. The pawn now contests f4 and h4."],
        ["e4g5", "Nexg5", "Capture the pawn on g5. It attacks the pawn on f7 and pawn on h7."]
      ]
    },
    {
      "id": "vienna-game-gambit-accepted-9-d7d6",
      "variation": "Taking f4 and retreating to g8 · 5…d6",
      "chapter": "accepted",
      "at": 9,
      "start": 10,
      "caption": "Advance the pawn to d4. It supports the pawn on e5.",
      "description": "Advance the pawn to d4. It supports the pawn on e5. Advance e5 with tempo. Use the extra time to develop and recover f4 when the center is safe.",
      "plans": {
        "w": "Advance the pawn to d4. It supports the pawn on e5. Advance e5 with tempo. Use the extra time to develop and recover f4 when the center is safe.",
        "b": "Advance the pawn to d6. It attacks the pawn on e5. Save the attacked knight, challenge the e5-pawn, and catch up in development."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["e5f4", "exf4", "Take the offered pawn and create a material imbalance.", "White can answer e5 with tempo against the knight on f6. Holding f4 takes time Black may need for development."],
        ["e4e5", "e5", "Attack the f6-knight with the e-pawn.", "Develop while Black deals with the knight. Once the center is under control, look for a way to regain f4."],
        ["f6g8", "Ng8", "Move the attacked knight to g8. From here it controls f6 and h6."],
        ["g1f3", "Nf3", "Develop the knight and defend the advanced e5-pawn.", "The knight clears g1 for castling and also covers h4, where the black queen might check."],
        ["d7d6", "d6", "Advance the pawn to d6. It attacks the pawn on e5."],
        ["d2d4", "d4", "Advance the pawn to d4. It supports the pawn on e5."],
        ["d6e5", "dxe5", "Capture the pawn on e5. It attacks the pawn on d4."],
        ["d1e2", "Qe2", "Move the queen to e2. It attacks the pawn on e5."],
        ["f8e7", "Be7", "Develop the bishop to e7. From here it controls a3 and b4."],
        ["e2e5", "Qxe5", "Capture the pawn on e5. It attacks the bishop on e7 and pawn on f4."]
      ]
    },
    {
      "id": "vienna-game-declined-d6-7-b8d7",
      "variation": "3…d6 reinforces e5 · 4…Nbd7",
      "chapter": "declined",
      "at": 7,
      "start": 8,
      "caption": "Advance the pawn to d4. It attacks the pawn on e5.",
      "description": "Advance the pawn to d4. It attacks the pawn on e5. Keep control of e5 while developing. Decide whether fxe5, d4, or a quieter setup fits Black’s reply.",
      "plans": {
        "w": "Advance the pawn to d4. It attacks the pawn on e5. Keep control of e5 while developing. Decide whether fxe5, d4, or a quieter setup fits Black’s reply.",
        "b": "Develop the knight to d7. It supports the pawn on e5. Support e5 and develop with a threat. Challenge the center before the f-file becomes useful to White."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d6", "d6", "Advance the pawn to d6. It supports the pawn on e5."],
        ["g1f3", "Nf3", "Develop the knight to f3. It attacks the pawn on e5."],
        ["b8d7", "Nbd7", "Develop the knight to d7. It supports the pawn on e5."],
        ["d2d4", "d4", "Advance the pawn to d4. It attacks the pawn on e5."],
        ["e5d4", "exd4", "Capture the pawn on d4. It attacks the knight on c3."],
        ["d1d4", "Qxd4", "Capture the pawn on d4. It attacks the knight on f6 and pawn on d6."],
        ["c7c6", "c6", "Advance the pawn to c6. It controls d5."],
        ["c1e3", "Be3", "Develop the bishop to e3. It supports the queen on d4."]
      ]
    },
    {
      "id": "vienna-game-declined-d6-nc6-9-c8d7",
      "variation": "After …d6, Black develops …Nc6 · 5…Bd7",
      "chapter": "declined",
      "at": 9,
      "start": 10,
      "caption": "Advance the pawn to d3. It supports the pawn on e4.",
      "description": "Advance the pawn to d3. It supports the pawn on e4. Keep control of e5 while developing. Decide whether fxe5, d4, or a quieter setup fits Black’s reply.",
      "plans": {
        "w": "Advance the pawn to d3. It supports the pawn on e4. Keep control of e5 while developing. Decide whether fxe5, d4, or a quieter setup fits Black’s reply.",
        "b": "Develop the bishop to d7. From here it controls h3 and g4. Support e5 and develop with a threat. Challenge the center before the f-file becomes useful to White."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d6", "d6", "Advance the pawn to d6. It supports the pawn on e5."],
        ["g1f3", "Nf3", "Develop the knight to f3. It attacks the pawn on e5."],
        ["b8c6", "Nc6", "Develop the knight to c6. It supports the pawn on e5."],
        ["f1b5", "Bb5", "Develop the bishop to b5. It attacks the knight on c6."],
        ["c8d7", "Bd7", "Develop the bishop to d7. From here it controls h3 and g4."],
        ["d2d3", "d3", "Advance the pawn to d3. It supports the pawn on e4."],
        ["e5f4", "exf4", "Capture the pawn on f4."],
        ["c1f4", "Bxf4", "Capture the pawn on f4. It attacks the pawn on d6."],
        ["a7a6", "a6", "Advance the pawn to a6. It attacks the bishop on b5."],
        ["b5c6", "Bxc6", "Capture the knight on c6. It attacks the bishop on d7 and pawn on b7."]
      ]
    },
    {
      "id": "vienna-game-declined-d6-9-d6d5",
      "variation": "3…d6 reinforces e5 · 5…d5",
      "chapter": "declined",
      "at": 9,
      "start": 10,
      "caption": "Capture the pawn on d5.",
      "description": "Capture the pawn on d5. Keep control of e5 while developing. Decide whether fxe5, d4, or a quieter setup fits Black’s reply.",
      "plans": {
        "w": "Capture the pawn on d5. Keep control of e5 while developing. Decide whether fxe5, d4, or a quieter setup fits Black’s reply.",
        "b": "Advance the pawn to d5. It attacks the pawn on e4. Support e5 and develop with a threat. Challenge the center before the f-file becomes useful to White."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f2f4", "f4", "Challenge e5 and offer the f-pawn after developing the c3-knight.", "Black’s main counter is …d5. If Black takes the pawn instead, e5 attacks the f6-knight."],
        ["d7d6", "d6", "Advance the pawn to d6. It supports the pawn on e5."],
        ["g1f3", "Nf3", "Develop the knight to f3. It attacks the pawn on e5."],
        ["e5f4", "exf4", "Capture the pawn on f4."],
        ["d2d4", "d4", "Advance the pawn to d4. It controls e5."],
        ["d6d5", "d5", "Advance the pawn to d5. It attacks the pawn on e4."],
        ["e4d5", "exd5", "Capture the pawn on d5."],
        ["f6d5", "Nxd5", "Capture the pawn on d5. It attacks the knight on c3."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It attacks the pawn on h7."],
        ["d8e7", "Qe7+", "Move the queen to e7. It also gives check."],
        ["d3e2", "Be2", "Move the bishop to e2. From here it controls d1 and f1."]
      ]
    },
    {
      "id": "vienna-game-max-lange-bc5-9-a7a6",
      "variation": "4…Bc5 and the choice of central break · 5…a6",
      "chapter": "max-lange",
      "at": 9,
      "start": 10,
      "caption": "Move the knight to d5. It attacks the knight on f6 and pawn on c7.",
      "description": "Move the knight to d5. It attacks the knight on f6 and pawn on c7. Develop Bc4 and watch for a knight attack on the bishop. Prepare kingside development and a central break.",
      "plans": {
        "w": "Move the knight to d5. It attacks the knight on f6 and pawn on c7. Develop Bc4 and watch for a knight attack on the bishop. Prepare kingside development and a central break.",
        "b": "Advance the pawn to a6. This controls b5. Contest e4 and avoid leaving f7 unprotected. Use …Na5, …Bb4, or central pressure to gain time."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["b8c6", "Nc6", "Develop and reinforce e5 with the queenside knight.", "White usually uses Bc4 or g3 here. Black can support the center before committing the kingside knight."],
        ["f1c4", "Bc4", "Develop the bishop toward f7 and make kingside castling easier.", "Keep the bishop active while deciding whether the center calls for d3 or a forcing attack."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["d2d3", "d3", "Advance the pawn to d3. It supports the pawn on e4."],
        ["f8c5", "Bc5", "Develop the bishop to c5. It attacks the pawn on f2."],
        ["g1f3", "Nf3", "Develop the knight to f3. It attacks the pawn on e5."],
        ["a7a6", "a6", "Advance the pawn to a6. This controls b5."],
        ["c3d5", "Nd5", "Move the knight to d5. It attacks the knight on f6 and pawn on c7."],
        ["h7h6", "h6", "Advance the pawn to h6. This controls g5."],
        ["c1e3", "Be3", "Develop the bishop to e3. It attacks the bishop on c5."],
        ["c5a7", "Ba7", "Move the bishop to a7. It attacks the bishop on e3."],
        ["e3a7", "Bxa7", "Capture the bishop on a7. It controls d4."]
      ]
    },
    {
      "id": "vienna-game-max-lange-na5-7-f8e7",
      "variation": "Max Lange Defense and 4…Na5 · 4…Be7",
      "chapter": "max-lange",
      "at": 7,
      "start": 8,
      "caption": "Develop the knight to e2. It controls d4.",
      "description": "Develop the knight to e2. It controls d4. Develop Bc4 and watch for a knight attack on the bishop. Prepare kingside development and a central break.",
      "plans": {
        "w": "Develop the knight to e2. It controls d4. Develop Bc4 and watch for a knight attack on the bishop. Prepare kingside development and a central break.",
        "b": "Develop the bishop to e7. From here it controls a3 and b4. Contest e4 and avoid leaving f7 unprotected. Use …Na5, …Bb4, or central pressure to gain time."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["b8c6", "Nc6", "Develop and reinforce e5 with the queenside knight.", "White usually uses Bc4 or g3 here. Black can support the center before committing the kingside knight."],
        ["f1c4", "Bc4", "Develop the bishop toward f7 and make kingside castling easier.", "Keep the bishop active while deciding whether the center calls for d3 or a forcing attack."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["d2d3", "d3", "Advance the pawn to d3. It supports the pawn on e4."],
        ["f8e7", "Be7", "Develop the bishop to e7. From here it controls a3 and b4."],
        ["g1e2", "Nge2", "Develop the knight to e2. It controls d4."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook to the f-file."],
        ["a2a3", "a3", "Advance the pawn to a3. This controls b4."],
        ["c6d4", "Nd4", "Move the knight to d4. It attacks the knight on e2 and pawn on c2."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook to the f-file."]
      ]
    },
    {
      "id": "vienna-game-max-lange-na5-11-d7d6",
      "variation": "Max Lange Defense and 4…Na5 · 6…d6",
      "chapter": "max-lange",
      "at": 11,
      "start": 12,
      "caption": "Advance the pawn to b3. This makes b2 available for a fianchetto.",
      "description": "Advance the pawn to b3. This makes b2 available for a fianchetto. Develop Bc4 and watch for a knight attack on the bishop. Prepare kingside development and a central break.",
      "plans": {
        "w": "Advance the pawn to b3. This makes b2 available for a fianchetto. Develop Bc4 and watch for a knight attack on the bishop. Prepare kingside development and a central break.",
        "b": "Advance the pawn to d6. It supports the pawn on e5. Contest e4 and avoid leaving f7 unprotected. Use …Na5, …Bb4, or central pressure to gain time."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["b8c6", "Nc6", "Develop and reinforce e5 with the queenside knight.", "White usually uses Bc4 or g3 here. Black can support the center before committing the kingside knight."],
        ["f1c4", "Bc4", "Develop the bishop toward f7 and make kingside castling easier.", "Keep the bishop active while deciding whether the center calls for d3 or a forcing attack."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["d2d3", "d3", "Advance the pawn to d3. It supports the pawn on e4."],
        ["c6a5", "Na5", "Attack the bishop on c4 with the knight.", "White can retreat to b3 or allow an exchange that changes the queenside pawn structure."],
        ["g1e2", "Nge2", "Develop the knight to e2. It controls d4."],
        ["a5c4", "Nxc4", "Capture the bishop on c4. It attacks the pawn on b2."],
        ["d3c4", "dxc4", "Capture the knight on c4. It controls d5."],
        ["d7d6", "d6", "Advance the pawn to d6. It supports the pawn on e5."],
        ["b2b3", "b3", "Advance the pawn to b3. This makes b2 available for a fianchetto."],
        ["c7c6", "c6", "Advance the pawn to c6. It controls d5."],
        ["a2a4", "a4", "Advance the pawn to a4. The pawn now contests b5."],
        ["f8e7", "Be7", "Develop the bishop to e7. This reinforces the pawn on d6."],
        ["e1g1", "O-O", "Castle kingside to secure the king and bring the rook to the f-file."]
      ]
    },
    {
      "id": "vienna-game-early-d6-7-e5d4",
      "variation": "2…d6 before either knight develops · 4…exd4",
      "chapter": "early",
      "at": 7,
      "start": 8,
      "caption": "Capture the pawn on d4.",
      "description": "Capture the pawn on d4. Use Black’s early commitment to develop with tempo or establish a central pawn pair.",
      "plans": {
        "w": "Capture the pawn on d4. Use Black’s early commitment to develop with tempo or establish a central pawn pair.",
        "b": "Capture the pawn on d4. It attacks the knight on c3. Develop into a playable open game and keep enough support for e5."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["d7d6", "d6", "Reinforce e5 and release the c8-bishop.", "White has time to develop because neither black knight has entered the game yet."],
        ["d2d4", "d4", "Advance the pawn to d4. It attacks the pawn on e5."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["g1f3", "Nf3", "Develop the knight to f3. It attacks the pawn on e5."],
        ["e5d4", "exd4", "Capture the pawn on d4. It attacks the knight on c3."],
        ["f3d4", "Nxd4", "Capture the pawn on d4."],
        ["f8e7", "Be7", "Develop the bishop to e7. This reinforces the pawn on d6."],
        ["c1f4", "Bf4", "Develop the bishop to f4. It attacks the pawn on d6."],
        ["b8c6", "Nc6", "Develop the knight to c6. It attacks the knight on d4."],
        ["d1d2", "Qd2", "Move the queen to d2. It supports the knight on d4."]
      ]
    },
    {
      "id": "vienna-game-early-bc5-nc6-11-d6e5",
      "variation": "2…Bc5 and 3…Nc6 allow a d4 fork · 6…Bxe5",
      "chapter": "early",
      "at": 11,
      "start": 12,
      "caption": "Develop the bishop to d3. It supports the pawn on e4.",
      "description": "Develop the bishop to d3. It supports the pawn on e4. Use Black’s early commitment to develop with tempo or establish a central pawn pair.",
      "plans": {
        "w": "Develop the bishop to d3. It supports the pawn on e4. Use Black’s early commitment to develop with tempo or establish a central pawn pair.",
        "b": "Capture the pawn on e5. It attacks the knight on c3 and pawn on h2. Develop into a playable open game and keep enough support for e5."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["f8c5", "Bc5", "Develop the bishop directly toward f2.", "After Nf3 attacks e5, …d6 defends the pawn while keeping the bishop active."],
        ["g1f3", "Nf3", "Develop the knight to f3. It attacks the pawn on e5."],
        ["b8c6", "Nc6", "Develop the knight to c6. It supports the pawn on e5."],
        ["f3e5", "Nxe5", "Capture the pawn on e5. It attacks the knight on c6 and pawn on d7."],
        ["c6e5", "Nxe5", "Capture the knight on e5."],
        ["d2d4", "d4", "Advance the pawn to d4. It attacks the bishop on c5 and knight on e5."],
        ["c5d6", "Bd6", "Move the bishop to d6. It supports the knight on e5."],
        ["d4e5", "dxe5", "Capture the knight on e5. It attacks the bishop on d6."],
        ["d6e5", "Bxe5", "Capture the pawn on e5. It attacks the knight on c3 and pawn on h2."],
        ["f1d3", "Bd3", "Develop the bishop to d3. It supports the pawn on e4."],
        ["g8f6", "Nf6", "Develop the knight to f6. It attacks the pawn on e4."],
        ["c3b5", "Nb5", "Move the knight to b5. It attacks the pawn on a7 and pawn on c7."],
        ["a7a6", "a6", "Advance the pawn to a6. It attacks the knight on b5."],
        ["f2f4", "f4", "Advance the pawn to f4. It attacks the bishop on e5."]
      ]
    },
    {
      "id": "vienna-game-mieses-center-11-f8d6",
      "variation": "Optional Mieses Variation against …d5 · 6…Bd6",
      "chapter": "alternatives",
      "at": 11,
      "start": 12,
      "caption": "Advance the pawn to d3. It controls e4.",
      "description": "Advance the pawn to d3. It controls e4. Recognize which White setup you chose. The bishop system allows immediate tactics, while g3 supports a fianchetto.",
      "plans": {
        "w": "Advance the pawn to d3. It controls e4. Recognize which White setup you chose. The bishop system allows immediate tactics, while g3 supports a fianchetto.",
        "b": "Develop the bishop to d6. It supports the pawn on e5. Challenge the selected setup in the center and keep the king safe before taking material."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["g2g3", "g3", "Prepare to fianchetto the king’s bishop.", "Bg2 will reinforce e4 and give White a useful diagonal while the center remains flexible."],
        ["d7d5", "d5", "Advance the pawn to d5. It attacks the pawn on e4."],
        ["e4d5", "exd5", "Capture the pawn on d5."],
        ["f6d5", "Nxd5", "Capture the pawn on d5. It attacks the knight on c3."],
        ["f1g2", "Bg2", "Develop the bishop to g2. It attacks the knight on d5."],
        ["d5c3", "Nxc3", "Capture the knight on c3. It attacks the queen on d1 and pawn on a2."],
        ["b2c3", "bxc3", "Capture the knight on c3. It controls d4."],
        ["f8d6", "Bd6", "Develop the bishop to d6. It supports the pawn on e5."],
        ["d2d3", "d3", "Advance the pawn to d3. It controls e4."],
        ["b8c6", "Nc6", "Develop the knight to c6. It supports the pawn on e5."],
        ["a2a4", "a4", "Advance the pawn to a4. The pawn now contests b5."],
        ["h7h6", "h6", "Advance the pawn to h6. This controls g5."],
        ["a1b1", "Rb1", "Move the rook to b1. It attacks the pawn on b7."]
      ]
    },
    {
      "id": "vienna-game-bishop-opening-9-f8e7",
      "variation": "Optional 3.Bc4 and the attack on f7 · 5…Be7",
      "chapter": "alternatives",
      "at": 9,
      "start": 10,
      "caption": "Capture the pawn on e5. It attacks the bishop on e7 and knight on d6.",
      "description": "Capture the pawn on e5. It attacks the bishop on e7 and knight on d6. Recognize which White setup you chose. The bishop system allows immediate tactics, while g3 supports a fianchetto.",
      "plans": {
        "w": "Capture the pawn on e5. It attacks the bishop on e7 and knight on d6. Recognize which White setup you chose. The bishop system allows immediate tactics, while g3 supports a fianchetto.",
        "b": "Develop the bishop to e7. From here it controls h4 and g5. Challenge the selected setup in the center and keep the king safe before taking material."
      },
      "moves": [
        ["e2e4", "e4", "Claim central space and open lines for the queen and king’s bishop.", "Against …e5, Nc3 defends e4 and leaves f4 free for the pawn."],
        ["e7e5", "e5", "Match White in the center and take control of d4 and f4."],
        ["b1c3", "Nc3", "Develop the queenside knight and defend e4.", "The knight leaves the f-pawn free. Against …Nf6, White can choose the gambit with f4, the bishop with Bc4, or a fianchetto with g3."],
        ["g8f6", "Nf6", "Develop while attacking e4.", "The position of this knight is what makes e5 a tempo after an immediate …exf4."],
        ["f1c4", "Bc4", "Develop the bishop toward f7 and make kingside castling easier.", "Keep the bishop active while deciding whether the center calls for d3 or a forcing attack."],
        ["f6e4", "Nxe4", "Capture the pawn on e4. It attacks the knight on c3 and pawn on d2."],
        ["d1h5", "Qh5", "Threaten Qxf7 mate with the bishop supporting f7.", "The main defense …Nd6 puts a knight in range to recapture on f7."],
        ["e4d6", "Nd6", "Move the knight to d6. It attacks the bishop on c4."],
        ["c4b3", "Bb3", "Move the bishop to b3. It attacks the pawn on f7."],
        ["f8e7", "Be7", "Develop the bishop to e7. From here it controls h4 and g5."],
        ["h5e5", "Qxe5", "Capture the pawn on e5. It attacks the bishop on e7 and knight on d6."],
        ["e8g8", "O-O", "Castle kingside to secure the king and bring the rook to the f-file."],
        ["g1f3", "Nf3", "Develop the knight to f3. It supports the queen on e5."],
        ["b8c6", "Nc6", "Develop the knight to c6. It attacks the queen on e5."],
        ["e5f4", "Qf4", "Move the queen to f4. It attacks the pawn on f7."]
      ]
    }
  ]
};
