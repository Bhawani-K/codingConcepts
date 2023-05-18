// Beginner Function--------------------
function isEven(ele) {
    if (ele %2 ===0) {
        return true;
    }
    return false;
}
console.log(isEven(2));

// Simpler,Resolved function------------
function isEven(ele) {
    return ele %2 ===0;
}
console.log(isEven(4));

// Arrow Function ----------------------
var isEven = (ele) => {
    return ele % 2 === 0;
}
console.log(isEven(4));

//************************************************/

/**************************
 * If a function returns a true value,
 * arr.some() immediately returns true and stops iterating over the rest of items.
 * --------------------------------------------------
 * if a function returns a false value,
 * arr.every() it immediately returns false and stops iterating over the rest of items.
 ****************************/

var result = [2,3,6,8].some(isEven)
console.log(result);

// -------------------------------------

var result = [2,3,6,8].every(isEven)
console.log(result);

// -------------------------------------

// Callback Function
let abc = [2, 4, 6, 8]
let cbFunc = abc.every((e) => {
    return e % 2 === 0
})
console.log(cbFunc);

// ------------------------------------
// Simplified-CallBackFunction
var rlt = [2, 4, 6, 8].every((e) => e % 2 === 0)
console.log(rlt);

