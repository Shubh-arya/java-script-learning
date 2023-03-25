const firstOrderFunc = () => console.log("Hello, I am a First order function");
const higherOrder = (ReturnFirstOrderFunc) => ReturnFirstOrderFunc();
higherOrder(firstOrderFunc);

const unaryFunction = (a) => console.log(a + 10); // Add 10 to the given argument and display the value
unaryFunction(5);
/**
 * Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument. Currying is named after a mathematician Haskell Curry. By applying currying, a n-ary function turns it into a unary function.
 * @param {*} a : function 1 to be passed in.
 * @param {*} b : function 2 to be passed in.
 * @param {*} c : function 3 to be passed in.
 * @returns
 */
const multiArgFunction = (a, b, c) => a + b + c;
console.log(multiArgFunction(1, 2, 3)); // 6

const curryUnaryFunction = (a) => (b) => (c) => a + b + c;
curryUnaryFunction(1); // returns a function: b => c =>  1 + b + c
curryUnaryFunction(1)(2); // returns a function: c => 3 + c
curryUnaryFunction(1)(2)(3); // returns the number 6



//Impure
let numberArray = [];
const impureAddNumber = number => numberArray.push(number);
//Pure
const pureAddNumber = number => argNumberArray =>
  argNumberArray.concat([number]);

//Display the results
console.log (impureAddNumber(6)); // returns 1
console.log (numberArray); // returns [6]
console.log (pureAddNumber(7) (numberArray)); // returns [6, 7]
console.log (numberArray); // returns [6]