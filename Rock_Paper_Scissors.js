/* Rock paper scissors is a classic two player game. Each player chooses either rock, paper, or scissors. The items are compared, and whichever player chooses the more powerful item wins.

The possible outcomes are:

Rock destroys scissors.
Scissors cut paper.
Paper covers rock.
If there's a tie, then the game ends in a draw.*/


//Get the user's choice.


const getUserChoice = (userInput) => {
userInput = userInput.toLowerCase();
	if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
  return userInput;
	} else {
  	console.log('Error! Try again!')
	}
};

//Get the computer's choice.

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);

  if (randomNumber === 0) {
    return 'rock';
  } else if (randomNumber === 1) {
    return 'paper';
  } else {
    return 'scissors';
  }

};

//Compare the two choices and determine a winner.

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'It is a tie!'
  }

  if (userChoice === 'rock') {
    if (computerChoice === 'scissors') {
      return 'The user has won!'
    } else {
      return 'The computer has won!'
    }
  }

	 if (userChoice === 'paper') {
    if (computerChoice === 'scissors') {
      return 'The computer has won!'
    } else {
      return 'The user has won!'
    }
  }

  if (userChoice === 'scissors') {
    if (computerChoice === 'paper') {
      return 'The user has won!'
    } else {
      return 'The computer has won!'
    }
  }

};

//Play the game

const playGame = () => {
  const userChoice = getUserChoice('rock');
  const computerChoice = getComputerChoice();
	console.log('You threw: ' + userChoice);
	console.log('Computer threw: ' + 	computerChoice);
  console.log('And the winner is: ' + determineWinner(userChoice, computerChoice))
};


playGame();
