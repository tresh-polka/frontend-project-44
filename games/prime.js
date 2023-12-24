import gameStructure from '../src/index.js';

const brainPrime = () => {
  const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const gameConditions = () => {
    const num = Math.floor(Math.random() * 100);
    return num;
  };

  const rightResult = (computerChoice) => {
    let result = '';
    let count = 0;

    for (let i = 2; i < computerChoice; i += 1) {
      if (computerChoice % i === 0) {
        count += 1;
      }
    }

    if (count > 0) {
      result = 'no';
    } else {
      result = 'yes';
    }

    return result;
  };

  return gameStructure(gameDescription, gameConditions, rightResult);
};

export default brainPrime;
