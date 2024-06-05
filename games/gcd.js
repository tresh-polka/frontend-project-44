import gameStructure from '../src/index.js';

const getGcd = (x, y) => {
  let number1 = x;
  let number2 = y;
  while (number1 !== 0 && number2 !== 0) {
    if (number1 > number2) {
      number1 %= number2;
    } else {
      number2 %= number1;
    }
  }
  return [number1, number2];
};

const gcdConditions = () => {
  let num1 = Math.floor(Math.random() * 100); // первое число для сравнения
  let num2 = Math.floor(Math.random() * 100); // второе число для сравнения
  const condition = `${num1} ${num2}`;

  [num1, num2] = getGcd(num1, num2);

  const result = String(num1 + num2);

  return [condition, result];
};

const brainGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  return gameStructure(description, gcdConditions);
};

export default brainGcd;
