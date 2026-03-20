const express = require('express');
const { adminAuth, userAuth } = require('./middlewares/auth');

const app = express();

const port = 3000;

// Handle Auth Middleware for only GET request GET, POST
app.use('/admin', adminAuth);

app.get('/admin/getAllData', (req, res) => {
    res.send('All Data sent');
});

app.get('/admin/deleteUser', (req, res) => {
    res.send('Delete a user');
});

app.get('/user', userAuth, (req, res) => {
    res.send('User data sent');
});


app.listen(port, () => {
    console.log(`Server is successfully on port ${port}...`);
});