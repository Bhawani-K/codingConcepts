const user = {
    username: 'Bhawani_K',
    price: 999,
    welcomeMessage: function () {
        // console.log(`${this.username}, Welcome to the WebSite`);
        // console.log(this);  //current Context
    }
}
user.username = "qwe"

// user.welcomeMessage()
// console.log(user);

console.log(this);  // {} Node Env, refers to emptyObject

// **********************************

// NodeEnv
// function chai(){
//     let userName = "Bhawani_K"
//     console.log(this.userName); //undefined, it works only in objects..
//     console.log(this);
// }
// chai()

// -----------------

// const chai = function{
//     let userName = "Bhawani_K"
//     console.log(this.userName); //undefined, it works only in objects..
//     console.log(this);
// }
// chai()

const chaiArrow = ()=>{
    let userName = "Bhawani_K"
    console.log(this.userName);
    console.log(this);
}
chaiArrow()

// -----------------------------

// const addTwo = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addTwo(4,5));

// --------------------------------
// Explicit Return,  where we have the return keyword.
// const addTwo = (num1,num2)=> { return num1+num2} //If parenthesis, we need to have return statement.

// Implicit return, where we doen't have the return keyword.
// const addTwo = (num1,num2)=> (num1+num2)  

const addTwo = (num1,num2)=> ({userName:'Bhawani_K'}) 

console.log(addTwo(4,5));