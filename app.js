const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = 8000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('assests'));

app.set('view engine', 'ejs');

let todoList = [
    {
        description: 'all day is good',
        category: 'work',
        date: '05-10-2020'
    },
    // ... other tasks ...
];

app.get('/', function (req, res) {
    res.render('home', {
        todoList: todoList
    });
});

app.post('/', function (req, res) {
    const newTodo = {
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
    };
    todoList.push(newTodo);
    res.redirect('/');
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
