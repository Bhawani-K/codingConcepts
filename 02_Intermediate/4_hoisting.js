tipper(5)

function tipper(a) {
    var bill = parseInt(a);
    // console.log(bill+5);
}

// ------------------------------------------

/************************
Variable Function Hoisting
 * bigTipper(500)() // No access before declaration, becoz var declarations are not scoped toblocks
********************** */

var bigTipper = function (a){  
    var bill = parseInt(a);
    // console.log(bill+5);
}
bigTipper(500)

// ------------------------------------------

console.log(name);  // undefined, here JS scans and thinks ok 'name' is there but its not initialized yet. But its present somewhere in the file soo undefined.
var name = "bhawani_K"

// ---------------------------------------------

function greet() {
    var name = "GoodMorning Ms.BK"
    console.log(name);   // Function Execution Context
}
greet()
console.log(name); //Global Context.