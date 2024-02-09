import gameStructure from '../src/index.js';

function getRandomNumber(min = 0, max = 100) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getProgression = () => {
  const progression = [];
  const length = getRandomNumber(5, 10); // длина массива
  let element = getRandomNumber(); // первый элемент прогрессии
  const b = getRandomNumber(); // шаг прогрессии

  for (let i = 0; i < length; i += 1) {
    progression.push(element + b);
    element += b;
  }

  const replaceableElementID = getRandomNumber(0, length - 1); // ID пропущенного элемента
  const replaceableElement = progression[replaceableElementID]; // пропущенный элемент
  progression[replaceableElementID] = '..';

  return [progression, replaceableElement];
};

const progressionConditions = () => {
  const [progression, replaceableElement] = getProgression();
  const condition = progression.join(' '); // условие, которое выводим для пользователя
  const result = String(replaceableElement); // правильный результат

  return [condition, result];
};

const brainProgression = () => {
  const description = 'What number is missing in the progression?';
  return gameStructure(description, progressionConditions);
};

export default brainProgression;
