
function funcName(name){
    console.log('Message to print');
    console.log(`Message to print ${name}`); //recommended
}
//gets undefined, as if name is declared but never used.
funcName();  // execution of funcName
funcName // refrencing the function
funcName('bhawani_K')

// -------------------------------------------------------

function namastey(){
    return 'Hello!! from India' //no output
}
namastey()  //no output, we are calling it successfully but we are not printing anything. It just return the output, However we dint asked to print anything.
var greet = namastey()
console.log(greet); // prints output
console.log(namastey());

