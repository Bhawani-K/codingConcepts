// Ways to create the object
    // - Object literal
    // - Object as a constructor

// Singleton object
// Object.create


// object literals
const sym = Symbol('key1')  

const obj = {
    name:'Bhawani_K',
    'nick Name':'_bk', // Syntax to declare a string with a space in object
    [sym] : 'How to declare Symbol in objects', //Syntax to declare Symbol in obj
    age:22,
    location:'BAM',
    email:'bhawani@google.com',
    isLoggedIn : true,
    lastLoginDays :['Mon', 'Tue'],
}



// console.log(obj.email);
// console.log(obj['email']); // need to put with the dataType.
// console.log(obj['nick Name']); // if space in b/w.
// console.log(obj[sym]); // Syntax to fetch Symbol.

// Object.freeze(obj)  //frezes the Object
// obj.email = 'aad@vdjvn.com'
// console.log(obj);

obj.greeting = function(){
    console.log('Hello obj, How ru..');
}
// console.log(obj.greeting);   // this does not executes the function, Whereas it returns the reference of the function.

obj.greetingTwo = function(){
    console.log(`Hello obj, ${this.name}`);
}
// obj.greetingTwo()
// obj.greeting()

// why it gets undefined..?
console.log(obj.greeting());
console.log(obj.greetingTwo());

