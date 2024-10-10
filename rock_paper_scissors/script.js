let humanScore = 0
let computerScore = 0
let noWinner = 0

function playRound(humanChoise, computerChoise) {
    if (humanChoise === "rock" && computerChoise === "scissors") {
        ++humanScore
    } else if (humanChoise === "paper" && computerChoise === "scissors") {
        ++computerScore
    } else if (humanChoise === "rock" && computerChoise === "paper") {
        ++computerScore
    } else if (humanChoise === "paper" && computerChoise === "rock") {
        ++humanScore
    } else if (humanChoise === "scissors" && computerChoise === "rock") {
        ++computerScore
    } else if (humanChoise === "scissors" && computerChoise === "paper") {
        ++humanScore
    } else {
        ++noWinner
    }
    if (humanScore === 1)
        console.log("human win")
    else if (computerScore === 1)
        console.log("computer win")
    else
        console.log("no winner")
}

function getComputedSelection() {
    var list = ["rock", "paper", "scissors"]
    const randIndex = Math.floor(Math.random() * list.length);
    return list[randIndex]
}

function gethumanSelection() {
    let answer = prompt("Please enter rock, paper or scissors: ")
    return answer
}



function playGame() {
    for (var i = 0; i < 5; i++) {
        let humanSelection = gethumanSelection()
        let computerSelection = getComputedSelection()
        console.log(`Round ${i + 1}: Human chose ${humanSelection}, Computer chose ${computerSelection}`);
        playRound(humanSelection, computerSelection)
    }
    console.log(`Final Scores: Human: ${humanScore}, Computer: ${computerScore}, Ties: ${noWinner}`);
}

playGame()