const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'You Win!';
const RESULT_COMPUTER_WINS = 'You lost';
const DEFAULT_USER_CHOICE = ROCK;

const getPlayerChoice = () => {
   const selection = prompt(`Choose one: ${ROCK}, ${PAPER} or ${SCISSORS}`, '').toUpperCase();
    if (
        selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS
    ) {
        alert(`Invalid choice we picked ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    } 
    return selection;
};

const getComputerChoice = () => {
    const randomValue = Math.random();
    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
};

const getWinner = (cChoice, pChoice) => 
    cChoice === pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
      ? RESULT_PLAYER_WINS
      : RESULT_COMPUTER_WINS;

      const playerChoice = getPlayerChoice();
      const computerChoice = getComputerChoice();
      const winner = getWinner(computerChoice, playerChoice);
      let message = `You picked ${playerChoice}, computer picked ${computerChoice}, so you `;
      if (winner === RESULT_DRAW) {
          message = message + 'had a draw.';
      } else if (winner === RESULT_PLAYER_WINS) {
          message = message + 'won!';
      } else {
          message = message + 'lost.';
      }
      alert(message);
      console.log(winner);
    
    
