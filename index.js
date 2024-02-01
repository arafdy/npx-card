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
                name: `Toss an ${chalk.reset("email")}?`,
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
    name: chalk.reset("Rafdy Amestira"),
    work:  chalk.reset('Business And Intergration Arch Analyst'),
    workplace: chalk.reset('Accenture'),
    github: chalk.hex('#00AB9E')("https://github.com/arafdy"),
    instagram: chalk.hex('#00AB9E')("https://www.instagram.com/a_rafdy/"),
    website: chalk.hex('#00AB9E')("https://arafdy.github.io/rafdy"),

    labelGitHub: chalk.hex('#9E9E9E').reset("🐱 GitHub   :"),
    labelWebsite: chalk.hex('#9E9E9E').reset("🌐 Website  :"),
    labelInstagram: chalk.hex('#9E9E9E').reset("📱 Instagram:"),
};

const me = boxen(
    [ 
        `${data.name}`,
        ``,
        `${chalk.hex('#696969')('>')} ${data.work} ${chalk.hex('#696969')('@')} ${data.workplace}`,
        ``,
        `${data.labelGitHub}  ${data.github}`,
        `${data.labelWebsite}  ${data.website}`,
        `${data.labelInstagram}  ${data.instagram}`,
        ``,
        `${chalk.reset(
            "Well hello peole, Rafdy's here " 
        )}`,
        `${chalk("I really love to build things in the terms of ")}`,
        `${chalk.reset("electrical and software design! ")}`,
        `${chalk.reset(
            "I'm enjoying learn MERN development and try to be good at it"
        )}`,
        `${chalk.reset(
            "Toss me an email if you want to collab!"
        )}`
    ].join("\n"),
    {
        margin: 1,
        float: 'center',
        padding: 1,
        borderStyle: "single",
        borderColor: "black"
    }
);

console.log(me);
// const tip = [
//     `Tip: ${chalk.cyanBright.reset(
//         "cmd/ctrl + click"
//     )} on the links above to open them in your broswer.`,
//     '',
// ].join("\n")

const tip = `Tip: ${chalk.cyanBright.reset(
    "cmd/ctrl + click"
)} on the links above to open them in your broswer. 🛩`
console.log(tip);


prompt(questions).then(answer => answer.action());


//  console.log(answer.action());