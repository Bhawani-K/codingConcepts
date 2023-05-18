console.log(this);  // {}, this is not the same everytime.

/*************************
 * currently, we are running in node Env => value of 'this' is {}
 * if the same when executed in Browser, it behaves differently. There the global scope is 'window' object
 * 
 ************************* */

var game = 'basketball'
function sayHi() {
    var name = 'bhawani_K'
    console.log(this);
}
sayHi()