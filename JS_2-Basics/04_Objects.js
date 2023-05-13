// const user = new Object()   //Singleton Object
const user = {}  //Non-Singleton object

user.id = '123abc'
user.name = 'Bhawani_K'
user.isLoggedIn = true
// console.log(user);

const user2 = {
    email: 'abc@gmsil.com',
    fullName: {
        firstname: 'abc',
        lastName: 'qwe'
    }
}
// console.log(user2.fullName);

const obj1 = { 1: 'A', 2: 'B', 3: 'C' }
const obj2 = { 9: 'k', 8: 'y' }
const obj4 = { 7: 'k', 6: 'y' }


// const obj3 = {obj1, obj2} 
const obj3  = Object.assign({},obj1, obj2, obj4)  // copies the properties from one or more source objects to target objects. This returns the modified target object.
// console.log(obj3);


const obj5 = {...obj1,...obj2} //Spread Operator
// console.log(obj5);


const usersObj = [
    {
        name:'A',
        age:12
    },
    {
        name:'B',
        age:12
    },
    {
        name:'C',
        age:12
    },
    {
        name:'D',
        age:12
    },
]
// console.log(usersObj[1].name);

// console.log(user);
// console.log(Object.keys(user));  // fetches Keys from user Obj
// console.log(Object.values(user)); // fetches values from user Obj
// console.log(Object.entries(user)); // converts each key-value into an array.
console.log(user.hasOwnProperty('isLoggedIn'));


