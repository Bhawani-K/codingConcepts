// Comparision should be b/w same dataType
// console.log("2">1);
// console.log(2>1);

// Comparision with null
    // In comparisions null is getting converted to a number, treating it as 0 or NaN. Due to which...
console.log(null > 0);   // it gets the value of false
console.log(null == 0);
console.log(null >= 0); // This gets as true.


console.log(undefined > 0);
console.log(undefined == 0);
console.log(undefined >= 0);


// === strictCheck, which checks the values and the dataTypes too.