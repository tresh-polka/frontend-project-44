import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no".')

const n = 0
while (n <= 3) {
    const number = readlineSync.question('Question: ')
    const choice = readlineSync.question('Your answer: ')

    if (number % 2 === 0) {
        if (choice === 'yes') {
            n += 1
            return 'Correct!'
        } else {
            console.log("'yes' is wrong answer ;(. Correct answer was 'no'.")
            return  "Let's try again, Bill!"
        }
    }
}

console.log('Congratulations, Bill!')
