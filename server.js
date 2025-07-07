const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

let dataStore = {}; // Temporary in-memory storage
let idCounter = 1;  // Starts from 1 and increments

// Get next available ID
app.get("/api/data/next-id", (req, res) => {
    res.json({ nextId: idCounter });
});

// Submit new data
app.post("/api/data", (req, res) => {
    const { electricity, emissions, recycling } = req.body;

    if (!electricity || !emissions || !recycling) {
        return res.status(400).json({ message: "All fields are required!" });
    }

    const id = idCounter++;
    dataStore[id] = { id, electricity, emissions, recycling };

    res.json({ message: "Data saved successfully!", data: dataStore[id] });
});

// ✅ FETCH ALL RECORDS — must be defined before :id route!
app.get("/api/data/all", (req, res) => {
    const allRecords = Object.values(dataStore);
    res.json(allRecords); // Always returns an array
});

// Retrieve data by ID
app.get("/api/data/:id", (req, res) => {
    const entry = dataStore[req.params.id];
    if (!entry) {
        return res.status(404).json({ message: "Record not found", found: false });
    }
    res.json({ message: "Record retrieved successfully!", found: true, record: entry });
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});