const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// Sign Up
router.post("/signup", async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({ name, email, password: hashedPassword });
        res.json({ message: "User registered successfully." });
    } catch {
        res.status(400).json({ error: "Email already exists or invalid input." });
    }
});

// Sign In
router.post("/signin", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ error: "User not found." });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ error: "Invalid credentials." });

        res.json({ message: "Login successful." });
    } catch {
        res.status(500).json({ error: "Server error." });
    }
});

module.exports = router;