const WeeksArray = ['Sun', 'Tue', 'Wed', 'Thu', "Fri", "Sat"]
const DaysArray = [1, 2, 3, 4, 5, 6, 7]

// DaysArray.push(WeeksArray)  // DaysArray gets added to the last of WeeksArray.
// console.log(DaysArray);
// console.log(DaysArray[7][3]);
// ------------------------------------------

// const concatArray = DaysArray.concat(WeeksArray)
// console.log(concatArray);
// ------------------------------------------


// const newHeros = [...WeeksArray, ...DaysArray]  // adds all the elements in an Array
// console.log(newHeros);
// ------------------------------------------


// const Arr1 = [1, 2, 3, [4, 5], 6, [7, 8, [9]]]
// const Arr2 = Arr1.flat(Infinity)
// console.log(Arr2);
// ------------------------------------------


// console.log(Array.isArray('Bhawani_K'));
// console.log(Array.from('Bhawani_K')); // converts in Array
// console.log(Array.from({ name: 'Bhawani_K' })); // As its unable to convert to Array, this gives []
// ------------------------------------------


let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3)); // Adds all the elements in the Array
// ------------------------------------------

