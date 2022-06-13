const prompt = require('prompt-sync')({sigint: true})

let Player1 = (prompt("Player 1, enter, rock, paper or scissors: "))
let Player2 = (prompt("Player 2, enter rock, paper or scissors: "))


if(Player1 === "rock" && Player2 === "scissors"){
    console.log("Player1 wins!")
}
if(Player1 === "paper" && Player2 === "rock"){
   console.log("Player1 wins!") 
}
if(Player1 === "scissors" && Player2 === "paper"){
    console.log("Player1 wins!")
}

if (Player2 === "rock" && Player1 === "paper"){
    console.log("Player2 wins!")
}
if (Player2 === "paper" && Player1 === "rock"){
    console.log("Player2 wins!")
}
if(Player2 === "scissors" && Player1 === "scissors"){
    console.log("Player2 wins!")
}

if(Player1 === "scissors" && Player2 === "scissors"){
    console.log("Draw!")
}
if(Player1 === "rock" && Player2 === "rock"){
    console.log("Draw1")
}
if(Player1 === "paper" && Player2 === "paper"){
    console.log("Draw!")
}