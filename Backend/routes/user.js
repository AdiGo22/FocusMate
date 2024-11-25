//router
const express = require('express');
const router = express.Router();

//need login and signup controller
const {login,signup} = require('../controllers/Auth');
/*
const{isStudent,isAdmin,auth} = require('../middlewares/Auth'); //imported middlewares
*/
//mount
router.post("/login",login);
router.post("/signup",signup);

//mounting protected routes using middlewares
//test middleware route
router.get("/test",auth,(req,res)=> {
  
        res.json({
            success:true,
            message:"test successful",
        });
    });
//AuthZ
//student
router.get("/student",auth,isStudent , (req,res)=> {
    try{
    res.json({
        success: true,
        message: 'You are a verified student'
    });
}catch(e){
    res.json({
        success:false,
        message: 'Not a verified student'
    });
}
});

//admin
router.get("/admin",auth,isAdmin,(req,res)=> {
    try{
        res.json({
            success: true,
            message: 'You are a verified Admin'
        });
    }catch(e) {
        res.json({
            success: false,
            message: 'You are not a verified Admin'
        });
    }
})
//export
module.exports = router;