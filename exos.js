function exo1(numbers,k){
  for (let i = 0; i < numbers.length; i++) {
    for (let y = i+1; y < numbers.length; y++) {
      if (numbers[i]+numbers[y]==k) {
        return true
      }      
    }
  }
  return false
}
console.log(exo1([10, 15, 3, 7],17));
console.log(exo1([1, 8, 10, 21],19))

function exo2(numbers){
  let result =0;
  for (let i = 0; i < numbers.length; i++) {
    let isTallest = true;
    for (let y = i+1; y < numbers.length; y++) {
      if (numbers[i]<numbers[y]) {
        isTallest = false;
      }      
    }
    isTallest ? result++:null;
  }
  return result
}
console.log(exo2([3, 7, 8, 3, 6, 1]));
console.log(exo2([1, 4, 5, 8]));