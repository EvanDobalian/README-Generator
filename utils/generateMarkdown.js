function generateMarkdown(answers) {
  console.log(answers);
  return `
## ${answers.answers.title}

## Description

${answers.answers.description}

## Table of Contents 

* Installation
* Usage
* License
* Contributing
* Tests
* Questions

## Installation

To install dependencies enter: '${answers.answers.installation}'

## Usage

${answers.answers.usage}

## License

${answers.answers.license}
  
## Contributing

${answers.answers.contributing}

## Tests

To run tests enter: '${answers.answers.test}'

## Questions

contact ${answers.answers.userName} at ${answers.answers.email}.

`;
}

module.exports = generateMarkdown;
