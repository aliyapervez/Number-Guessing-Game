#! /usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
// 1) computer will generate a random number
// 2) user input guessing number
// 3) compare computer generated number and user input and show result 
var randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);
console.log("Welcome To Number Guessing Game");
var answers = await inquirer_1.default.prompt([
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
