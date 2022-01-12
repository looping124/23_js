
function facingSunCount(buildings){
  let count = 1;
  let curr_max = buildings[0];
  for (let i = 1; i < buildings.length; i++) {      
      if (buildings[i] > curr_max) {
          count++;
          curr_max = buildings[i];
      }
  }
  return count;
}    
  let buildings = [ 7, 4, 8, 2, 9,14,5 ];
  let n = buildings.length;
  console.log(facingSunCount(buildings));