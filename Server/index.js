const express = require("express");
const connection = require('./connect');
const cors = require('cors');
const app = express();
const User = require('./models/User');
const { MongoClient } = require('mongodb');
connection();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Atlas connection URL
const mongoURI = "mongodb+srv://vijaysharma11702:lgMzwDKQkS7MphL1@hostelhub.csfaplv.mongodb.net/complaints?retryWrites=true&w=majority";

// Define route to handle POST requests to /complaints
app.post("/complaints", async (req, res) => {
    try {
        // Extract student information from the request body
        const { rollNumber, roomNumber } = req.body;

        // Connect to MongoDB Atlas
        const client = new MongoClient(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        await client.connect();

        // Access the existingstudents collection
        const existingStudentsCollection = client.db("complaints").collection("existingstudents");

        // Check if the student exists in the existingstudents collection
        const student = await existingStudentsCollection.findOne({ rollNumber });
        if (!student) {
            await client.close(); // Close the MongoDB connection
            return res.status(400).json({ error: "Student not found" });
        }

        // Check if the student's room number matches the provided room number
        if (student.roomNumber !== roomNumber) {
            await client.close(); // Close the MongoDB connection
            return res.status(400).json({ error: "Invalid room number" });
        }

        // Create a new complaint instance using the data from the request body
        const newUser = new User(req.body);
        // Save the user to the database
        const savedUser = await newUser.save();
        // Send a success response with the saved user data
        await client.close(); // Close the MongoDB connection
        res.status(201).json(savedUser);
    } catch (error) {
        // If an error occurs, send a 500 (Internal Server Error) response
        res.status(500).json({ error: error.message });
    }
});

app.get("/complaints", async (req, res) => {
    try {
        // Retrieve all complaints from the database
        const complaints = await User.find({});
        // Send a success response with the list of complaints
        res.status(200).json(complaints);
    } catch (error) {
        // If an error occurs, send a 500 (Internal Server Error) response
        res.status(500).json({ error: error.message });
    }
});
app.delete("/complaints/:id", async (req, res) => {
    try {
        // Extract complaint ID from request parameters
        const { id } = req.params;
        
        // Check if the complaint exists
        const complaint = await User.findById(id);
        if (!complaint) {
            return res.status(404).json({ error: "Complaint not found" });
        }

        // Delete the complaint from the database
        await User.findByIdAndDelete(id);

        // Send a success response
        res.status(200).json({ message: "Complaint deleted successfully" });
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
