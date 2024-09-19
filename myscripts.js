
let rock;
let paper;
let scissors; 
let computerChoice;
let humanScore = 0;
let computerScore = 0;

let aComputerChoice;

let aHumanChoice = prompt("Please type Rock, Paper or Scissors","");
function getHumanChoice(){
    
    if(aHumanChoice === ("")){getHumanChoice()

    }else if(aHumanChoice.toLowerCase() === ("rock")){aHumanChoice = "rock";return(aHumanChoice);

    }else if (aHumanChoice.toLowerCase() === ("paper")){ aHumanChoice = "paper";return(aHumanChoice);
    
    }else if (aHumanChoice.toLowerCase() === ("scissors")){aHumanChoice = "scissors";return(aHumanChoice);
    }else if(aHumanChoice === null) {getHumanChoice()
    
    }else if (aHumanChoice !== "rock" || "paper" ||"scissors"){getHumanChoice()
   
    }else {getHumanChoice()};
    ;

}
console.log(aHumanChoice)
function getComputerChoice(){
  
    if( Math.floor(Math.random() * 3) === 0 ){
    aComputerChoice = "Rock";return(aComputerChoice);

    }else if( Math.floor(Math.random() * 3)===1){aComputerChoice = "Paper";return(aComputerChoice);
  
    }else if ( Math.floor(Math.random() * 3) === 2){aComputerChoice = "Scissors";
    return(aComputerChoice)    
  }else{getComputerChoice(3)}}

getHumanChoice()
getComputerChoice(3);
console.log(aHumanChoice);
console.log(aComputerChoice);


function playRound(aHumanChoice,aComputerChoice){
   if(aHumanChoice === "rock" && (aComputerChoice === "Scissors")){console.log(`You win, Rock beats Scissors`)
    }else if(aHumanChoice  === "paper" && (aComputerChoice === "Rock")){console.log(`You win, Paper beats Rock`)
    }else if(aHumanChoice  === "scissors" && (aComputerChoice === "Paper")){console.log(`You win, Scissors beats Paper`)
    }
    else if (aHumanChoice === aComputerChoice){
        console.log("draw")
    }else {console.log(`You lose`)}
    }
    playRound(); 