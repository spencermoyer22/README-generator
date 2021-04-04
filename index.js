
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: projectTitle => {
            if (projectTitle) {
                return true;
            } else {
                console.log('Enter the title of your project.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter a description of the project.',
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Entering the description is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter the installation instructions for your project.',
        validate: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log('Entering the installation instructions is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter the usage information for your project.',
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Entering the usage information is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Enter the contribution guidelines for your project.',
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log('Entering the contribution guidelines is required.');
                return false;
            }
        }
    },
    // {
    //     type: 'list',
    //     name: 'license',
    //     message: ''
    // }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
