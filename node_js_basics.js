// //A basic function
// const greet = (name) =>
// {
//     console.log(`hello, ${name}`);

// } 

// greet('jaagrit');
// greet('yoshi');

// // global object 
// console.log (global);
// global.setTimeout(() => {
//     console.log('int the timeout');
    
// }, 3000);

// const int = setInterval(() => {
//     console.log('int the interval')
    
// }, 1000);  ------> this is an infinite loop;


// //to find the the directory or the filename in which you are currently working
// console.log(__dirname);
// console.log(__filename); 


// exporting different files in one file

const xyz = require('./modules.export');
console.log(xyz.ages);

// console.log(people); you can't access the variable/objects in the exported file unless the file returns something