
let rock = "rock", paper = "paper", scissors = "scissors";

function result (user,pc) {
    switch(true) {
        case (user == pc):
            console.log("It's a draw");
            break;
        case (user == rock && pc == scissors):
            console.log("User is the win");
            break;
        case (user == paper && pc == rock):
            console.log("User is the win");
            break;
            
        case (user == scissors && pc == paper):
            console.log("User is the win");
            break;
        default:
            console.log("Pc is the win");
    }
}

result("rock","scissors");

let edad = prompt ("Digite su edad: ");

if (edad > 18) {
    console.log("The young man can now drive");
} else {
    console.log("The young man can't drive, is a minor")
}
