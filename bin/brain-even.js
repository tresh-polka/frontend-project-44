#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`)

console.log('Answer "yes" if the number is even, otherwise answer "no".')

let n = 0
let m = 0
while (n < 3 && m < 1) {
    let num = Math.floor(Math.random() * 1000)
    console.log(`Question: ${num}`)
    const choice = readlineSync.question('Your answer: ')

    if (num % 2 === 0) {
        if (choice === 'yes') {
            n += 1
            console.log('Correct!') 
        } else {
            console.log(`'${choice}' is wrong answer ;(. Correct answer was 'yes'.`)
            console.log(`Let's try again, ${name}!`)  
            m = 1
        }
    } else {
        if (choice === 'no') {
            n += 1
            console.log('Correct!') 
        } else {
            console.log(`'${choice}' is wrong answer ;(. Correct answer was 'no'.`)
            console.log(`Let's try again, ${name}!`)
            m = 1
        }
    }
}

if (n === 3 && m === 0) {
    console.log(`Congratulations, ${name}!`)
}
