#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`)

console.log('Find the greatest common divisor of given numbers.')

let n = 0
while (n < 3) {
    const number = readlineSync.question('Question: ')
    const answer = readlineSync.question('Your answer: ')

    let num = Number(number)

    let result = ''
    let count = 0

    for (let i = 2; i < num; i += 1) {
        if (num % i === 0) {
            count += 1
        }
    }

    if (count > 0) {
        result = 'no'
    } else {
        result = 'yes'
    }

    if (result === answer) {
        n += 1
        console.log('Correct!')
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`)
        console.log(`Let's try again, ${name}!`)  
    }
    
}

console.log(`Congratulations, ${name}!`)
