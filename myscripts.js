
const rock = "rock";
const paper ="paper";
const scissors = "scissors"; 
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let aHumanChoice = getHumanChoice();
let aComputerChoice 


function getHumanChoice(){
    let aHumanChoice = prompt("Please type Rock, Paper or Scissors","");
    if(aHumanChoice === ("")){getHumanChoice()

    }else if(aHumanChoice.toLowerCase() === ("rock")){aHumanChoice = rock;return(aHumanChoice);

    }else if (aHumanChoice.toLowerCase() === ("paper")){ aHumanChoice = paper ;return(aHumanChoice);
    
    }else if (aHumanChoice.toLowerCase() === ("scissors")){aHumanChoice = scissors;return(aHumanChoice);
    }else if(aHumanChoice === null) {getHumanChoice()
    
    }else if (aHumanChoice !== "rock" || "paper" ||"scissors"){getHumanChoice()
   
    }else {getHumanChoice()};
    ;

}

function getComputerChoice(){
  
    if( Math.floor(Math.random() * 3) === 0 ){
    aComputerChoice = "rock";return(aComputerChoice);

    }else if( Math.floor(Math.random() * 3)===1){aComputerChoice = "paper";return(aComputerChoice);
  
    }else if ( Math.floor(Math.random() * 3) === 2){aComputerChoice = "scissors";
    return(aComputerChoice)    
  }else{getComputerChoice(3)}}

//getHumanChoice()
getComputerChoice(3);
console.log(aHumanChoice);
console.log(aComputerChoice);


function playRound(){
   if(aHumanChoice === "rock" && (aComputerChoice === "scissors")){console.log(`You win, Rock beats Scissors`)
    }else if(aHumanChoice  === "paper" && (aComputerChoice === "rock")){console.log(`You win, Paper beats Rock`)
    }else if(aHumanChoice  === "scissors" && (aComputerChoice === "paper")){console.log(`You win, Scissors beats Paper`)
    }
    else if (aHumanChoice === aComputerChoice){
        console.log("draw")
    }else {console.log(`You lose`)}
    }
    playRound(aHumanChoice,aComputerChoice); 