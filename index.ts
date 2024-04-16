#! /usr/bin/env node

import inquirer from "inquirer";

const currency: any ={
   USD:1,
   EUR:0.91,
   GBP:0.76,
   INR:74.57,
   PKR:280
};

let userAns = await inquirer.prompt(
    [
        {
            name:"from",
            message:"Select the main currency which you want to convert in another  ",
            type:"list",
            choices: ["USD","EUR","GBP","INR","PKR"]
        },
        {
            name:"to",
            message:"Select the currency in which you want to convert your ammount ",
            type:"list",
            choices: ["USD","EUR","GBP","INR","PKR"]  
        },
        {
            name: "amount",
            message:"Enter your amount",
            type:"number"
        }
    ]
)

let fromAmount = currency[userAns.from]
let toAmount = currency[userAns.to]
let amount = userAns.amount
let baseAmount = amount / fromAmount
let convertedAmount = baseAmount * toAmount
console.log(Math.floor(convertedAmount));





