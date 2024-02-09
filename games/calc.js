import gameStructure from '../src/index.js';

const calcConditions = () => {
  const symbol = ['+', '-', '*']; // возможные математические операторы
  const i = Math.floor(Math.random() * 3); // индекс случайного оператора
  let num1 = Math.floor(Math.random() * 100); // первое число
  let num2 = Math.floor(Math.random() * 100); // второе число

  let result = 0;

  if (symbol[i] === '-') {
    if (num2 > num1) {
      const num = num1;
      num1 = num2;
      num2 = num;
    }
    result = num1 - num2;
  } else if (symbol[i] === '+') {
    result = num1 + num2;
  } else if (symbol[i] === '*') {
    result = num1 * num2;
  }

  const condition = `${num1} ${symbol[i]} ${num2}`;

  return [condition, String(result)];
};

const brainCalc = () => {
  const description = 'What is the result of the expression?';
  return gameStructure(description, calcConditions);
};

export default brainCalc;
