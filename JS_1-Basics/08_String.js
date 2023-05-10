const hello = 'Hello'
// Way-1, string Interpolation is prefered over concatenation, 
// -> As it makes easier on the go, readable, clean
console.log(`${hello} logged using stringInterpolation`); // string Interpolation

// Way-2, by using new keyword
const sport = new String('Badminton') // here Badminton is stored as an object having keyValue pair, which helps us in getting more methods associated with it.
console.log(sport);
console.log(sport[2]); //d
console.log(sport.__proto__);

console.log(sport.length);
console.log(sport.toUpperCase());  //here it doesn't changes the original value, due to stack& heap concepts.
console.log(sport.charAt(3)); // by using index we can fetch the value of the Arg
console.log(sport.indexOf('d')); // fetch the position of the Arg

const newString = sport.substring(0,8)  // doesnot includes the 8th value or 2nd Arg
console.log(newString);

const sliceEx = sport.slice(-4)
console.log(sliceEx);

const newStr = "   nbfonfib    "
console.log(newStr);
console.log(newStr.trim());
console.log(newStr.replace('   nbfonfib    ', 'Asdf'));


const city = "BBSR,BAM,BANGLORE,MUMBAI";
console.log(city.split(','));