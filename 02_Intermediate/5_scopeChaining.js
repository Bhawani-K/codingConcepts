var name = 'bhawani_K'

console.log(`Line number----3, ${name}`);   // global scope

function greet() {
    // var name = '_bk'
    console.log(`Line number----7, ${name}`);  //functional scope
    func2()

    function func2() {
        var name = 'BK'
        console.log(`Line number----11, ${name}`);
    }
}
greet()

