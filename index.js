#!/usr/bin/env node
//import everything that we need
const chalk = require ('chalk')
const inquirer = require('inquirer');
const { spawn } = require('child_process');
//creating the questions that we need in the CLI app using inquirer
const questions = [
    {
        type: "list",
        name: "Project",
        choices: ["React Project", "Angular Project", "Vue Project"]
    },
    {
        type: "input",
        message: "What is your project name?",
        name: "name"
    }
];
//creating the interations that we need in the CLI app using inquirer
inquirer.prompt(questions).then(answers => {
    console.log(chalk.backgroundColorNames(`Creating your ${answers.Project}...`))
    //initialize the variables that we'll use for the decisions making
    var project_type = answers.Project;
    var project_name = answers.name;
    //creating our tree of choices 
    if (project_type === "React Project"){
        //creating the project and initialize it with git init, in angular and vue it will be done without command
        const commandAngular = spawn(`npx create-react-app ${project_name} && cd ${project_name} && git init`, {shell : true, stdio: 'inherit', })
        commandAngular.on('close', (code) => {
            //code 0 means that everything is going all right
            if (code === 0) {
                console.log(chalk.green(`Your ${project_type} has been created successfully!`))
            } else {
                console.log(error)
            }
        })
    }
    if (project_type === "Angular Project"){
        const commandAngular = spawn(`ng new ${project_name}`, {shell : true, stdio: 'inherit', })
        commandAngular.on('close', (code) => {
            if (code === 0) {
                console.log(chalk.green(`Your ${project_type} has been created successfully!`))
            } else {
                console.log(error)
            }
        })
    }
    if (project_type === "Vue Project"){
        const commandAngular = spawn(`vue create -d ${project_name}`, {shell : true, stdio: 'inherit', })
        commandAngular.on('close', (code) => {
            if (code === 0) {
                console.log(chalk.green(`Your ${project_type} has been created successfully!`))
            } else {
                console.log(error)
            }
        })
    }
})