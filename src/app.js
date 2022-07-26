const express = require('express');
const app = express();
const apiRoute = require('./routes/');

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// base route
app.get('/', (req, res) => {
    // send html file from public folder
    res.sendFile(__dirname + '/public/index.html');
});
// api route
app.use('/api', apiRoute);

// listen on port 3000
app.listen(3000, () => {
    console.log('Server started on port 3000');
});