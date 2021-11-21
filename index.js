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
                    console.log("Good bye, have a nice day!\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.bold.green("                    Rafdy Amestira"),
    handle: chalk.white("@harshhhdev"),
    fact: chalk.hex('#B10000')('I love Open-Source!'),
    github: chalk.hex('#787878')("https://github.com/arafdy"),
    instagram: chalk.hex('#AB009C')("https://www.instagram.com/a_rafdy/"),
    website: chalk.hex('#00AB9E')("https://arafdy.github.io"),
    npx: chalk.hex('#A1AB00')("npx harsh"),

    labelFact: chalk.hex('#FF6262').bold("          Fun Fact:"),
    labelGitHub: chalk.hex('#9E9E9E').bold("         GitHub:"),
    labelWebsite: chalk.hex('#59FFC8').bold("        Website:"),
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
const tip = [
    `Tip: ${chalk.cyanBright.bold(
        "cmd/ctrl + click"
    )} on the links above to open them in your broswer.`,
    '',
].join("\n");
console.log(tip);


prompt(questions).then(answer => answer.action());