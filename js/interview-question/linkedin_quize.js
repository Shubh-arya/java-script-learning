/**
 * Q1: function is not in as the member here therefore can not be accessed as a property 
 */
const foo = {
    bar(){
      console.log("Hello, world!");
    },
    name: "Albert",
    age: 26,
  }

var test = foo
console.log(test.bar)

/**
 * Q2: Reference error as typeOf is not defined in the file.
 */
// console.log(typeOf(42))

/**
 * Q3: 
 */

setTimeout(() => {
    //  alert("Hey")
    console.log("Hey")     
 }, 100);

 /**
  * Q4: find the sum when default values are given
  */
  function sum(num1, num2 = 2, num3 = 3){
    return num1 + num2 + num3;
  }
  
  let values = [1,5];
  let total = sum(4, ...values); //10
  console.log(total)

/**
 * Q5: Array spread
 */

 const x = [1,2];
 const y = [5,7];
 const z = [...x, ...y];
 console.log(z); // 1.2.5.7
 
 /**
  * Q6: object key map
  */

const person = { name: "Dave", age: 40, hairColor: "blue" };
const result = Object.keys(person).map(x => x.toUpperCase());
console.log(result) 

/**
 * Q7: Lexical scope of the variable
 */

 const myFunc = () =>{
    const a = 2;
    return () => console.log("a is " + a);
  };
  const a = 1;
  const testQ7 = myFunc();
  testQ7();