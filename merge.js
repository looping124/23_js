class MergeSort {
  constructor(list){
    // this.list = list;
    this.counter=0;     
    this.mergedArr = this.mergeSort(list);
  }
  
  mergeSort(array){
    const half = array.length/2;
    if (array.length<2) {
      return array;
    }
    const left = array.splice(0,half);
    return this.merge(this.mergeSort(left),this.mergeSort(array));
  }

  merge(left,right){
    let arr =[];
    while (left.length && right.length) {
      this.counter++;  
      if (left[0]<right[0]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
    return [ ...arr, ...left, ...right ];
  }

}

const fs = require('fs');
const nbList = process.argv[2];

function getFile() {
  try {
    const data = fs.readFileSync(nbList, 'utf8');
    return data.length>0 ? data : console.error("Empty File !");
  } catch (error) {
    console.error(error.message);
  }
}
let list = getFile().split(' ').map(number => parseInt(number,10));

console.log(new MergeSort(list));