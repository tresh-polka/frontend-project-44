import gameStructure from '../src/index.js';

const brainGcd = () => {
  const gameDescription = 'Find the greatest common divisor of given numbers.';
  const gameConditions = () => {
    const num1 = Math.floor(Math.random() * 100);
    const num2 = Math.floor(Math.random() * 100);
    const computerChoice = `${num1} ${num2}`;
    return computerChoice;
  };

  const rightResult = (computerChoice) => {
    let result = '';
    let num1 = Number(computerChoice.split(' ')[0]);
    let num2 = Number(computerChoice.split(' ')[1]);

    while (num1 !== 0 && num2 !== 0) {
      if (num1 > num2) {
        num1 %= num2;
      } else {
        num2 %= num1;
      }
    }

    result = num1 + num2;

    return String(result);
  };

  return gameStructure(gameDescription, gameConditions, rightResult);
};

export default brainGcd;
