import gameStructure from '../src/index.js';

const evenConditions = () => {
  const condition = Math.floor(Math.random() * 1000); // число для анализа

  let result = '';

  const getResult = (number) => {
    if (number % 2 === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
    return result;
  };

  result = getResult(condition);

  return [condition, result];
};

const brainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  return gameStructure(description, evenConditions);
};

export default brainEven;
