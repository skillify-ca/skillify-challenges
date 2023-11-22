type Card = {
  value: number;
  suit: string;
};

type Hand = {
  cards: Card[];
};

const WINNING_SCORE = 11;

// Check if the cards in the hand add up to WINNING_SCORE
function isWinningHand(hand: Hand) {
  // TODO: implement this function.
}

type DiceRoll = 1 | 2 | 3 | 4 | 5 | 6;

// Check if the dice rolls add up to WINNING_SCORE
function isWinningRoll(roll: DiceRoll[]) {
  // TODO: implement this function
}
