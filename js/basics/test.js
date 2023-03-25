function sockMerchant(n, ar) {
  // Write your code here
  const dup = []
  for(let i=0; i < n-1; i++){
      for(let j=i+1; j <n -1; j++){
          if(dup.indexOf(j) === -1  && dup.indexOf(i) === -1 && ar[i] === ar[j]){
              dup.push(j);
              break
          }
      }
  }
  return dup.length;
}

console.log(sockMerchant(7, [1,2,1,2,1,2,3]))