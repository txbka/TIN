const { Console } = require('console');
const express = require('express');  
const app = express();
const cors = require("cors");  
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(express.urlencoded({extended: true,}));
app.use(cors({origin: "*",}));
  

app.post("/calc", (req, res) =>
{
    let headers = {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }
    let a = parseInt(req.body.a);
    let b = parseInt(req.body.b);
    let operator = req.body.op;
    let result;
    if (isNaN(a) || isNaN(b)) 
    {
        result = "Invalid a or b";
        res.statusCode = 400;
    }
    else
    {
        switch(operator)
        {
            case"+":
                result = a+b;
                break;
            case"-":
                result = a-b;
                break;
            case"*":
                result = a*b;
                break;
            case"/":
                result = a/b;
                break;
            default:
                result = "Invalid operation sign";
                res.statusCode = 400;
        }
    }
    res.send({headers: headers, result: result});
});

var server = app.listen(8000, function () 
{  
  var host = server.address().address;  
  var port = server.address().port;  
  console.log('Example app listening at http://%s:%s', host, port);  
});  