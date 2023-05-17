var getUserRole = function(name, role) { //function can be declared to the variable.
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break;
        case "subadmin":
            return `${name} is subadmin with access to create & delete courses`
            break;
        case "testPrep":
            return `${name} is testPrep with access to create & delete tests`
            break;
        case "user":
            return `${name} is user to consume the content`
            break;

        default: return `${name} is a trial user`
            break;
    }
}
// Return executes the code successfully, but doesn't print anything.
getUserRole('bhawani_K','user')
console.log(getUserRole('bhawani_K','user'));

var getRole = getUserRole('Soni', 'admin')
console.log(getRole); // function can be used as a variable.
