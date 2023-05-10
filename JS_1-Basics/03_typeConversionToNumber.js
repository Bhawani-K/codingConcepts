let numValue = 125;
let stringValue = "15March1993";
let nullValue = null;
let undefinedValue = undefined;
let booleanValue = true;

console.log(typeof numValue);
console.log(typeof (numValue));
console.log(typeof (typeof numValue));  // The value recieved is always a string, ex:- "number"

// Convert to Number
console.log("CONVERT TO NUMBER-------CONVERT TO NUMBER----------");
let stringToNumber = Number(stringValue)
console.log(`value of converting stringToNumber :- ${stringToNumber}`);
console.log(`Type Of converting stringToNumber:- ${typeof stringToNumber}`);
console.log("-------------------------------------------");

// Convert Null -> Number
let NulltoNumber = Number(nullValue)
console.log(`value of converting NulltoNumber :- ${NulltoNumber}`);
console.log(`Type of converting NulltoNumber :- ${typeof NulltoNumber}`);
console.log("-------------------------------------------");

// Convert  Undefined -> Number
let undefinedToNumber = Number(undefinedValue)
console.log(`value of converting undefined :- ${valueOfDob}`);
console.log(`Type of converting undefined :- ${typeof valueOfDob}`);
console.log('--------------------------------------------');
// Convert  Boolean -> Number
let BooleanToNumber = Number(booleanValue)
console.log(`value of converting BooleanToNumber ${BooleanToNumber}`);
console.log(`Type of converting BooleanToNumber ${typeof BooleanToNumber}`);


// "33"  => 33
// "33abc"  => NaN
//  true  =>  1 ; false => 0