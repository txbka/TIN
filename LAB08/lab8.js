const { Console } = require('console');
const express = require('express');  
const path = require("path");
const app = express();  
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true,}));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, '/views') );

app.get("/hello", (req, res) => 
{
  res.send("Hello World!");
});

app.get('/form', function(req, res)
{
  res.sendFile(__dirname + '/lab8.html');
});

app.post('/formdata', (req, res) => {
    let data = [{"firstname": req.body.firstname, "lastname": req.body.lastname, "age": req.body.age}];
    console.log(data);
    res.render('formdisplay', {users: data});
});

app.post('/jsondata', (req, res) => {
  let data = [{"firstname": req.body.firstname, "lastname": req.body.lastname, "age": req.body.age}];
  res.render('formdisplay', {users: data});
});

var server = app.listen(8000, function () 
{  
  var host = server.address().address;  
  var port = server.address().port;  
  console.log('Example app listening at http://%s:%s', host, port);  
});  