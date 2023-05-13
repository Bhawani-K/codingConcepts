// Scope
// let a = 10;
// const b = 20;
// var c = 30;

// {} - dont get confused with Objects, 
// If the {} are used with function, if-else conditions or for loops etc.., the same {} called as scope.
if (true) {
    let a = 10;
    const b = 20;
    var c = 30;
}

// console.log(a);
// console.log(b);
// console.log(c);


function one() {
    const userName = 'Bhawani_K'
    function two() {
        const website = 'youtube'
        console.log(userName);
    }
    // console.log(website); //not defined, because the scope of website is over in function Two.
    // two()
}
one()
// =============================================================


// function Expression, if the function has been assigned to the variable
// console.log(functionexp(1993));  // Cannot access before initilization, As its being declared and hold in a variable (Hoisting Concept)

const functionexp = function (num) {
    return num + 2;
}
// console.log(functionexp(7));


// Annomoyous function 
console.log(one(7)); // As its annomoyous can be accessed

function one(num) {
    return num + 1;
}
// console.log(one(6));

