const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => 
{

    // routing
    let path = './BASICCssAndHTML/';
    if (req.url=='/' || req.url=='/about')
    {
        path+='index.html';
    }
    else
    {
        path+='error404.html';   
    }
    console.log(req.url, req.method);
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