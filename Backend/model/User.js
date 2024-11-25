//import mongooose
const mongoose = require('mongoose');
//define Schema linked with mongoose
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
    },
    email:{
        type:String,
        required:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
        trim:true,
    }
    /*
    role:{
        type:String,
        enum:["Admin","Student","Guest"]
        //restricted array to use within these roles only.
    }
        */
});

//export
module.exports= mongoose.model("user",UserSchema);