/**********
 * Loops, are used to iterate on properties and perform meaningful operations
 ***********/

let Arr = [1, 2, 3, 'Four', 'five', 'Six']
let obj = {
    firstName: 'Bhawani',
    lastName: 'K',
    age: 22,
}
let ArrOfObjects = [
    {
        course:'JS',
        price:1999
    },
    {
        course:'JSON',
        price:199
    }
]
let i=0;

// 1. For Loop : where it loops through a block of code a number of times.
for (let i = 0; i < Arr.length; i++) {
    const ele = Arr[i];
    console.log(ele);   // 1,2,3,Four,five,Six
}

// 2. For-in loop, loops through the properties of an object
for(let ele in obj){
    console.log(ele); //fetches the keys of an object
}

// 3. For-of loop, where it loops through the values of an iterable object
for (let ele of ArrOfObjects) {
    console.log(ele.course); // fetches the values of an object
}

// 4.While loop, loops through the block of code this gets executed only when the specified codition is true.
while(i<5){
    console.log(i);
    i++;
}

// 5. do-while loop, also loops through a block of code while 
do{
    console.log(i);
    i++;
}while (i<5)

