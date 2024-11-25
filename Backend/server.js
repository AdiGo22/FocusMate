

/*100 percent working given code tried and tested - 5/11/24*/
// server.js

const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Make sure to load your .env file
 const app = express();
app.use(cors()); // Enable CORS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.log("MongoDB connection error:", err));

// User schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Register route
app.post('/auth/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already exists!");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).send("User registered!");
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error!");
    }
});

// Login route

app.post('/auth/login', async (req, res) => {
    const { name,email, password } = req.body;

    try {
        const user = await User.findOne({ name,email });
        if (!user) return res.status(400).send("User not found!");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send("Invalid credentials!");

        const token = jwt.sign({ email: user.email, id: user._id, name: user.name }, process.env.JWT_SECRET, { expiresIn: '8h' });
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error!");
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);

});


/*
// Login route
app.post('/auth/login', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Query for both name and email together
        const user = await User.findOne({ name, email });
        
        if (!user) {
            return res.status(400).send("User with the provided name and email not found!");
        }

        // Validate password only if both name and email match a user
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        
        if (!isPasswordMatch) {
            return res.status(400).send("Invalid password!");
        }

        // Generate JWT token
        const token = jwt.sign(
            { email: user.email, id: user._id, name: user.name },
            process.env.JWT_SECRET,
            { expiresIn: '8h' }
        );
        
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server error!");
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
*/

/*
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config(); // Load environment variables

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// User schema
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Register route
app.post('/auth/register', async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Validate input here (not implemented)
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send("User already exists!");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        res.status(201).send("User registered!");
    } catch (error) {
        console.error("Registration error:", error); // More detailed logging
        res.status(500).send("Server error!");
    }
});

// Login route
app.post('/auth/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).send("User not found!");

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).send("Invalid credentials!");

        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET); // Ensure JWT_SECRET is set
        res.json({ token });
    } catch (error) {
        console.error("Login error:", error); // More detailed logging
        res.status(500).send("Server error!");
    }
});

// Start server
const PORT = process.env.PORT || 4000; // Fallback port
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

*/