let max = 3
function getComputerChoice(max){
  
  if( Math.floor(Math.random() * max) <= 0 ){console.log("Rock")

  }else if( Math.floor(Math.random() * max)>= 1){console.log("Paper")

  }else {console.log("Scissors")

}}
console.log(getComputerChoice())


let humanChoice = prompt("Please choose Rock, Paper, Scissors","Make a choice!")
function getHumanChoice(humanChoice){
    if(humanChoice.toLowerCase === ("Rock").toLowerCase){console.log(humanChoice)

    }else if (humanChoice.toLowerCase === ("Paper").toLowerCase){console.log("Paper")
    
    }else{console.log("Scissors")}

}