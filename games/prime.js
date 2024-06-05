import gameStructure from '../src/index.js';

const getCount = (number) => {
  let x = 0;
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      x += 1;
    }
  }
  return x;
};

const isPrime = (x) => {
  if (x > 0) {
    return 'no';
  }
  return 'yes';
};

const primeConditions = () => {
  const num = Math.floor(Math.random() * 100 + 1); // случайное число для исследования
  let count = 0;
  let result = '';

  count = getCount(num);

  result = isPrime(count);

  return [num, result];
};

const brainPrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return gameStructure(description, primeConditions);
};

export default brainPrime;
