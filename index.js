#!/usr/bin/env node

'use strict'

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                name: `Toss an ${chalk.bold("email")}?`,
                value: () => {
                    open("mailto:rafdyamestira@gmail.com");
                    console.log("\nLooking forward to hearing your message and replying to you!\n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("🚀Good bye, have a nice day!\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                    Rafdy Amestira"),
    fact: chalk.hex('#B10000')('I love Open-Source! 🚀'),
    github: chalk.hex('#00AB9E')("https://github.com/arafdy"),
    instagram: chalk.hex('#00AB9E')("https://www.instagram.com/a_rafdy/"),
    website: chalk.hex('#00AB9E')("https://arafdy.github.io"),
    npx: chalk.hex('#A1AB00')("npx rafdy"),

    labelFact: chalk.hex('#FF6262').bold("          Fun Fact:"),
    labelGitHub: chalk.hex('#9E9E9E').bold("         GitHub:"),
    labelWebsite: chalk.hex('#9E9E9E').bold("        Website:"),
    labelInstagram: chalk.hex('#9E9E9E').bold("      Instagram:"),
    labelCard: chalk.hex('#FFF976').bold("                  Card:")
};

const me = boxen(
    [ 
        `${data.name}`,
        ``,
        `${data.labelFact}  ${data.fact}`,
        ``,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelWebsite}  ${data.website}`,
        `${data.labelInstagram}  ${data.instagram}`,
        ``,
        `${data.labelCard}  ${data.npx}`,
        ``,
        `${chalk.bold(
            "Well hello peole, Rafdy's here " 
        )}`,
        `${chalk.bold("I really love to build things in the terms of ")}`,
        `${chalk.bold("electrical and software design! ")}`,
        `${chalk.bold(
            "I'm enjoying learn MERN development and try to be good at it"
        )}`,
        `${chalk.bold(
            "Toss me an email if you want to collab!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "blue"
    }
);

console.log(me);
// const tip = [
//     `Tip: ${chalk.cyanBright.bold(
//         "cmd/ctrl + click"
//     )} on the links above to open them in your broswer.`,
//     '',
// ].join("\n")

const tip = `Tip: ${chalk.cyanBright.bold(
    "cmd/ctrl + click"
)} on the links above to open them in your broswer. 🛩`
console.log(tip);


prompt(questions).then(answer => answer.action());