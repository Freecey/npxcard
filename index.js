#!/usr/bin/env node
const chalk = require("chalk");
const boxen = require("boxen");
const figlet = require('figlet');

let nameASCI;

figlet('Cedric AUDRIT', function(err, nameASCI) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }


nameASCI = chalk.red(nameASCI);
// Text + chalk definitions
const data = {
    // name: chalk.white.bold(nameASCI),
    work: chalk.white("                     Junior WebDev / SysAdmin"),
         npm: chalk.cyan("                   https://npmjs.com/") + chalk.green("~freecey"),
      github: chalk.cyan("                https://github.com/") + chalk.green("freecey"),
    linkedin: chalk.cyan("   https://linkedin.com/in/") + chalk.green("cedric-audrit"),
         web: chalk.cyan("                        https://www.audrit.be"),
         npx: chalk.cyan("npx") + " " + chalk.cyan("freecey"),
    labelNpm: chalk.white.bold(     "        npm:"),
    labelGitHub: chalk.white.bold(  "        GitHub:"),
    labelLinkedIn: chalk.white.bold("        LinkedIn:"),
    labelWeb: chalk.white.bold(     "        Web:"),
    labelCard: chalk.white.bold(    "                         Card:"),
};

const NEWLINE = "\n";
const EMPTYLINE = "";


console.log(
    chalk.blue(
        boxen(
            [
                `${nameASCI}`,
                //`${data.name}`,
                EMPTYLINE,
                `${data.work}`,
                EMPTYLINE,
                `${data.labelNpm} ${data.npm}`,
                `${data.labelGitHub} ${data.github}`,
                `${data.labelLinkedIn} ${data.linkedin}`,
                `${data.labelWeb} ${data.web}`,
                EMPTYLINE,
                `${data.labelCard} ${data.npx}`,
            ].join(NEWLINE),
            {
                padding: 1,
                margin: 1,
                borderStyle: 'double',
            },
        ),
    ),
);


});