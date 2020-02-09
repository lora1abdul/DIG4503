const Express = require("express");
const App = Express();
const port = 80;
const chalk = require ('chalk');
const Person = require("./person.js");
const pokemons = require('json-pokemon');
const faker = require('faker');

let people = [];
for(let i = 0; i < 99; i++)
{
    let name = faker.name.findName();
    let color = faker.commerce.color();
    people.push(new Person(name, color));
}

App.get("/id/id", (req,res)=>{

App.get("pokemon/:name", (req, res) => {
    people.forEach((value)=> {
        if(value.color == req.params.name) {
            result =value;
        }
    });

    if(result.error){
    		console.log(chalk.black.path);
});

App.get("/people/color/:color", (req, res) => {
    people.forEach((value)=> {
        if(value.color == req.params.color) {
            result = value;
        }
    });

    if(result.error){

		console.log(chalk.black.path);
    }

	else{

		console.log(chalk.green.path);
    res.send ("result!");
    }
}

});
