const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const users = []; // Temporary storage for testing

// Signup Route
app.post("/signup", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }
    users.push({ username, password });
    res.status(201).json({ message: "User registered successfully" });
});

// Login Route
app.post("/login", (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: "Invalid credentials" });
    }
    res.json({ message: "Login successful" });
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
