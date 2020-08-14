const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the projects title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What is the command to install the required files?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use the project?'
    },
    {
        type: 'input',
        name: 'license',
        message: 'What license is your project using?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What is some information about contributing?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What is the command to test the files?'
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your Github username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(`${process.cwd()}/${fileName}`, data, function(err) {
        if(err) {
            console.log(err);
        }
        else console.log('File was saved!')
    });
}

function init() {
    inquirer.prompt(questions).then(function(answers) {
        console.log(answers);
        writeToFile('README.md', generateMarkdown({answers}));
    });
}

init();
