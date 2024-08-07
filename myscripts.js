





function getHumanChoice(){
    let humanChoice = prompt("Please choose Rock, Paper, Scissors","Make a choice!");
    if(humanChoice.toLowerCase() === ("" || null )){getHumanChoice()

    }else if(humanChoice.toLowerCase() === ("rock")){console.log("Rock")

    }else if (humanChoice.toLowerCase() === ("paper")){console.log("Paper")
    
    }else if (humanChoice.toLowerCase() === ("scissors")){console.log("Scissors")
    }else {getHumanChoice()}

}
function getComputerChoice(){
  
    if( Math.floor(Math.random() * 3) == 0 ){console.log("Rock")
  
    }else if( Math.floor(Math.random() * 3)<= 1){console.log("Paper")
  
    }else if( Math.floor(Math.random() * 3) == 2){console.log("Scissors")
  }}
//getHumanChoice();
//getComputerChoice(3);
let humanScore = 0;
let computerScore = 0;
let aHumanChoice ;
let aComputerChoice ;

playRound(getHumanChoice(),getComputerChoice(3));
function playRound(aHumanChoice,aComputerCoice){
   if(aHumanChoice === "Rock" && aComputerChoice !== ("Paper"|| "Rock")){console.log(`You win, Rock beats Scissors`)
}else if(aHumanChoice  === "Paper" && aComputerChoice !== ("Scissors"|| "Paper")){console.log(`You win, Paper beats Scissors`)
}else if(aHumanChoice  === "Scissors" && aComputerCoice !== ("Scissors" || "Rock")){console.log(`You win, Scissors beats Paper`)
}else if (aHumanChoice === aComputerChoice){
    console.log("draw")
}else {console.log(`You lose`)}
}
