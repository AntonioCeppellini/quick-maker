#!/usr/bin/env node
const inquirer = require('inquirer');
const { exec } = require('child_process');
const { spawn } = require('child_process')

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
inquirer.prompt(questions).then(answers => {
    console.log(`Creating your ${answers.Project}...`)
    var project_type = answers.Project;
    var project_name = answers.name;
    if (project_type === "React Project"){
        const commandAngular = spawn(`npx create-react-app ${project_name} && cd ${project_name} && git init`, {shell : true, stdio: 'inherit', })
        commandAngular.on('close', (code) => {
            if (code === 0) {
                console.log(`Your ${project_type} has been created successfully!`)
            } else {
                console.log(error)
            }
        })
    }
    if (project_type === "Angular Project"){
        const commandAngular = spawn(`ng new ${project_name}`, {shell : true, stdio: 'inherit', })
        commandAngular.on('close', (code) => {
            if (code === 0) {
                console.log(`Your ${project_type} has been created successfully!`)
            } else {
                console.log(error)
            }
        })
    }
    if (project_type === "Vue Project"){
        const commandAngular = spawn(`vue create -d ${project_name}`, {shell : true, stdio: 'inherit', })
        commandAngular.on('close', (code) => {
            if (code === 0) {
                console.log(`Your ${project_type} has been created successfully!`)
            } else {
                console.log(error)
            }
        })
    }
})