import readlineSync from 'readline-sync';

const sayHello = () => {
    const name = readlineSync.question('May I have your name? ');
    return `Hello, ${name}!`
}

export {sayHello}