#! /usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Daily Quiz\n");
console.log("Each question is of 10 marks\n");
let marks = 0;
let userInput = await inquirer.prompt([
    {
        name: "Question1",
        type: "list",
        message: "What is TypeScript?\n",
        choices: ["A superset of JavaScript",
            "A framework for building web applications",
            "A version control system",
            "A programming language for data analysis"]
    },
    {
        name: "Question2",
        type: "list",
        message: "What is the correct way to define a variable of type string in TypeScript?\n",
        choices: [`let myVar: string = 'Hello'`,
            `let myVar: 'Hello' = string`,
            `let myVar: 'Hello' = "string"`,
            `let myVar = string: 'Hello'`]
    },
    {
        name: "Question3",
        type: "list",
        message: "What is the purpose of the interface keyword in TypeScript?\n",
        choices: ["To declare a new class",
            "To define the structure of objects",
            "To import external libraries",
            "To create loops in code"]
    },
    {
        name: "Question4",
        type: "list",
        message: "Which keyword is used to declare a constant variable in TypeScript?\n",
        choices: ["const", "let", "var", "readonly"]
    },
    {
        name: "Question5",
        type: "list",
        message: "Which of the following TypeScript data types is used to represent a collection of similar type elements\n",
        choices: ["array", "string", "number", "boolean"]
    },
]);
const { Question1, Question2, Question3, Question4, Question5 } = userInput;
let correctAns = ["A superset of JavaScript", "let myVar: string = 'Hello'", "To define the structure of objects", "const", "array"];
if (Question1 === "A superset of JavaScript")
    marks += 10;
if (Question2 === `let myVar: string = 'Hello'`)
    marks += 10;
if (Question3 === `To define the structure of objects`)
    marks += 10;
if (Question4 === "const")
    marks += 10;
if (Question5 === "array")
    marks += 10;
let myAns = () => {
    console.log("Correct Answers", correctAns);
    if (marks >= 50) {
        console.log(`congratulaiton you got full ${marks} marks`);
    }
    else if (marks > 0) {
        console.log(`you got ${marks} Marks`);
    }
    else {
        `unfortunately your marks are ${marks}`;
    }
};
myAns();
