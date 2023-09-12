#!/usr/bin/env node
import figlet from 'figlet'; 
import chalk from 'chalk'; //Imported figlet and chalk to add some style 
import inquirer from 'inquirer'; //Inquirer allows us to make some interactive cool cli app
import {spawn} from 'child_process'; //Launching commands from our app to the terminal
//creating the questions that we need in the CLI app using inquirer
const questions = [
    {
        type: "list", //List of choices
        name: "Project",
        message: "What kind of project do you want to start?", //Message that will be displayed into the cli app
        choices: ["React Project", "Angular Project", "Vue Project"] //Choices that will be taken as value for our variable "project_type"
    },
    {
        type: "input", //The user will input a value that will be taken as value for our variable "project_name"
        message: "What is your project name?",
        name: "name"
    }
];
//Here i have used chalk combined with figlet
console.log(chalk.blueBright(
    figlet.textSync("WELCOME", {
        font: "Rectangles"
    })
))
//creating the interations that we need in the CLI app using inquirer
inquirer.prompt(questions).then(answers => {
    console.log(chalk.blue(`Creating your ${answers.Project}...`))
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
                console.log(chalk.greenBright(
                    figlet.textSync("DONE!", {
                    font: "Rectangles"
                    })
                ))
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
                console.log(chalk.greenBright(
                    figlet.textSync("DONE!", {
                    font: "Rectangles"
                    })
                ))
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
                console.log(chalk.greenBright(
                    figlet.textSync("DONE!", {
                    font: "Rectangles"
                    })
                ))
                console.log(chalk.green(`Your ${project_type} has been created successfully!`))
            } else {
                console.log(error)
            }
        })
    }
})
    
