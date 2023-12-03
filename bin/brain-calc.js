#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`)

console.log('What is the result of the expression?')

let n = 0
while (n < 3) {
    let symbol = ['+', '-', '*']
    let i = Math.floor(Math.random() * 3)
    let num1 = Math.floor(Math.random() * 100)
    let num2 = Math.floor(Math.random() * 100)

    if (symbol[i] === '-') {
        if (num2 > num1) {
            let num = num1
            num1 = num2
            num2 = num
        }
    }

    console.log(`Question: ${num1} ${symbol[i]} ${num2}`)
    const answ = readlineSync.question('Your answer: ')

    let answer = Number(answ)

    if (symbol[i] === '+') {
        let result = num1 + num2
        if (answer === result) {
            n += 1
            console.log('Correct!') 
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`)
            console.log(`Let's try again, ${name}!`)  
        }
    }

    if (symbol[i] === '-') {
        let result = num1 - num2
        if (answer === result) {
            n += 1
            console.log('Correct!') 
        } else {
            console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`)
            console.log(`Let's try again, ${name}!`)  
        }
    }

    if (symbol[i] === '*') {
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
