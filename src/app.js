const express = require('express');

const app = express();

const port = 3000;

app.use('/', (req, res) => {
    res.send('Hello World');
});

app.use('/helo', (req, res) => {
    res.send('Hello Helo helofrom the server');
});

app.use('/test', (req, res) => {
    res.send('Hello from the server');
});

app.listen(port, () => {
    console.log(`Server is succesfully on port ${port}...`);
});