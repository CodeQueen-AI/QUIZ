import inquirer from "inquirer";

(async () => {
    const quiz: {
        question1: string;
        question2: string;
        question3: string;
        question4: string;
        question5: string;
    } = await inquirer.prompt([
        {
            name: 'question1',
            type: 'list',
            message: 'Q1: What is the correct way to check if two variables are not equal in TypeScript?',
            choices: ["a == b", "a === b", "a = b", "a !== b"]
        },
        {
            name: 'question2',
            type: 'list',
            message: 'Q2: Which of the following characters is commonly used to define a variable in TypeScript?',
            choices: ["$", "@", "#", "&"]
        },
        {
            name: 'question3',
            type: 'list',
            message: 'Q3: Which operator is commonly used for string concatenation in TypeScript?',
            choices: ["+", "-", "*", "/"]
        },
        {
            name: 'question4',
            type: 'list',
            message: 'Q4: In TypeScript, which symbol is commonly used to terminate a statement?',
            choices: [".", ":", ";", ","]
        },
        {
            name: 'question5',
            type: 'list',
            message: 'Q5: Which method of Inquirer.js is used to start the prompt interface and receive user input?',
            choices: ["start()", "prompt()", "init()", "run()"]
        }
    ]);

    let score: number = 0;

    switch (quiz.question1) {
        case "a !== b":
            console.log("1. Correct!");
            ++score;
            break;
        default:
            console.log("1. Incorrect!");
    }

    switch (quiz.question2) {
        case "$":
            console.log("2. Correct!");
            ++score;
            break;
        default:
            console.log("2. Incorrect!");
    }

    switch (quiz.question3) {
        case "+":
            console.log("3. Correct!");
            ++score;
            break;
        default:
            console.log("3. Incorrect!");
    }

    switch (quiz.question4) {
        case ";":
            console.log("4. Correct!");
            ++score;
            break;
        default:
            console.log("4. Incorrect!");
    }

    switch (quiz.question5) {
        case "prompt()":
            console.log("5. Correct!");
            ++score;
            break;
        default:
            console.log("5. Incorrect!");
    }

    console.log(`Score: ${score}`);
})();
