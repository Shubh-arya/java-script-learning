/**
 * Have the function ArrayChallenge(arr) take the array of numbers stored in arr and determine the total number of duplicate entries. For example if the input is [1, 2, 2, 2, 3] then your program should output 2 because there are two duplicates of one of the elements.
Examples
Input: [0,-2,-2,5,5,5]
Output: 3
Input: [100,2,101,4]
Output: 0 
 *  
 */

function ArrayChallenge(arr) { 
  let count = 0;
  for(let i=0; i< arr.length -1 ; i++){
    for(let j=i+1; j< arr.length ; j++){
      if(arr[i] === arr[j]){
        count++;
      }
    }
  }
  // code goes here
  return count; 

}
   
// keep this function call here 
console.log(ArrayChallenge([0,-2,-2,5,5,5]));