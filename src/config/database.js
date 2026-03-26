const mongoose = require('mongoose');

const connectDB = async() => {
    await mongoose.connect(
        'mongodb+srv://NamasteDev:lnqxa0IdihzXvlD8@namastedev.icbu3fe.mongodb.net/devTinder'
    );
};

module.exports = connectDB;
