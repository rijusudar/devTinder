const express = require('express');
const connectDB = require('./config/database');
const { adminAuth, userAuth } = require('./middlewares/auth');
const User = require('./models/user');

const app = express();

const port = 3000;

app.post('/signup', async (req, res)=> {
    const userObj = {
        firstName: 'Sachin',
        lastName: 'Tendulkar',
        email: 'tendulkar@gmail.com',
        password: 'sachin@123',
    }

    // Creating a new instance of the User model
    const user = new User(userObj);

    try {
        await user.save();
        res.send('User added successfully');
    }
    catch (err) {
        console.log('Error while saving user to database...', err);
        res.status(400).send('Error while saving user to database' + err.message);
    }
    res.send('User added successfully');
});

connectDB()
    .then(() => {
        console.log('Database connected established...');
        app.listen(port, () => {
            console.log(`Server is successfully on port ${port}...`);
        });
    })
    .catch((err) => {
        console.log('Database connection cannoteb be established...', err);
    });

