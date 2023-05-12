const Arr1 = [0, 1, 2, 3, 'Four', 'Five', 'Six', true]
// storing a collection of items under a single variable and all the elements perform common array operations.
// Resizeable and can mix with diff dataTypes..
// Can be accessed only through indexing.

// Array-copy operations 
    // - shallow copy
    // - shallow copy of an object whose properties share the same references
    // - such that using Stack & Heap concept. if change made in the array, it would change the orginal Array too.

    // Deep Copy
    // - which does not share the same refrence

// ways to declare Array
// 1.
const Arr2 = ["a","b","c"]
// 2.
const Arr3 = new Array(9,8,7,'Six')

console.log(Arr1[3]);

// Methods
Arr1.push(7)   // Add element towards end of the Array
console.log(Arr1);

Arr1.pop() // Removes the last element of the Array

// unShift, which leads the elements to change its position in the Array. Not suitable for large data
// can be used for todos, where we need to add the elements on the top of the array.
Arr1.unshift(9)   // Adds to the top of the Array, 

Arr1.shift()  // removes the 1st element of an Array

console.log(Arr1.includes(8)); // checks if the element is present or not.

// returns the index of the 1st occurance of the element in an Array.
console.log(Arr1.indexOf(9)); 

// join(), binds the Array and returns all the elements of an array
// this changes the typeof Array to string
const newArr = Arr1.join()
console.log(newArr);
console.log(typeof newArr);

// Slice, splice
console.log("A", Arr1);
const newArr1 = Arr1.slice(1,5) // removes the elements excluding the last index, & does not manipulates the original array.
console.log(newArr1);
console.log("B", Arr1);

const myArr2 = Arr1.splice(1,5) // removes the elements from start index to the end, & Manipulates the original Array.
console.log(myArr2);
console.log("C", Arr1);
