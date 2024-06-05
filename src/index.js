import readlineSync from 'readline-sync';

const gameStructure = (gameDescription, gameConditions) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log(gameDescription);

  let n = 0;
  let m = 0;
  while (n < 3 && m < 1) {
    const [condition, result] = gameConditions();
    console.log(`Question: ${condition}`);
    const userResponse = readlineSync.question('Your answer: ');

    if (userResponse === result) {
      n += 1;
      console.log('Correct!');
    } else {
      console.log(`'${userResponse}' is wrong answer ;(. Correct answer was '${result}'.`);
      m += 1;
    }
  }

  if (n === 3 && m === 0) {
    console.log(`Congratulations, ${name}!`);
  } else {
    console.log(`Let's try again, ${name}!`);
  }
};

export default gameStructure;
