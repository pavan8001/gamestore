const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Gamestore = new Schema(
    {
        name : 
        {
            type : String
        },
        Age : 
        {
            type : String
        },
        phone :
        {
            type : String
        },
        email :
        {
            type : String
        },
        password :
        {
            type : String
        },
        email1 :
        {
            type : String
        },
        password1 :
        {
            type : String
        },
        check :
        {
            type : String
        }
    }
)
module.exports=mongoose.model('Gamestore',Gamestore);
