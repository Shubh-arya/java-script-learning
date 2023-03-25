function userDetails(username) {
  if (username) {
    console.log(salary); // undefined due to hoisting
    console.log(age); // ReferenceError: Cannot access 'age' before initialization
    let age = 30;
    var salary = 10000;
  }
  console.log(salary); //10000 (accessible to due function scope)
  console.log(age); //error: age is not defined(due to block scope)
}
// userDetails('John');

// let counter = 1;
// switch(x) {
//   case 0:
//     let name;
//     break;

//   case 1:
//     let name; // SyntaxError for redeclaration.
//     break;
// }

let counter = 1;
switch (x) {
  case 0: {
    let name;
    break;
  }
  case 1: {
    let name; // SyntaxError for redeclaration.
    break;
  }
}

//IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined. The signature of it would be as below,
(function () {
  var message = "IIFE";
  console.log(message);
})();
console.log(message);
