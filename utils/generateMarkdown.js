//I did refereance another classmate on the license information (JayMoses01), and for this he referenced another github fir the information: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba.
var nolicense = '';
var apache = `![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)`;
var agplv3 = `![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)`;
var mit = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`;
var boost = `![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)`;
var gnugplv3 = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`;
var gnulgplv3 = `![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)`;
var mozilla = `![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)`;
var unlicense = `![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)`;

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(input) {
  if (input.license == "GNU AGPLv3") {
    var badge = agplv3;
  } else if (input.license == "GNU GPLv3") {
    var badge = gnugplv3;
  } else if (input.license == "GNU LGPLv3") {
    var badge = gnulgplv3;
  } else if (input.license == "Mozilla Public 2.0") {
    var badge = mozilla;
  } else if (input.license == "Apache2.0") {
    var badge = apache;
  } else if (input.license == "MIT") {
    var badge = mit;
  } else if (input.license == "Boost Software 1.0") {
    var badge = boost;
  } else if (input.license == "the Unlicense") {
    var badge = unlicense;
  } else var badge = nolicense;

  return badge;
}

var nolicenseLink = '';
var apacheLink = `https://choosealicense.com/licenses/apache-2.0/`;
var agplv3Link = `https://choosealicense.com/licenses/agpl-3.0/`;
var mitLink = `https://choosealicense.com/licenses/mit/`;
var boostLink = `https://choosealicense.com/licenses/bsl-1.0/`;
var gnugplv3Link = `https://choosealicense.com/licenses/gpl-3.0/`;
var gnulgplv3Link = `https://choosealicense.com/licenses/lgpl-3.0/`;
var mozillaLink = `https://choosealicense.com/licenses/mpl-2.0/`;
var unlicenseLink = `https://choosealicense.com/licenses/unlicense/`;




// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(input) {
  if (input.license == "GNU AGPLv3") {
    var link = agplv3Link;
  } else if (input.license == "GNU GPLv3") {
    var link = gnugplv3Link;
  } else if (input.license == "GNU LGPLv3") {
    var link = gnulgplv3Link;
  } else if (input.license == "Mozilla Public 2.0") {
    var link = mozillaLink;
  } else if (input.license == "Apache2.0") {
    var link = apacheLink;
  } else if (input.license == "MIT") {
    var link = mitLink;
  } else if (input.license == "Boost Software 1.0") {
    var link = boostLink;
  } else if (input.license == "the Unlicense") {
    var link = unlicenseLink;
  } else var link = nolicenseLink;

  return link;
}

var agplv3Text = `
GNU AFFERO GENERAL PUBLIC LICENSE

Version 3, 19 November 2007

Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>

<https://www.gnu.org/licenses/>.
`;

var gnugplv3Text = `
GNU GENERAL PUBLIC LICENSE

Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>

<https://www.gnu.org/licenses/why-not-lgpl.html>.
`;

var gnulgplv3Text = `
GNU LESSER GENERAL PUBLIC LICENSE

Version 3, 29 June 2007

Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
`;

var mozillaText = `
Mozilla Public License Version 2.0
`;

var apacheText = `
Apache License

Version 2.0, January 2004

http://www.apache.org/licenses/
`;

var mitText = `
MIT License

Copyright (c) [yyyy] [fullname]

`;

var boostText = `
Boost Software License - Version 1.0 - August 17th, 2003
`;

var unlicenseText = `
This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

For more information, please refer to <https://unlicense.org>
`;

var nolicenseText = ''

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(input) {
  if (input.license == "GNU AGPLv3") {
    var licenseText = agplv3Text;
  } else if (input.license == "GNU GPLv3") {
    var licenseText = gnugplv3Text;
  } else if (input.license == "GNU LGPLv3") {
    var licenseText = gnulgplv3Text;
  } else if (input.license == "Mozilla Public 2.0") {
    var licenseText = mozillaText;
  } else if (input.license == "Apache2.0") {
    var licenseText = apacheText;
  } else if (input.license == "MIT") {
    var licenseText = mitText;
  } else if (input.license == "Boost Software 1.0") {
    var licenseText = boostText;
  } else if (input.license == "the Unlicense") {
    var licenseText = unlicenseText;
  } else var licenseText = nolicenseText;

  return licenseText;
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(input) {
  return `
  # ${input.title}

  ----
  ${renderLicenseBadge(input)}

  ----

### Description
${input.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test Instructions](#test-instructions)
- [Questions](#questions)



### Installation
${input.installation}

### Usage
${input.usage}

### License
${input.license}
${renderLicenseLink(input)}

### License Details
${renderLicenseSection(input)}
${input.year}
${input.fullname}

### Contribution
${input.contribution}

### Test-Instructions
${input.tests}

### Questions
[Github Profie](https://github.com/${input.username})
${input.email}

`;
}

module.exports = generateMarkdown;
