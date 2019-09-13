var rock = {
  min: 0,
  max: 0.33,
  image: "rock.png",
  name: "rock"
};

var paper = {
  min: 0.33,
  max: 0.66,
  image: "paper.jpg",
  name: "paper"
};

var scissors = {
  min: 0.66,
  max: 1,
  image: "scissors.png",
  name: "scissors"
};

var scores = {
  human: 0,
  computer: 0
}

var winningCombinations = {
  rock: "scissors",
  paper: "rock",
  scissors: "paper"
}

var endOfGameMessages = {
  win: "You win!!!",
  lose: "You lose!",
  tie: "It's a tie."
}

var chrisModeActivated = false

function changeChrisModeStatus(){
  chrisModeActivated = !chrisModeActivated
}

function processPunyHumansClick(event){
  var randomNumber = Math.random();
  var resultGame = rockPaperScissorGame(randomNumber)

  if (chrisModeActivated){
    resultGame = rock
  }

  var computerChoice = resultGame.name
  var humanChoice = event.id

  var resultMessage = didPunyHumanWinOrNot(computerChoice, humanChoice)

  if (resultMessage == endOfGameMessages.win){
    scores.human++;
  } else if (resultMessage == endOfGameMessages.lose){
    scores.computer++;
  }

  document.getElementById('computerImage').style.backgroundImage = "url(" + resultGame.image + ")"
  document.getElementById("resultMessage").innerHTML = resultMessage
  document.getElementById("humanScore").innerHTML = "Human Score: " + scores.human
  document.getElementById("computerScore").innerHTML = "Computer Score: " + scores.computer
}

function rockPaperScissorGame(randomNumber){
  if (randomNumber >= rock.min && randomNumber <= rock.max){
    return rock
  } else if (randomNumber > paper.min && randomNumber <= paper.max){
    return paper
  } else {
    return scissors
  }
}

function didPunyHumanWinOrNot(computerChoice, humanChoice){
  if((computerChoice == "rock" && humanChoice == "paper")
    || (computerChoice == "scissors" && humanChoice == "rock")
    || (computerChoice == "paper" && humanChoice == "scissors")){
    return endOfGameMessages.win
  }
  if (computerChoice == humanChoice){
    return endOfGameMessages.tie
  }
  return endOfGameMessages.lose
}

// module.exports = { rockPaperScissorGame, didPunyHumanWinOrNot, processPunyHumansClick }
