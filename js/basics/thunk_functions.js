const add = (x,y) => x + y;

const thunk = () => add(2,3);

const result = thunk() // 5
console.log(result)

// Async thunk functions
function fetchData(fn){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => fn(json))
  }
  
  const asyncThunk = function (){
     return fetchData(function getData(data){
        console.log(data)
    })
  }
  
  asyncThunk()