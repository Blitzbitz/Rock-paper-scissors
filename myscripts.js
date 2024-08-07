
function getComputerChoice(max){
  
  if( Math.floor(Math.random() * max) == 0 ){console.log("Rock")

  }else if( Math.floor(Math.random() * max)>= 1){console.log("Paper")

  }else if( Math.floor(Math.random() * max) >= 2){console.log("Scissors")
return;
}}
getComputerChoice(3);



function getHumanChoice(){
    let humanChoice = prompt("Please choose Rock, Paper, Scissors","Make a choice!");
    if(humanChoice.toLowerCase() === ("rock")){console.log("Rock")

    }else if (humanChoice.toLowerCase() === ("paper")){console.log("Paper")
    
    }else if (humanChoice.toLowerCase() === ("scissors")){console.log("Scissors")

    }else{getHumanChoice()}

}
getHumanChoice();