import gameStructure from '../src/index.js';

const brainProgression = () => {
  const gameDescription = 'What number is missing in the progression?';
  const gameConditions = () => {
    const length = Math.floor(Math.random() * 10 + 5);
    const progression = [];
    let element = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    const replaceableElement = Math.floor(Math.random() * length);

    for (let i = 0; i < length; i += 1) {
      progression.push(element + b);
      element += b;
    }

    progression[replaceableElement] = '..';

    return `${progression.join(' ')}`;
  };

  const rightResult = (computerChoice) => {
    const progr = computerChoice.split(' ');

    let numb = 0;
    let b = 0;
    let result = 0;

    for (let i = 0; i <= progr.length - 1; i += 1) {
      if (progr[i] === '..') {
        numb = i;
      }
    }

    if (numb === 0) {
      b = Number(progr[2]) - Number(progr[1]);
      result = Number(progr[1]) - b;
    } else if (numb === progr.length - 1) {
      b = Number(progr[progr.length - 2]) - Number(progr[progr.length - 3]);
      result = Number(progr[progr.length - 2]) + b;
    } else {
      b = (Number(progr[numb + 1]) - Number(progr[numb - 1])) / 2;
      result = Number(progr[numb - 1]) + b;
    }

    return String(result);
  };

  return gameStructure(gameDescription, gameConditions, rightResult);
};

export default brainProgression;
