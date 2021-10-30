const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res) => 
{
    //lodash
    const num = _.random(0,20);
    console.log(num);

    // routing
    let path = './BASICCssAndHTML/';
    if (req.url=='/' || req.url=='/about')
    {
        path+='index.html';
        req.statusCode = 200;
    }
    else
    {
        path+='error404.html';
        res.statusCode = 404;   
    }
    console.log(req.url);
    // set header content type 
    res.setHeader('Content-Type', 'text/html');
    fs.readFile(path, (err,data) =>
    {
        if (err)
        {
            console.log(err);
            res.end();
        }

        else
        {
            // res.write(data);
            res.end(data);
        };
    })

});



server.listen(3000, 'localhost', ()=>
{
    console.log('listening to requests on port 3000');
})