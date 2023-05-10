const gamePoint =200
console.log(gamePoint);

// Way-2, by using new keyword
const score = new Number(gamePoint)
console.log(score);
console.log(gamePoint.toString().length); //1st converts it to String, then we can put String Methods to it as str.length
console.log(gamePoint.toFixed(2)); // to get the precesion value, generally used in decimals.

// Precision => 
console.log(gamePoint.toPrecision(2));
console.log(gamePoint.toPrecision(3));
console.log(gamePoint.toPrecision(5));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // toLocaleString, byDefault takes US based

// ++++++++++++++++++++++++ MATHS +++++++++++++++++++++++++++++++

console.log('++++++++++++++++++++++++ Math ++++++++++++++++++++++++');
console.log(Math.abs(-4)); // converts -ve value to +ve
console.log(Math.round(4.6)); // rounds to nearest value
console.log(Math.ceil(4.3));  // rounds to upper value
console.log(Math.floor(4.3)); // rounds to down value
console.log(Math.min(4,8,6,1));
console.log(Math.max(4,8,6,1));
console.log(Math.random());  // number b/w 0-1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


