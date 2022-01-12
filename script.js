import MergeSort from './merge.js';
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