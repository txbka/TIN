const http = require('http');
const url = require('url');
const port = 8080;

http.createServer((req, res) => 
{
    res.writeHead(200, {'Content-Type': 'text/html'});
    const query = url.parse(req.url, true).query;
    const pathname = url.parse(req.url, true).pathname;
    const a = parseInt(query.a);
    const b = parseInt(query.b);
    if(isNaN(a) || isNaN(b))
    {
        res.writeHead(400, {'Content-Type': 'text/html'});
        res.write("Wrong input");
        res.end;
        return;
    }
    switch(pathname)
    {
        case "/add":
            res.write(""+(a+b));
            break;
        case "/sub":
            res.write(""+(a-b));
            break;
        case "/mul":
            res.write(""+(a*b));
            break;
        case "/div":
            res.write(""+(a/b));
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write("Operation not found");
            res.end;
            return;
    }
    res.end();
}).listen(port);