const Express = require("express");
const App = Express();
const port = 80;
const pokemon = require('json-pokemon');
const chalk = require("chalk");
const cors = require("cors");

App.use(cors());
App.use("/",Express.static("client/build"));


App.get("/pokemon/id/:id", function(req, res){
    let result = {"error"s};

    pokemon.forEach((value)=>{
        if(value.id == req.params.id){
            result = value;
        }

    });
    if(result.error){
        console.log(chalk.red(req.path));
        res.json(result);

     }
     else{
        console.log(chalk.green(req.path));
         res.json(result);
        }
});




App.get("/pokemon/name/:name", function(req, res){
    let result = {"error"};

    pokemon.forEach((value)=>{
        if(value.name == req.params.name){
            result = value;
        }
    });

    if(result.error){
        console.log(chalk.red(req.path));
         res.json(result);
     }
     else{
        console.log(chalk.green(req.path));
         res.json(result);
        }
});



App.get("/", function(req, res){
    console.log("Request");
    res.json();
 });



App.listen(port, function(){
    console.log("Running");
   }

);
