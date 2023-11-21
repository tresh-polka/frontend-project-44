#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`)

console.log('What is the result of the expression?')

let n = 0
while (n < 3) {
    const num = readlineSync.question('Question: ')
    const answ = readlineSync.question('Your answer: ')

    let num1 = Number(num.split(' ')[0])
    let num2 = Number(num.split(' ')[2])
    let answer = Number(answ)

    if (num.split(' ')[1] === '+') {
        let result = num1 + num2
        if (answer === result) {
            n += 1
            console.log('Correct!') 
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`)
            console.log(`Let's try again, ${name}!`)  
        }
    }

    if (num.split(' ')[1] === '-') {
        let result = num1 - num2
        if (answer === result) {
            n += 1
            console.log('Correct!') 
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`)
            console.log(`Let's try again, ${name}!`)  
        }
    }

    if (num.split(' ')[1] === '*') {
        let result = num1 * num2
        if (answer === result) {
            n += 1
            console.log('Correct!') 
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`)
            console.log(`Let's try again, ${name}!`)  
        }
    }
}

console.log(`Congratulations, ${name}!`)
