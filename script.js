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

// generator Function
function* generatorFunction() {
    yield "first value"
    yield "second value"
    yield "third value"
    yield "fourth value"
};
let gf = generatorFunction()
console.log(gf.next());
console.log(gf.next());
console.log(gf.next());
console.log(gf.next());
console.log(gf.next());

//Normal Function
function fun() {
    console.log(`Hello 1`);
    console.log(`Hello 2`);
    console.log(`Hello 3`);
    console.log(`Hello 4`);

}