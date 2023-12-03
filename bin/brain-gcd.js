#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`)

console.log('Find the greatest common divisor of given numbers.')

let n = 0
while (n < 3) {
    let num1 = Math.floor(Math.random() * 100)
    let num2 = Math.floor(Math.random() * 100)

    console.log(`Question: ${num1} ${num2}`)
    const answ = readlineSync.question('Your answer: ')

    let answer = Number(answ)

    let minNum = 0
    let maxNum = 0

    let result = 0

    while (num1 != 0 & num2 != 0) {
        if (num1 > num2) {
            num1 = num1 % num2
        } else {
            num2 = num2 % num1
        }
    }
    
    result = num1 + num2

    if (result === answer) {
        n += 1
        console.log('Correct!')
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`)
        console.log(`Let's try again, ${name}!`)  
    }
    
}

console.log(`Congratulations, ${name}!`)
