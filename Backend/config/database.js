const mongoose = require('mongoose');
require('dotenv').config();

exports.connect = () => {
    mongoose.connect(process.env.MONGODB_URL , {
        useUnifiedTopology :true,
        useNewURlParser : true
    })
    .then( ()=>{console.log("database connected")})
    .catch((e)=>{console.log("Error Occured while Connecting")
        console.error(e.message);
    })
}