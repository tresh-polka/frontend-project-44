import gameStructure from '../src/index.js';

const gcdConditions = () => {
  let num1 = Math.floor(Math.random() * 100); // первое число для сравнения
  let num2 = Math.floor(Math.random() * 100); // второе число для сравнения
  const condition = `${num1} ${num2}`;

  let result = '';

  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 %= num2;
    } else {
      num2 %= num1;
    }
  }

  result = String(num1 + num2);

  return [condition, result];
};

const brainGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  return gameStructure(description, gcdConditions);
};

export default brainGcd;
