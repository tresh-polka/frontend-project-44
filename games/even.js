import gameStructure from '../src/index.js';

const isEven = (number) => number % 2 === 0;

const evenConditions = () => {
  const num = Math.floor(Math.random() * 1000); // число для анализа

  let result = '';

  if (isEven(num)) {
    result = 'yes';
  } else { result = 'no'; }

  return [num, result];
};

const brainEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  return gameStructure(description, evenConditions);
};

export default brainEven;
