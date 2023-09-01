const mongoose = require('mongoose');

// connect to database 
mongoose.connect('mongodb://localhost/todo_list_db', {
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log('Connected to database')
})
.catch(err => {
console.log('Error connecting to database',err);
});

// acquire the connection (To check if it is successfull)
const db = mongoose.connection;

// error
db.on('error',console.error.bind(console,'error connecting to db'));

// up and running the print the message
db.once('open',function(){
    console.log('Successfully connected to database');
});