// using new
const object1 = new Object();
object1.name = "Hello";
console.log(object1.name);

// Using object.create
const object2 = Object.create(null);
object2.name = "object2";
console.log(object2);

// using {}
const object3 = {};
object3.name = "object3";
console.log(object3);

// using function
function Object4() {
  this.name = "object4";
}
console.log(new Object4());

// Using class keyword
class Class1 {
  constructor(name) {
      this.name = name
  }
}
console.log(new Class1("Shubham"))