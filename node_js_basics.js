const greet = (name) =>
{
    console.log(`hello, ${name}`);

} 

greet('jaagrit');
greet('yoshi');

//global object 
console.log (global);
global.setTimeout(() => {
    console.log('int the timeout');
    
}, 3000);

// const int = setInterval(() => {
//     console.log('int the interval')
    
// }, 1000);  ------> this is an infinite loop;
console.log(__dirname);
console.log(__filename);