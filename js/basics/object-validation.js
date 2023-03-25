var object = {
    "k1": "value1",
    "k2": "value2",
    "k3": "value3"
};

for (var key in object) {
    if (object.hasOwnProperty(key)) {
        console.log(key + " -> " + object[key]); // k1 -> value1 ...
    }
}

Object.entries(object).forEach((entry) => {
    console.log(entry[0], entry[1])
})

// validate object is empty
function _isEmpty(testObject){
    return JSON.stringify(testObject) === JSON.stringify({})
}

function _isEmpty1(obj) {
  if (obj) {
    return Object.entries(obj).length === 0 && obj.constructor === Object; // Since date object length is 0, you need to check constructor check as well
  } else {
    return false;
  }
}
console.log(_isEmpty1(null))


// arguments object 
function sum() {
    var argsArray = Array.prototype.slice.call(arguments);
    console.log(argsArray)
    var total = 0;
    //loop1 is the the label given to the loop so that it is more reable.
    loop1:
    for (var i = 0, len = arguments.length; i < len; ++i) {
        total += arguments[i];
    }
    return total;
}
console.log(sum(1, 2, 3)) // returns 6

// capitalize first letter
function capitalizeFirstLetter(input) {
    return input.charAt(0).toUpperCase() + input.slice(1);
}

function getDate() {
  let today = new Date();
  const dd = String(today.getDate()).padStart(2, "0");
  const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  const yyyy = today.getFullYear();

  today = mm + "/" + dd + "/" + yyyy;
  return today
}
console.log(getDate())

// Here padding is applied if the string is less than the given length and filled with value given
const testString = "Shubham Arya"
const updatedString = testString.padStart(testString.length + 3, "HI ")
console.log(testString)

const str = "This is a \
very lengthy \
sentence!";
console.log(str)
