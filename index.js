// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
// const path = require("path");
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
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
            message: "Enter Your Project Contribution Guidelines"
        },
        {
          // Takes user text input
            type: "input",
            name: "tests",
            message: "Enter Test Instructions"
        },
        { 
          // Takes user input via checkbox using spacebar to add choice and up and down keys to move down list
            type: "checkbox",
            message: "Licensing Options",
            name: "license",
            choices: [
                "None",
                "Apache2.0",
                "GNU Public v3.0",
                "MIT",
                "Boost Software 1.0",
                "Creative Commons Zero v1.0 Universal",
                "Eclipse Public 2.0",
                "GNU Affero General Public v3.0",
                "GNU General Public v2.0",
                "GNU Lesser General Public v2.1",
                "Mozilla Public 2.0",
                "the Unilicense"
            ]
        }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(util.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([questions]).then(function(data) {
        console.log("Generating your Markdown...")
        writeToFile("README.md", generateMarkdown({...data}));
    });
}

// Function call to initialize app
init();
