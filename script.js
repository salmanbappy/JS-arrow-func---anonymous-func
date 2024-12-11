//anonymous function
fun = function (a, b) {
    return a * b
}
console.log(`The result is = ${fun(2, 3)}`);
//arrow function
fun1 = (a, b) => a + b;
console.log(`The result is = ${fun1(2, 3)}`);
//no name function
(function autoWelcome() {
    console.log("Hello World");

})();