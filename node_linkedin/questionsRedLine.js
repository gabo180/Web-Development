const readLine = require('readline');

const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

const questions = [
    "What is your name? ",
    "Where do you live? ",
    "What are you going to do with Node.js? "
]

const collectAnswers = (questions, done) => {
    const answers = [];
    const [firstQuestion] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if (answers.length < questions.length) {
            // console.log(questions[answers.length])
            rl.question(questions[answers.lenght], questionAnswered);
        } else {
            done(answers)
        }
    };

    rl.question(firstQuestion, questionAnswered);
}

collectAnswers(questions, answers => {
    console.log("Thank you for your answers. ");
    console.log(answers);
    process.exit();
})