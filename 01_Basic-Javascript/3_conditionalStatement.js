/****************
 * if-else
 * switch
 ***************/
let voterAge = 8;

// 1. if-else
if(voterAge >= 18){
    console.log(`Voter can vote for the govt.`);
}else{
    console.log(`Voter can not vote for the govt.`);
}

// 2. Switch-case
let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    console.log(`Today is ${day}`);
    break;
  case 1:
    day = "Monday";
    console.log(`Today is ${day}`);
    break;
  case 2:
    day = "Tuesday";
    console.log(`Today is ${day}`);
    break;
  case 3:
    day = "Wednesday";
    console.log(`Today is ${day}`);
    break;
  case 4:
    day = "Thursday";
    console.log(`Today is ${day}`);
    break;
  case 5:
    day = "Friday";
    console.log(`Today is ${day}`);
    break;
  case  6:
    day = "Saturday";
    console.log(`Today is ${day}`);
}