function getComputerChoice() {
 result = (Math.floor(Math.random() * 3 + 1))
 if (result == 1) {
    return "rock"
 } else if ( result == 2 ) {
     return "paper";
 } else {
     return "scissors";
 }
};



console.log(getComputerChoice());