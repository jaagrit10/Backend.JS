var x = null; // "null"
console.log("" + x);

var b = true;
console.log("" + b);

var nzero = -0;
console.log("" + nzero);
console.log(""  + []);
console.log("" + [1,2,3])
console.log("" + [null,undefined])
console.log("" + [[],[],[]])
console.log("" + [,])
console.log("" + [,,,])
//ToNumber()
console.log(10-"");
console.log(10-"0");
console.log(10-"-0");
console.log(10-" 0008  ");
console.log(10-">");
console.log(10-"");
console.log(10-false);
console.log(10-true);

//ToBoolean
// false values : "", 0, -0, null, NaN, undefined, false
if (true && "")
{
    console.log("hi");
}


else
{
    console.log("bye");
}

console.log(1<2<3); //1<2 gives true--->true<3 gives true
console.log(3>2>1); //3>2 gives true---> true>1 gives false


// equality operators
console.log(42==[42]); // [42]-->"42"-->42

// == : abstract equality comparison ---> tries to do coercion when types are not same
// === : strict equality comparison


