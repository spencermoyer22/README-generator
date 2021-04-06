// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    let response = '';
    switch (license) {
      case 'Apache License 2.0':
        response = 'Apache%202.0';
        message = 'Apache-2.0';
        break;
      case 'GNU General Public License v3.0':
        response = 'GPLv3';
        message = 'GPLv3';
        break;
      case 'MIT License':
        response = 'MIT';
        message = 'MIT';
        break;
      case 'Mozilla Public License':
        response = 'MPL%202.0';
        message = 'MPL-2.0';
        break;
    }
    return `![License: MIT](https://img.shields.io/badge/License-${response}-blue.svg)`
  }
  
  else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license) {
    return `* [License](#license)`;
  }
  else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `## License
  This project is ${license} licensed.
    `
  }
  return '';
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseLink(data.license)}
  * [Contribution](#contribution)
  * [Tests](#tests)
  * [Questions](#questions)

  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ${renderLicenseSection(data.license)}

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.test}

  ## Questions
  - If you are interested in my work, here is a link to my [GitHub](https://github/com/${data.username}).
  - If you have any further questions, you can email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
