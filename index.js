#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user input guessing number
// 3) compare computer generated number and user input and show result 
const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);
const answers = await inquirer.prompt([
    {
        name: "userguessednumber",
        type: "number",
        message: "please guess a number between 1 to 10",
    },
]);
//if/ else statement
if (answers.userguessednumber === randomNumber) {
    console.log("Congratulations you guessed right number.");
}
else {
    console.log("Oops! You guessed wrong number.");
}
