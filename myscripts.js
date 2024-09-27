function playGame(){

const rock = "rock";
const paper ="paper";
const scissors = "scissors"; 
let gameCount = 0;
let humanScore = 0;
let computerScore = 0;
let aHumanChoice = getHumanChoice();
let aComputerChoice 


function getHumanChoice(){
    let aHumanChoice = prompt("Please type Rock, Paper or Scissors","");
    if(aHumanChoice === ("")){getHumanChoice()

    }else if(aHumanChoice.toLowerCase() === ("rock")){aHumanChoice = rock;console.log(aHumanChoice);return(aHumanChoice);

    }else if (aHumanChoice.toLowerCase() === ("paper")){ aHumanChoice = paper ;console.log(aHumanChoice);return(aHumanChoice);
    
    }else if (aHumanChoice.toLowerCase() === ("scissors")){aHumanChoice = scissors;console.log(aHumanChoice);return(aHumanChoice);
    }else if(aHumanChoice === null) {getHumanChoice()
    
    }else if (aHumanChoice !== "rock" || "paper" ||"scissors"){getHumanChoice()
   
    }else {getHumanChoice()};
    ;

}

function getComputerChoice(){
  
    if( Math.round(Math.random() * 3) === 0 ){
        aComputerChoice = "rock";console.log(aComputerChoice);return(aComputerChoice);

    }else if( Math.round(Math.random() * 3)===1){
        aComputerChoice = "paper";console.log(aComputerChoice);return(aComputerChoice);
  
    }else if ( Math.round(Math.random() * 3) === 2){
        aComputerChoice = "scissors";console.log(aComputerChoice);
        return(aComputerChoice)    
    }else{getComputerChoice(3)}}

//getHumanChoice()
getComputerChoice(3);
console.log(aHumanChoice);
console.log(aComputerChoice);


function playRound(){
   if(aHumanChoice === "rock" && (aComputerChoice === "scissors")){console.log(`You win`);humanScore++;gameCount++;
    }else if(aHumanChoice  === "paper" && (aComputerChoice === "rock")){console.log(`You win`);humanScore++;gameCount++;
    }else if(aHumanChoice  === "scissors" && (aComputerChoice === "paper")){console.log(`You win`);humanScore++;gameCount++;
    }
    else if (aHumanChoice === aComputerChoice){
        console.log("draw");gameCount++;
    }else {console.log(`You lose`);computerScore++;gameCount++;}
    console.log(gameCount)
    }
     
     
     
     for (gameCount = 0 ; gameCount < 5;){aHumanChoice = getHumanChoice();getComputerChoice(3);playRound(aHumanChoice,aComputerChoice)};
    if (gameCount = 5 && humanScore > computerScore){console.log(`Well done, You scored ${humanScore}, and the computer scored ${computerScore}.
    You won!`)
    }else if(gameCount = 5 && computerScore > humanScore){console.log(`Game over, You scored ${humanScore}, The computer scored ${computerScore} You lost`)}
    else{console.log(`Game over, You scored ${humanScore}, The computer scored ${computerScore}`)}

}
playGame();

