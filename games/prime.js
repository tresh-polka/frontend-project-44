import gameStructure from '../src/index.js';

const primeConditions = () => {
  const num = Math.floor(Math.random() * 100); // случайное число для исследования
  let count = 0;
  let result = '';

  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      count += 1;
    }
  }

  if (count > 0) {
    result = 'no';
  } else {
    result = 'yes';
  }

  return [num, result];
};

const brainPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return gameStructure(description, primeConditions);
};

export default brainPrime;
