// variables are catageorized based on memory space and how to access them.
    // 1. Primitive
    // 2. Non-Primitive


// Primitive
// 7 Types : callByValue
// String, Number, Boolean, null, undefined, Symbol, BigInt

const string = "String"
const number = 123
const decimal = 123.3 // number dataType
const nullValue = null
const undefinedValue = undefined

const id = Symbol('1234')   // if same value stored, then also it doesnot returns same value.
const anotherId = Symbol('1234')
console.log(id === anotherId); // false
console.log(`DataType Of Symbol :- ${typeof id}`);
console.log(`DataType Of String :- ${typeof string}`);
console.log(`DataType Of number :- ${typeof number}`);
console.log(`DataType Of decimal :- ${typeof decimal}`);
console.log(`DataType Of nullValue :- ${typeof nullValue}`);
console.log(`DataType Of undefined :- ${typeof undefinedValue}`);
console.log("******************************************");


// Non-Primitive / RefrenceType :  callByRefrence
//  Array, Object, functions
const sports = ['badminton', 'Football', 'BasketBall']
let myObj ={
    name:'bhawani_K',
    age:22
}

const func = function(){
    console.log("Hello World");
}


console.log(`dataType of Array :- ${typeof sports}`);
console.log(`dataType of Object :- ${typeof myObj}`);
console.log(`dataType of function :- ${typeof func}`);