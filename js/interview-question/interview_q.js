/**
 * The output is 40 and NaN. Remember that diameter is a regular function, 
 * whereas the value of perimeter is an arrow function. The this keyword of a regular 
 * function(i.e, diameter) refers to the surrounding scope which is a class(i.e, Shape object). 
 * Whereas this keyword of perimeter function refers to the surrounding scope which is a 
 * window object. Since there is no radius property on window objects it returns an undefined value 
 * and the multiple of number value returns NaN value.
 */
const circle = {
  radius: 20,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

console.log(circle.diameter());
console.log(circle.perimeter());

//Negating an array with ! character will coerce the array into a boolean. 
//Since Arrays are considered to be truthy So negating it will return false.
console.log(![]); // false
console.log(['a'] + ['b']);  // "ab"
console.log([] + []); // ""
console.log(![] + []); // "false", because ![] returns false.

console.log("starting values")
console.log(+null); // 0
console.log(+undefined);// NaN
console.log(+false); // 0
console.log(+NaN); // NaN
console.log(+""); // 0

/**
 * How do you create self string using special characters
The self string can be formed with the combination of []()!+ characters. 
You need to remember the below conventions to achieve this pattern.
Since Arrays are truthful values, negating the arrays will produce false: 
![] === false
As per JavaScript coercion rules, the addition of arrays together will
 toString them: [] + [] === ""
Prepend an array with + operator will convert an array to false, 
the negation will make it true and finally converting the result will produce value '1': +(!(+[])) === 1
By applying the above rules, we can derive below conditions
 */
console.log((![]+[])[+!![]+!![]+!![]])
console.log(+!![]+!![]+!![]+!![])
console.log(+!+[])

//self
// (![] + [])[3] + (![] + [])[4] + (![] + [])[2] + (![] + [])[0]

//result
console.log((![]+[])[+!![]+!![]+!![]] + [] + (![]+[])[+!![]+!![]+!![]+!![]] + [] + (![]+[])[+!![]+!![]] + [] + (![]+[])[+![]])


// How do you remove falsy values from an array
let myArray = [true, null, 1,5, undefined, false]
myArray = myArray.filter(Boolean); // [1, 5] // is same as myArray.filter(x => x);
console.log(...myArray)

// How do you map the array values without using map method. Hint use from method
const countries = [
    { name: 'India', capital: 'Delhi' },
    { name: 'US', capital: 'Washington' },
    { name: 'Russia', capital: 'Moscow' },
    { name: 'Singapore', capital: 'Singapore' },
    { name: 'China', capital: 'Beijing' },
    { name: 'France', capital: 'Paris' },
];

const cityNames = Array.from(countries, ({ capital}) => capital);
console.log(cityNames); // ['Delhi, 'Washington', 'Moscow', 'Singapore', 'Beijing', 'Paris']

const user1 = { "name":"John", "id": 1, "city": "Delhi"};
console.log("Hello %s, your details %o are available in the object form", "John", user); // Hello John, your details {name: "John", id: 1, city: "Delhi"} are available in object

console.log('%c The text has blue color, with large font and red background', 'color: blue; font-size: x-large; background: red');

const biDimensionalArr = [11, [22, 33], [44, 55], [66, 77], 88, 99];
const flattenArr = [].concat(...biDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]

const users = [{ "name":"John", "id": 1, "city": "Delhi"}, { "name":"Max", "id": 2, "city": "London"}, { "name":"Rod", "id": 3, "city": "Paris"} ];
console.table(users);

// How do you flattening multi dimensional arrays
function flattenMultiArray(arr) {
    const flattened = [].concat(...arr);
    return flattened.some(item => Array.isArray(item)) ? flattenMultiArray(flattened) : flattened;
 }
const multiDimensionalArr = [11, [22, 33], [44, [55, 66, [77, [88]], 99]]];
const flatArr = flattenMultiArray(multiDimensionalArr); // [11, 22, 33, 44, 55, 66, 77, 88, 99]
console.log(flatArr)

// What is the easiest multi condition checking

// Verbose approach
if (input === 'first' || input === 1 || input === 'second' || input === 2) {
    someFunction();
  }

// Shortcut
function test(input) {
    if (["first", 1, "second", 2].indexOf(input) !== -1) {
      someFunction();
    }
  }
  
  function someFunction() {
    console.log("some function called!!");
  }
  console.log(test(2));

var myPrimitive = 30;
var myNonPrimitive = {};
function isPrimitive(val) {
    return Object(val) !== val;
}

isPrimitive(myPrimitive);
isPrimitive(myNonPrimitive);


//Function Constructor:
var a = 100;
function createFunction() {
    var a = 200;
    return new Function('return a;');
}
console.log(createFunction()()); // 100

//Function declaration:
var a = 100;
function createFunction() {
    var a = 200;
    return function func() {
        return a;
    }
}
console.log(createFunction()()); // 200


//Classes: reason hoisting
const user2 = new User(); // ReferenceError
class User {}


//Constructor Function:
const user3 = new User(); // No error
function User() {
}
