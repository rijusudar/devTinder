const express = require('express');

const app = express();

const port = 3000;

app.use(
    '/user', 
    (req, res, next) => {
        // Route handler
        console.log('User route accessed');
        next();
        res.send('Response!');
    },
    (req, res, next) => {
        // Route 2 handler
        console.log('User route 2 accessed');
        // res.send('Response 2!');
        next();
    },
    (req, res, next) => {
        // Route 3 handler
        console.log('User route 3 accessed');
        // res.send('Response 3!');
        next();
    },
    (req, res, next) => {
        // Route 4 handler
        console.log('User route 4 accessed');
        // res.send('Response 4!');
        next();
    },
);
// app.use('/routes', [rh1, rh2, rh3])
// app.use('/routes', [rh1, rh2], rh3, rh4, rh5)


app.listen(port, () => {
    console.log(`Server is succesfully on port ${port}...`);
});