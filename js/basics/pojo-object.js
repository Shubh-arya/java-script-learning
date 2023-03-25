const obj = { counter: 0 };

// Define getters
Object.defineProperty(obj, "increment", {
  get: function () {
    return this.counter++;
  },
});
Object.defineProperty(obj, "decrement", {
  get: function () {
    return this.counter--;
  },
});

// Define setters
Object.defineProperty(obj, "add", {
  set: function (value) {
    return (this.counter += value);
  },
});
Object.defineProperty(obj, "subtract", {
  set: function (value) {
    return (this.counter -= value);
  },
});

obj.add = 10;
obj.subtract = 5;
console.log(obj.increment); //6
console.log(obj.decrement); //5
