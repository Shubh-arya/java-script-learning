var marks = [50, -20, 70, 60, 45, 30];
function findMin(arr) {
  return Math.min.apply(null, arr);
}

function findMin1(arr){
    let result = Number.MAX_VALUE
    if(Array.isArray(arr)){
        for(num of arr){
            result = result > num ? num : result
        }
    }
    return result;
}

function findMax(arr) {
  return Math.max.apply(null, arr);
}

function findMax1(arr){
    let result = Number.MIN_VALUE
    if(Array.isArray(arr)){
        for(num of arr){
            result = result < num ? num : result
        }
    }
    return result;
}

console.log(findMin1(marks));
console.log(findMax1(marks));