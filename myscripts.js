
let rock;
let paper;
let scissors; 
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let aHumanChoice ;
let aComputerChoice ;


function getHumanChoice(){
    let humanChoice = prompt("Please choose Rock, Paper, Scissors","Make a choice!");
    if(humanChoice.toLowerCase() === ("")){getHumanChoice()

    }else if(humanChoice.toLowerCase() === ("rock")){console.log("Rock");rock = 0;aHumanChoice = rock;

    }else if (humanChoice.toLowerCase() === ("paper")){console.log("Paper"); paper = 1;aHumanChoice = paper;
    
    }else if (humanChoice.toLowerCase() === ("scissors")){console.log("Scissors"); scissors = 2 ;aHumanChoice = scissors;
    }else if(humanChoice === null) {getHumanChoice()
    
    }else {getHumanChoice()}

}
function getComputerChoice(){
  
    if( Math.floor(Math.random() * 3) === 0 ){console.log("Rock");
    acomputerChoice = 0;
  
    }else if( Math.floor(Math.random() * 3)===1){console.log("Paper");acomputerChoice = 1;
  
    }else if ( Math.floor(Math.random() * 3) === 2){console.log("Scissors");acomputerChoice = 2;
  }}
//getHumanChoice();
//etComputerChoice(3);


function playRound(aHumanChoice,aComputerChoice){
   if(aHumanChoice === rock || (aComputerChoice === (paper/*|| scissors*/))){console.log(`You win, Rock beats Scissors`)
    }else if(aHumanChoice  === paper || (aComputerChoice === (scissors /*|| paper*/))){console.log(`You win, Paper beats Rock`)
    }else if(aHumanChoice  === scissors || (aComputerChoice === (rock /*|| rock*/))){console.log(`You win, Scissors beats Paper`)
    }
    else if (aHumanChoice === aComputerChoice){
        console.log("draw")
    }else {console.log(`You lose`)}
    }
    playRound(getHumanChoice(),getComputerChoice());