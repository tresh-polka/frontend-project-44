import gameStructure from '../src/index.js';

const brainEven = () => {
  const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';
  const gameConditions = () => {
    const computerChoice = Math.floor(Math.random() * 1000);
    return computerChoice;
  };

  const rightResult = (computerChoice) => {
    let result = '';
    if (computerChoice % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return result;
  };

  return gameStructure(gameDescription, gameConditions, rightResult);
};

export default brainEven;
