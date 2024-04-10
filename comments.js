// Create web server
var express = require('express');
var app = express();
var fs = require('fs');

// Create a new comment
app.post('/comments', function (req, res) {
    // Get the comment from the request
    var comment = req.body.comment;
    // Save the comment to the file
    fs.appendFile('comments.txt', comment + '\n', function (err) {
        if (err) {
            // If there was an error, send an error response
            res.status(500).send('Error saving comment');
        } else {
            // If the comment was saved successfully, send a success response
            res.send('Comment saved successfully');
        }
    });
});

// Get all comments
app.get('/comments', function (req, res) {
    // Read all comments from the file
    fs.readFile('comments.txt', 'utf8', function (err, data) {
        if (err) {
            // If there was an error, send an error response
            res.status(500).send('Error reading comments');
        } else {
            // If the comments were read successfully, send them in the response
            res.send(data);
        }
    });
});

// Start the server
app.listen(3000, function () {
    console.log('Server is running on port 3000');
});