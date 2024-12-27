const minNumb = 1;
const maxNumb = 100;
const anwser = Math.floor(Math.random() * (maxNumb - minNumb + 1)) + minNumb;

let attempt = 0;
let guess;
let guessed = false;

while(guessed == false){
    attempt ++;

    guess = window.prompt(`Guess a number between ${minNumb} - ${maxNumb}`);

    guess = Number(guess);
    
    if(isNaN(guess) || guess < minNumb || guess > maxNumb){
        window.alert("Please enter a valid number");
    }
    else if(guess > anwser){
        window.alert("The guessed number is too high!");
    }
    else if(guess < anwser){
        window.alert("The guessed number is too low");
    }
    else{
        window.alert(`You got it, and it just took ${attempt} attempts`);
        guessed = true
    }
}