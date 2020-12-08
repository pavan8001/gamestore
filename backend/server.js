const express = require('express');
const app=express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');   
const userroutes = express.Router();

const PORT = 4000;
let Users = require('./users.model');


app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/users',{ useNewUrlParser: true,useUnifiedTopology:true}
);

const connection = mongoose.connection;
connection.once('open' , function(){
    console.log("MongoDB database connection established successfully");
})



 
  
  
  
userroutes.route('/').get((req,res)=>{
    Users.find((err,users)=>{
    if(err) console.log(err);
    else res.json(users);
  })
})

userroutes.route('/find').get((req,res)=>{
    Users.findOne({email:req.query.email,password:req.query.password},(err,user)=>{
        if(err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        else {
            if (!user) {
                res.status(404).json({error:'invalid creds.'})
                return;    
            }
            else{            
                res.json(user);
            }
        }
    })    
});

userroutes.route('/:id').get((req,res)=>{
    let id=req.params.id;
    Users.findById(id,(err ,users)=>{
            res.json(users);
    })
})


userroutes.route('/add').post((req,res)=>{
    let user = new Users(req.body);
    user.save()
        .then(user =>{
            res.status(200).json({'user':'Data loaded successfully'});
        })
        .catch(err=>{
                res.status(400).send('Failed adding data');

            })
})




userroutes.route('/update/:id').post((req,res)=>{
    Users.findById(req.params.id,(err , user)=>
    {
        if(!user)
        {
            res.status(404).send('Data is not found');

        }
        else{
            user.Age = req.body.Age;
            user.phone= req.body.phone;
            user.email=req.body.email;
            user.password = req.body.password;
            user.check=req.body.check;
            user.name=req.body.name;

            user.save().then(user=>{
                res.json("Data updated!");
            })
            .catch(err =>{
                res.status(400).send("Update not possible!");
            });
        }
    })
})
userroutes.route('/delete/:id').delete((req,res)=>{
    Users.findById(req.params.id,(err,user)=>{
        if(!user)
            res.status(404).send('No user data found');
        else{
            user.deleteOne().then(user=>{
                res.json('User deleted.')
            })
            .catch(err=>{
                res.status(400).send('User not Deleted...')
            })
        }    
})
})
app.use('/users',userroutes);
app.listen(PORT, ()=>
{
    console.log("Server is running on the port "+ PORT)
});
