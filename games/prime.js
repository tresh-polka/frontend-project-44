import gameStructure from '../src/index.js';

const primeConditions = () => {
  const num = Math.floor(Math.random() * 100); // случайное число для исследования
  let count = 0;
  let result = '';

  const getDivisor = (x) => {
    for (let i = 2; i < x; i += 1) {
      if (x % i === 0) {
        count += 1;
      }
    }
    return count;
  };

  count = getDivisor(num);

  const getResult = () => {
    if (count > 0) {
      return 'no';
    }
    return 'yes';
  };

  result = getResult(count);

  return [num, result];
};

const brainPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return gameStructure(description, primeConditions);
};

export default brainPrime;
