const express = require("express");
const cors = require('cors');
const app = express();
const User = require('./models/User');

// Middleware
app.use(cors());
app.use(express.json());

// Define route to handle POST requests to /complaints
app.post("/complaints", async (req, res) => {
    try {
        // Create a new user instance using the data from the request body
        const newUser = new User(req.body);
        // Save the user to the database
        const savedUser = await newUser.save();
        // Send a success response with the saved user data
        res.status(201).json(savedUser);
    } catch (error) {
        // If an error occurs, send a 500 (Internal Server Error) response
        res.status(500).json({ error: error.message });
    }
});

// Start the server
const PORT = 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
