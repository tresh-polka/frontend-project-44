#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!')
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`)

console.log('Find the greatest common divisor of given numbers.')

let n = 0
let m = 0
while (n < 3 && m < 1) {
    let length = Math.floor(Math.random() * 10 + 5)
    let progression = []
    let element = Math.floor(Math.random() * 100)
    let b = Math.floor(Math.random() * 100)
    let replaceableElement = Math.floor(Math.random() * length)

    for (let i = 0; i < length; i += 1) {
        progression.push(element + b)
        element += b
    }

    progression[replaceableElement] = '..'


    console.log(`Question: ${progression.join(' ')}`)
    const answ = readlineSync.question('Your answer: ')

    let answer = Number(answ)
    let result = 0

    if (replaceableElement === 0) {
        result = progression[1] - b
    } else if (replaceableElement === length - 1) {
        result = progression[length - 2] + b
    } else {
        result = progression[replaceableElement - 1] + b
    }

    if (result === answer) {
        n += 1
        console.log('Correct!')
    } else {
        console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`)
        console.log(`Let's try again, ${name}!`)  
        m = 1
    }
    
}

if (n === 3 && m === 0) {
    console.log(`Congratulations, ${name}!`)
}