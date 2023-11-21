import readlineSync from 'readline-sync';

const sayHello = () => {
    console.log('Welcome to the Brain Games!')
    const name = readlineSync.question('May I have your name? ');
    return`Hello, ${name}!`
}

export {sayHello}