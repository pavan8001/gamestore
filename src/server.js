const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');   
const gamestoreRoutes = express.Router();

const PORT = 4000;


let Gamestore = require('./gamestore.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/gamestore',

   { useNewUrlParser: true}
);

const connection = mongoose.connection;
connection.once('open' , function()
{
    console.log("MongoDB database connection established successfully");
})

gamestoreRoutes.route('/').get(function(req,res)
{
    Gamestore.find(function(err,gamestore)
    {
    if(err)
    {
        console.log(err);
    }
    else
    {
        res.json(gamestore);
    }
  });
});


gamestoreRoutes.route('/:id').get(function(req,res)
{
    let id=req.params.id;
    Gamestore.findById(id,function(err , gamestore)
    {
            res.json(gamestore);
    });
});
gamestoreRoutes.route('/add').post(function(req,res)
{
    let gamestore = new Gamestore(req.body);
    gamestore.save()
        .then(gamestore =>{
            res.status(200).json({'gamestore':'Data loaded successfully'});
        })
        .catch(err=>{
                res.status(400).send('Failed adding data');

            });
});
gamestoreRoutes.route('/update/:id').post(function(req,res)
{
    Gamestore.findById(req.params.id,function(err , gamestore)
    {
        if(!gamestore)
        {
            res.status(404).send('Data is not found');

        }
        else
        
            gamestore.name=req.body.name;
            gamestore.Age = req.body.Age;
            gamestore.phone= req.body.phone;
            gamestore.email=req.body.email;
            gamestore.password = req.body.password;
            gamestore.email1=req.body.email1;
            gamestore.password1=req.body.password1;
            gamestore.check=req.body.check;
            gamestore.save().then(gamestore=>{
                    res.json("Data updated!");
                })
                
                .catch(err =>{
                    res.status(400).send("Update not possible!");
                });
            });
    });

app.use('/gamestore',gamestoreRoutes);
app.listen(PORT, function()
{
    console.log("Server is running on the port "+ PORT)
});

 