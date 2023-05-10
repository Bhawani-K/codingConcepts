let numValue = 1;
let stringValue = "Asd";
let emptyString = '';

let NumberToBoolean = Boolean(numValue)
console.log(`value of converting NumberToBoolean :- ${NumberToBoolean}`);
console.log(`Type Of converting NumberToBoolean:- ${typeof NumberToBoolean}`);
console.log("---------------------------------------------------------------------");

let StringToBoolean = Boolean(stringValue)
console.log(`value of converting StringToBoolean :- ${StringToBoolean}`);
console.log(`Type Of converting StringToBoolean:- ${typeof StringToBoolean}`);
console.log("-----------------------------------------------------------------------");

let EmptyStringToBoolean = Boolean(emptyString)
console.log(`value of converting EmptyStringToBoolean :- ${EmptyStringToBoolean}`);
console.log(`Type Of converting EmptyStringToBoolean:- ${typeof EmptyStringToBoolean}`);
console.log("----------------------------------------------------------------------");



// 1 => true; 0 => false
// "" => false
// "Asd"   //true
