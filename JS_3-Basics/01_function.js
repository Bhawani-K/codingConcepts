function sayHello() {
    console.log('B');
    console.log('H');
    console.log('A');
    console.log('W');
    console.log('A');
    console.log('N');
    console.log('I');
}
// sayHello //Refrence, which gets no result
// sayHello() // () starts execution of the function

function addTwoNos(num1, num2) {  // num1,num2 refered as parameters, while passing it through the function its called as paramenters
    const add = num1 + num2
    console.log(add);
}
// addTwoNos(4,'a') // 4,a are refered as arguments, whereas if the same parameters passed at the time of function execution, its called as args.
// addTwoNos(4,2)

const result = addTwoNos(4, 2)
// console.log(result); // undefined, becoz weare passing the arguments,But we are not returning the sum.

// Way_1
function addNos(num1, num2,num3) {
    add = num1 + num2
    return add;
}
const add = addNos(4 , 5,2)
console.log(add); // this would print the exact result, as we are returning the sum.

// Way_2
function addNos(num1, num2) {
    return num1 + num2;
}
const addValues = addNos(4 , 5)
console.log(addValues);
// **********************************************************

function loginUserMessage(userName){
    if(userName === undefined){
        console.log('Please enter a username');
        // return;  // if returned, This does not allow to print the else part.
    }
    return `${userName} loggedin`
}
// console.log(loginUserMessage('Bhawani_k'));
console.log(loginUserMessage());  // undefined as no Argument has been passed

// if default value is passed
function logMessage(userName = 'Abc'){
    if(userName === undefined){
        console.log('Please enter a username');
    }
    return `${userName} loggedin`
}

console.log(logMessage()); // if no argument is passed, it takes up the default value.









