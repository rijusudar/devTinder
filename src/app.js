const express = require('express');

const app = express();

const port = 3000;


app.get('/user', (req, res) => {
    res.send({
        firstName: 'Riju',
        lastName: 'Sudar'
    })
});

app.post('/user', (req, res) => {
    console.log('Creating a new user...');
    res.send('User created successfully');
});

app.delete('/user', (req, res) => {
    console.log('Deleting a user...');
    res.send('User deleted successfully');
});

app.put('/user', (req, res) => {
    console.log('Updating a user...');
    res.send('User updated successfully');
});

app.patch('/user', (req, res) => {
    console.log('Partially updating a user...');
    res.send('User partially updated successfully');
});

app.use('/test', (req, res) => {
    res.send('Hello from the server');
});


app.listen(port, () => {
    console.log(`Server is succesfully on port ${port}...`);
});