// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [];

const questionPrompts = () => {
  return inquirer.prompt([
    {
      // Takes user text input
      type: "input",
      name: "username",
      message: "Enter Your Github Username"
    },
    {
      // Takes user text input
      type: "input",
      name: "email",
      message: "Enter Your Email Address"
    },
    {
      // Takes user text input
      type: "input",
      name: "title",
      message: "What's Your Projects Name?"
    },
    {
      // Takes user text input
      type: "input",
      name: "description",
      message: "Enter A Descrition For Your Project"
    },
    {
      // Takes user text input
      type: "input",
      name: "installation",
      message: "Enter Your Projects Installation Instructions"
    },
    {
      // Takes user text input
      type: "input",
      name: "usage",
      message: "Enter Usage Info"
    },
    {
      // Takes user text input
      type: "input",
      name: "contribution",
      message: "Enter Who Contributed On This Project"
    },
    {
      // Takes user text input
      type: "input",
      name: "tests",
      message: "Enter Test Instructions"
    },
    {
      // Takes user input via checkbox using spacebar to add choice and up and down keys to move down list
      type: "list",
      message: "Licenses",
      name: "license",
      choices: [
        "None",
        "Apache2.0",
        "GNU AGPLv3",
        "MIT",
        "Boost Software 1.0",
        "GNU LGPLv3",
        "GNU GPLv3",
        "Mozilla Public 2.0",
        "the Unilicense"
      ]
    }
  ]);
};

// TODO: Create a function to write README file
// Not sure how to use this, we did it a different way in class so I went with something more along those lines.
// function writeToFile(fileName, input) {}

// TODO: Create a function to initialize app
function init() {


  questionPrompts().then((inputs) => {
    console.log(inputs.title)
    fs.writeFileSync(`${inputs.title}-README.md`, generateMarkdown(inputs))
  })
    .then(() => console.log('Successfully generated a README.md'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
