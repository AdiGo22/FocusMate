 const bcrypt = require('bcrypt');
const User = require("../model/User");
const jwt = require('jsonwebtoken');

require("dotenv").config();

//signup handler
exports.signup = async( req,res) => {
    try{
        //fetch data from data entered by user in a html form
        const{name,email,password} = req.body;

        //check if user exists from DB
        const exisitingUser = await User.findOne({email});
        if(exisitingUser) {
            return res.status(400).json({
            success:false,
            message: 'User already exists'
            

        })
        }
        
        //secure password
        let hashedPassword;
        try{
            hashedPassword = await bcrypt.hash(password,10);
            //hash method of bcrypt module accepts two parameters
            //(the one to hash, number of hashing rounds)
        }
        catch(e){
            return res.status(500).json({
                sucess:false,
                message:"error in hashing the password"
            });
        }


        //create entry for user
        const user = await User.create({
            name,email,password:hashedPassword
            //created in DB
        })

        return res.status(200).json({
            success: true,
            message: 'user created successfully'
        })
    }
    catch(e) {
         console.log("ERROR WHILE HANDLINg");

         return res.status(500).json({
            success:false,
            message:e.message

         })
    }}

    //login handler
    /*
    exports.login = async (req,res) => {
        try{
             //first fetch data 
             const{name,email,password} = req.body;
             //validate email and pasword
             if(!name|| !email || !password) {
                res.status(400).json({
                    success:false,
                    message:'enter the required fields'
                })
             }
              //check if userExist
              const exisitingUser = await User.findOne({name,email}).lean(); 
              //adding .lean converts the json type into document type***?
           
              if(!exisitingUser){
                return res.status(401).json({
                    success:false,
                    message:'User is not present, Kindly Signup first.'
                })
              } 

               // Check if the provided name matches the name in the database
        if (exisitingUser.name !== name) {
            return res.status(401).json({
                success: false,
                message: 'The provided name does not match our records.'
            });
        }
              const payload = {
                email :exisitingUser.email,
                id: exisitingUser._id,
               name: exisitingUser.name, //*
              
              };
                //if User present then validate for the password and generate JWT token
                if( await bcrypt.compare(password,exisitingUser.password)){
                     //login
                     let token = jwt.sign(payload , process.env.JWT_SECRET , {
                        expiresIn: "8h",
                     });
                     exisitingUser.token = token;
                     //remove password from breaching
                     exisitingUser.password = undefined;
                     const options = {
                        expires:  new Date( Date.now()+ 8*24*60*60*1000),
                        httpOnly:true,
                     }

                     //make a cookie res.cookie({cookiename},{cookievalue},{cookie options})
                     res.cookie("token",token , options).status(200).json({
                        success: true,
                        token,
                        exisitingUser,
                        name: exisitingUser.name,
                        message:'Logged in Successfully'
                     })
                }else{
                    //password incorrect
                    return res.status(403).json({
                        success: false,
                        message:'Password didnt match'
                    })
                }
              

        }
        catch(e){
          
             return res.status(500).json({
                success: false,
                message: e.message
             });
        }
    }


// login handler
// login handler
/*
exports.login = async (req, res) => {
    try {
        // Extract data from the request body
        const { name, email, password } = req.body;

        // Check if all required fields are present
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide name, email, and password.'
            });
        }

        // Find a user with the exact matching name and email combination
        const existingUser = await User.findOne({ name, email }).lean();

        // If user not found, send error response
        if (!existingUser) {
            return res.status(401).json({
                success: false,
                message: 'No user found with the provided name and email combination. Please sign up first.'
            });
        }

        // Validate the password
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(403).json({
                success: false,
                message: 'Incorrect password.'
            });
        }

        // Prepare payload for JWT
        const payload = {
            id: existingUser._id,
            name: existingUser.name,
            email: existingUser.email,
        };

        // Generate JWT token
        const token = jwt.sign(payload, process.env.JWT_SECRET, {
            expiresIn: '8h',
        });

        // Set cookie options for token storage
        const options = {
            expires: new Date(Date.now() + 8 * 60 * 60 * 1000), // 8 hours
            httpOnly: true, // cookie only accessible by the server
            secure: process.env.NODE_ENV === 'production' // send cookie over HTTPS in production
        };

        // Send response with cookie, token, and user data
        res.cookie('token', token, options).status(200).json({
            success: true,
            message: 'Logged in successfully.',
            token,
            user: {
                id: existingUser._id,
                name: existingUser.name,
                email: existingUser.email
            }
        });

    } catch (e) {
        // Handle server errors
        console.error(e);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};
*/

//14/11
// Login route
app.post('/auth/login', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Find the user by both name and email
        const user = await User.findOne({ name, email });
        if (!user) return res.status(400).send("User not found!");

        // Compare entered password with stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send("Invalid credentials!");

        // Generate a JWT token
        const token = jwt.sign(
            { email: user.email, id: user._id, name: user.name }, 
            process.env.JWT_SECRET, 
            { expiresIn: '8h' }
        );
        
        // Send the token as a response
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error!");
    }
});



/* everything is working fine but the only loophole here is if i have used a right token i can use any email to enter into admin or student
provided the respective token is right.*/