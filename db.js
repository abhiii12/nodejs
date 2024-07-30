const mongoose = require('mongoose');
// Define the MongoDB connection URL
//const mongoURL = 'mongodb://localhost:27017/hotels' // Replace 'mydatabase' with your database name
const mongoURL = 'mongodb+srv://abhiii1208:987UIop123@cluster0.q79vecz.mongodb.net/'
// Set up MongoDB connection
mongoose.connect (mongoURL)
// Get the default connection
//Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;
// Define event listeners for database connection
db.on('connected', () => {
console.log('Connected to MongoDB server');
});
db.on('error', (err) => {
console.error('MongoDB connection error:',err);
});
db.on('disconnected', () => {
    console.log('MongoDB disconnected');
    });
// Expots the database connection
module.exports = db;
