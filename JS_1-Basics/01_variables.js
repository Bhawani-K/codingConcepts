const accountId = 34217;
let accountEmail = "bk@gmail.com"
var accountPassword = "12345"
accountCity = "BAM"
let accountState;

// accountId = 258  // can not be reassigned.
accountEmail="qwe@gmail.com"
accountPassword="456321"
accountCity="BBSR"

/*
    Prefer not to use var, because of issue in block and functional scope.
*/

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])