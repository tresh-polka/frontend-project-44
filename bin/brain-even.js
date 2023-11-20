#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no".')

let n = 0
while (n < 3) {
    const num = readlineSync.question('Question: ')
    const choice = readlineSync.question('Your answer: ')

    const number = Number(num)

    if (number % 2 === 0) {
        if (choice === 'yes') {
            n += 1
            console.log('Correct!') 
        } else {
            console.log("'no' is wrong answer ;(. Correct answer was 'yes'.")
            console.log("Let's try again, Bill!")  
        }
    } else {
        if (choice === 'no') {
            n += 1
            console.log('Correct!') 
        } else {
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'.")
            console.log("Let's try again, Bill!")  
        }
    }
}

console.log('Congratulations, Bill!')
