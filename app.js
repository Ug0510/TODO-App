const express = require('express');
const bodyParser = require('body-parser');
const port = 8000;

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get('/',function(req,res){
    res.send('<h1>Hello World</h1>');
})

app.listen(port,() => { console.log("port is running at server 8000"); });
