import gameStructure from '../src/index.js';

const getEquationAnswer = (sign, num1, num2, i) => {
  let result = 0;
  if (sign[i] === '-') {
    result = num1 - num2;
  } else if (sign[i] === '+') {
    result = num1 + num2;
  } else if (sign[i] === '*') {
    result = num1 * num2;
  }
  return result;
};

const calcConditions = () => {
  const symbol = ['+', '-', '*']; // возможные математические операторы
  const i = Math.floor(Math.random() * 3); // индекс случайного оператора
  const num1 = Math.floor(Math.random() * 100); // первое число
  const num2 = Math.floor(Math.random() * 100); // второе число

  let result = 0;

  result = getEquationAnswer(symbol, num1, num2, i);

  const condition = `${num1} ${symbol[i]} ${num2}`;

  return [condition, String(result)];
};

const brainCalc = () => {
  const description = 'What is the result of the expression?';
  return gameStructure(description, calcConditions);
};

export default brainCalc;
