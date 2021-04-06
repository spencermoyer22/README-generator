
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
        type: 'confirm',
        name:'confirmLicense',
        message: 'Would you like to add a license to your README.md?',
        default: true
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is your project license?',
        choices: ['Apache License 2.0','GNU General Public License v3.0','MIT License','Mozilla Public License'],
        when: ({ confirmLicense }) => {
            if (confirmLicense) {
                return true;
            } else {
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
    {
        type: 'input',
        name: 'test',
        message: 'Enter test instructions for your project.',
        validate: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log('Entering the test instructions is required.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
        validate: usernameInput => {
            if (usernameInput) {
                return true;
            } else {
                console.log('You must enter your GitHub username.');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('You must enter your email.');
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        })
    })
}

// TODO: Create a function to initialize app
function init(questions) {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init(questions)
    .then(data => {
        return generateMarkdown(data);
    })
    .then(markdown => {
        return writeToFile('README.md', markdown);
    })
    .catch(err => {
        console.log(err);
    });
