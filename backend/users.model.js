const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Users = new Schema(
    {
        name : {
                  type : String
                },
        Age : {
                    type : String
                },
        phone :{    
                    type : String
                }, 
        email :{
                    type : String
                },
        password :{
                    type : String
                },
        check :{    
                    type : String
                },
        price:{
            type:String
        },
        product:{
            type:String
        }
    }
)
module.exports=mongoose.model('Users',Users);

