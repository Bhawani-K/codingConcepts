// functName(); 

// function funcName(){
//     console.log('Hello');
// }

// ------------------------------------------------

if (2 === 2) {
    console.log('this is true');
}

// ------------------------------------------------

// In Browser, window was the global context, Here in Node window is not the globalContext.

/*****************
 * what is global context?
 * Global Context is refered as a fallback context, i.e when we run a function and no context is set(usually set by an object) then the fallback context is Global context.
 * In NodeJS, it means to an object having the information related to the Node.
 * Wheras when it goes to the browser, The Global Context is Window object.
 * Similarly, if we will run the file in strict mode, then javascript leaves "this" as undefined.

 * GlobalContext is different in different engines.
 ************ */

var myName = 'Bhawani'
if(myName === window.myName){  // works in browser,
    console.log('true statement--');
}
// By using "this" we can check the global context of the function or object, etc...