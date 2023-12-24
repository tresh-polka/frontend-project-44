import readlineSync from 'readline-sync';

const gameStructure = (gameDescription, gameConditions, rightResult) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(gameDescription);

  let n = 0;
  let m = 0;
  while (n < 3 && m < 1) {
    const computerChoice = gameConditions();
    console.log(`Question: ${computerChoice}`);
    const choice = readlineSync.question('Your answer: ');

    if (choice === rightResult(computerChoice)) {
      n += 1;
      console.log('Correct!');
    } else {
      console.log(`'${choice}' is wrong answer ;(. Correct answer was ${rightResult(computerChoice)}.`);
      m += 1;
    }
  }

  if (n === 3 && m === 0) {
    return `Congratulations, ${name}!`;
  }
  return `Let's try again, ${name}!`;
};

export default gameStructure;
