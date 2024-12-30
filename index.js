

// Start the server on port 3000


const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Route to handle form submission
app.post('/submit', (req, res) => {
    const { message, star_rating } = req.body;
    const feedback = `Complaint: ${message}\nRating: ${star_rating} stars\n\n`;

    // Append the feedback to a file
    fs.appendFile(path.join("C:\\Users\\neuro\\Desktop\\Website\\", 'feedback.txt'), feedback, (err) => {
        if (err) {
            console.error('Error writing to file', err);
            if (star_rating > 3)
            res.status(500).send('There was an error saving your feedback.');
        } else {
            res.send('Thank you for your feedback!');
        }
    });
});


// Start the server on port 3000
app.listen(52250, () => {
    console.log('Server is running on http://localhost:3000');
});