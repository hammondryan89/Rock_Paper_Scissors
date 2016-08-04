var userChoice1 = prompt("Rock, Paper, Siccors! Shoot: ");
var computerChoice = Math.random();
if (computerChoice <= 0.33) {
    computerChoice = "Rock";
} else if (0.34 >= computerChoice <= 0.66) {
    computerChoice = "Paper";
} else {
    computerChoice = "Scissors";
}
choice1 = userChoice1;
choice2 = computerChoice;

function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return ("You tied!!");
    }
    if (choice1 === "Rock") {
        if (choice2 === "Scissors") {
            return ('Rock Wins');
        } else{
            return('Paper wins');
        }
    }
    if (choice1 === "Paper") {
        if (choice2 === "Rock") {
            return ('Paper Wins');
        } else {
            return ('Scissors wins');
        }
    }
    if (choice1 === "Scissors") {
        if (choice2 === "Paper") {
            return ('Scissors Wins');
        } else {
            return ('Rock wins');
        }
    }
}

console.log(compare(choice1, choice2));