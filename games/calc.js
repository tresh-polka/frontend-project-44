import gameStructure from '../src/index.js';

const brainCalc = () => {
  const gameDescription = 'What is the result of the expression?';
  const gameConditions = () => {
    const symbol = ['+', '-', '*'];
    const i = Math.floor(Math.random() * 3);
    let num1 = Math.floor(Math.random() * 100);
    let num2 = Math.floor(Math.random() * 100);

    if (symbol[i] === '-') {
      if (num2 > num1) {
        const num = num1;
        num1 = num2;
        num2 = num;
      }
    }

    return `${num1} ${symbol[i]} ${num2}`;
  };

  const rightResult = (computerChoice) => {
    const num1 = Number(computerChoice.split(' ')[0]);
    const num2 = Number(computerChoice.split(' ')[2]);
    let result = 0;

    if (computerChoice.split(' ')[1] === '+') {
      result = num1 + num2;
    } else if (computerChoice.split(' ')[1] === '-') {
      result = num1 - num2;
    } else if (computerChoice.split(' ')[1] === '*') {
      result = num1 * num2;
    }

    return String(result);
  };

  return gameStructure(gameDescription, gameConditions, rightResult);
};

export default brainCalc;
