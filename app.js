const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = 8000;

const db = require('./config/mongoose');
const Todos = require('./models/todos');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('assests'));

app.set('view engine', 'ejs');

// Sample how data is store 
// let todoList = [
//     {
//         description: 'all day is good',
//         category: 'work',
//         date: '05-10-2020'
//     },
//     // ... other tasks ...
// ];

let todoList = [];

app.get('/', async function (req, res) {
    try {
        const todoList = await Todos.find({});

        // Converting date in required Format
        todoList.forEach(todo => {
            const dateObject = new Date(todo.date);
            const options = { year: 'numeric', month: 'short', day: '2-digit' };
            todo.date = dateObject.toLocaleDateString('en-US',options);
        })

        // Rendering our home view
        res.render('home',{
            todoList:todoList
        });

    } catch (err) {
        console.log('Error fetching the data', err);
    }
});




app.post('/', async function (req, res) {
    try{
        const newTodo = {
            description: req.body.description,
            category: req.body.category,
            date: req.body.date
        };
        console.log(req.body);
        await Todos.create(newTodo);
        res.redirect('/');
    }
    catch(err)
    {
        console.log('Error adding new todo',err);
    }
});

app.post('/delete', function (req, res) {
    try{
        const tasksToDelete = req.body.tasksToDelete;
        todoList = todoList.filter((task, index) => !tasksToDelete.includes(index.toString()));
    }catch(err)
    {
        
    }
    res.redirect('/');
});

app.listen(port, function (err) {
    if (err) {
        console.log(`Error in running the server: ${err}`);
    }
    console.log(`Server is running on port ${port}`);
});
