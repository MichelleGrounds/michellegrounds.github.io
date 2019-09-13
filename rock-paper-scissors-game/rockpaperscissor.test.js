const { rockPaperScissorGame, didPunyHumanWinOrNot } = require('./rockpaperscissorgame');
//
// test('0.2 should be rock', () => {
//   expect(rockPaperScissorGame(0.2)).toBe("Rock");
// });
//
// test('0.3333333333 should be paper', () => {
//   expect(rockPaperScissorGame(0.3333333333)).toBe("Paper");
// });
//
// test('0.33 should be rock', () => {
//   expect(rockPaperScissorGame(0.33)).toBe("Rock");
// });
//
// test('0.331 should be paper', () => {
//   expect(rockPaperScissorGame(0.331)).toBe("Paper");
// });
//
// test('0.66 should be paper', () => {
//   expect(rockPaperScissorGame(0.66)).toBe("Paper");
// });
//
// test('0.661 should be scissors', () => {
//   expect(rockPaperScissorGame(0.661)).toBe("Scissors");
// });
//
// test('0.9999999 should be scissors', () => {
//   expect(rockPaperScissorGame(0.9999999)).toBe("Scissors");
// });
//
// test('0 should be rock', () => {
//   expect(rockPaperScissorGame(0)).toBe("Rock");
// });
//
// test('0.33000001 should be Paper', () => {
//   expect(rockPaperScissorGame(0.33000001)).toBe("Paper");
// });


test('if human is paper and comp rock, then human wins', () => {
  const humanChoice = "paper";
  const computerChoice = "rock";
  expect(didPunyHumanWinOrNot(computerChoice, humanChoice)).toBe("win");
});

test("if human is paper and comp scissors, then human loses", () => {
  const humanChoice = "paper";
  const computerChoice = "scissors";
  expect(didPunyHumanWinOrNot(computerChoice, humanChoice)).toBe("lose");
});

test("if human is rock and comp scissors, then human wins", () => {
  const humanChoice = "rock";
  const computerChoice = "scissors";
  expect(didPunyHumanWinOrNot(computerChoice, humanChoice)).toBe("win");
});

test("if human is scissors and comp is paper, then human wins", () => {
  const humanChoice = "scissors";
  const computerChoice = "paper";
  expect(didPunyHumanWinOrNot(computerChoice, humanChoice)).toBe("win");
})

test("if human and comp are both rock, then we have a draw", () => {
  const humanChoice = "rock";
  const computerChoice = "rock";
  expect(didPunyHumanWinOrNot(computerChoice, humanChoice)).toBe("tie");
})

test("if human and comp are both paper, then we have a draw", () => {
  const humanChoice = "paper";
  const computerChoice = "paper";
  expect(didPunyHumanWinOrNot(computerChoice, humanChoice)).toBe("tie");
})
