//import jwt token
const jwt = require('jsonwebtoken');
//import .env file
require("dotenv").config();


//CHECKING USER AUTHENTICATION {AUTHN}
exports.auth = (req,res,next) => {  //next refer to passing to the next middleware after done with current.
    //fetch the jwt token and validate
    try{
        //extract the jwt
        const token = req.body.token;
        //validate
       
        if(!token) {
           return res.status(401).json({
             success: false,
             message: 'Token not found'
           });
        }

         try {
            const validate =  jwt.verify(token,process.env.JWT_SECRET); 
            //verify is a jwt function that accepts two parameters token and the secret key returning an object stored in validate
            console.log(validate);
            
            req.user = validate; //
         }catch(e){
            return res.status(401).json({
                success: false,
                message: 'Invalid token'
            });
         }
         next();
    }catch(e){
         return res.status(401).json({
            success: false,
            message: 'Something hell went wrong man :('
         });
    }
}
/*
//checking roles (AUTHORIZATION CHECK) {AUTHZ}

//verify isStudent
exports.isStudent = (req,res,next)=> {
    //fetch the jwt token and validate
    try{
        //checking authorization from payload data inside jwt token (req.user)
        if (req.user.role!="Student"){
            return res.status(401).json({
                success: false,
                message: 'Not for you duhh! protected route for students.'
            })
        }
        next(); //to move to the next middleware

    }catch(e){
         return res.status(500).json({
            success:false,
            message: 'Oops , something from our system went wrong!'
         })
    }
}

//verify for admin
exports.isAdmin = (req,res,next) => {
    try{
        if(req.user.role!="Admin"){
            return res.status(401).json({
                success: false,
                message: 'Not for you duhh! ,This is a protected route for admin.'
        })
    } next();
    }catch(e){
        return res.status(500).json({
            success:false,
            message: 'Oops , something from our system went wrong!'
         })
    }
}
*/