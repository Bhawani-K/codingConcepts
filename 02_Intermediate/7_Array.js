var arr =['abc','bcdef','cdefghijkl','d','e']

console.log(arr.length);
//gets the length of the array
// ---------------------------------------

arr.push('qwerty')
//Adds to the end of the array, such that no change in the index of the array elements. doesnot modify the array.
// ---------------------------------------

arr.pop(); 
// removes the last element. Does not modifies the array.
// ---------------------------------------

arr.unshift('NEW Value');
// Adds element to the front, modifies the array
// ----------------------------------------

arr.shift()
// removes the 1st element, doesnot modifies the array
// ----------------------------------------


arr.indexOf('c')
//gets the position of the element in an array.
// If the element is not found in the array, it returns -1.
// uses strict equality '===' for comparision.
// ---------------------------------------

arr.includes('d')  //true
// to check if the item exists in the Array, 
// returns boolean value
// -----------------------------------------------

// Converts anything to Array'
console.log(Array.from('Bhawani_K'));

// ----------------------------------------------

/**************************************************************
 * Transform an Array
 ****************************************************************/

// Map
// It calls the function for each element of the array and returns the array of results.
let mapArr = arr.map(item => item.length)
console.log(mapArr);

// ---------------------------

// sort()
console.log(arr.sort());
// which sorts the array in place, changing its element order.
// Modifies the array.
// -----------------------------

// console.log(arr);



