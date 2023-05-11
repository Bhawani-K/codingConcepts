let dateNow = new Date()
console.log(dateNow);

console.log(dateNow.toString());
console.log(dateNow.toISOString());
console.log(dateNow.toLocaleString());

console.log(typeof dateNow);
console.log(typeof dateNow.toLocaleString());

// let newDate = new Date(2023,0,23)
// console.log(newDate.toDateString());

let newDate = new Date(2023,0,23, 5,3)
console.log(newDate.toDateString());

// TimeStamp
let timeStapNow = Date.now()

console.log(Date.now());
// console.log(timeStapNow);
// console.log(newDate.getTime());
console.log(`getting time in seconds ${Date.now()/1000}`);
// console.log(Math.floor(Date.now()/1000));


// DATE
console.log(dateNow);
console.log(dateNow.getDay());
console.log(dateNow.getMonth());


