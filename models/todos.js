// Import the Mongoose library
const mongoose = require('mongoose');

// Define a new Mongoose schema called 'contactSchema'
const todoSchema = new mongoose.Schema({
    // 'name' field represents the name of the contact
    description: {
        type: String,       // Data type: String
        required: true      // Field is required
    },
    // 'number' field represents the contact number
    category: {
        type: String,       // Data type: String
        required: true      // Field is required
    },
    date: {
        type: String,
        required:true
    }
});

// Create a Mongoose model named 'Todos' based on the 'todoSchema'
const Todos = mongoose.model('Todos', todoSchema);

//exporting module to use it outside
module.exports = Todos;