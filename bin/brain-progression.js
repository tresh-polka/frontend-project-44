#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`)

console.log('Find the greatest common divisor of given numbers.')

let n = 0
while (n < 3) {
    const progression = readlineSync.question('Question: ')
    const answ = readlineSync.question('Your answer: ')

    let progr = progression.split(' ')
    let answer = Number(answ)

    let numb = 0
    let b = 0
    let result = 0

    for (let i = 0; i <= progr.length - 1; i += 1) {
        if (progr[i] === '..') {
            numb = i
        }
    }

    if (numb === 0) {
        b = Number(progr[2]) - Number(progr[1])
        result = Number(progr[1]) - b
    } else if (numb === progr.length - 1) {
        b = Number(progr[progr.length - 2]) - Number(progr[progr.length - 3])
        result = Number(progr[progr.length - 2]) + b
    } else {
        b = (Number(progr[numb + 1]) - Number(progr[numb - 1])) / 2
        result = Number(progr[numb - 1]) + b
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
