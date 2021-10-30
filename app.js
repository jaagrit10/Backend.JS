const express = require('express');

//express app

const app = express();
//register view engine


app.listen(3000);
app.use( express.static( "BASICCssAndHTML" ) )
app.set('view engine','ejs');
app.set('views', 'BASICCssAndHTML')

// if one of the app.get fires a callback function no further file will run and the code after the callback function won't run

app.get('/about', (req,res)=>{
    // res.write('');
    // res.end();
 
    // res.send('<p>home page</p>')
    // res.sendFile('./BASICCssAndHTML/index.html', {root: __dirname}); // express uses the native/root path of the local machine
    res.render('index');

})
// app.get('/about-us',(req,res) =>
// {
//     res.redirect('/about');
// })

app.use((req,res)=>
{
    res.sendFile('./BASICCssAndHTML/error404.html', {root: __dirname}); // express uses the native/root path of the local machine


})