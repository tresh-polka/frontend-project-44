#!/usr/bin/env node

import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

let n = 0;
let m = 0;
while (n < 3 && m < 1) {
  const num = Math.floor(Math.random() * 100);

  console.log(`Question: ${num}`);
  const answer = readlineSync.question('Your answer: ');

  let result = '';
  let count = 0;

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      count += 1;
    }
  }

  if (count > 0) {
    result = 'no';
  } else {
    result = 'yes';
  }

  if (result === answer) {
    n += 1;
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
    console.log(`Let's try again, ${name}!`);
    m = 1;
  }
}

if (n === 3 && m === 0) {
  console.log(`Congratulations, ${name}!`);
}
