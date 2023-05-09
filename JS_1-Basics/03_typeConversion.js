let score = 125;
let dob = "15March1993";
let subject = null;
let clg = undefined;

console.log(typeof score);
console.log(typeof (score));
console.log(typeof (typeof score));  // The value recieved is always a string, ex:- "number"

// Convert String to Number
let valueInNumber = Number(dob)
console.log(`This  is converted from String to Number :-  ${valueInNumber}`);
console.log(`valueInNumber :- ${valueInNumber}`);
console.log(`Type Of :- ${typeof valueInNumber}`);
console.log("-------------------------------------------");

// TypeOf Null
let valueofSubject = Number(subject)
console.log(`value of null :- ${valueofSubject}`);
console.log(`Type of Null :- ${typeof valueofSubject}`);
console.log("-------------------------------------------");

// Type of Undefined
let valueOfDob = Number(dob)
console.log(`value of undefined ${valueOfDob}`);
console.log(`Type of undefined :- ${typeof valueOfDob}`);