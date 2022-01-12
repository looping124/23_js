function facingSunCount(buildings){
    let count = 1;
    let curr_max = buildings[buildings.length-1];
    for (let i = buildings.length; i > 0; i--) {      
        if (buildings[i] > curr_max) {
            count++;
            curr_max = buildings[i];
        }
    }
    return count;
}    
    let buildings = [7,4,8,2,9,14,5,3,2];
    let n = buildings.length;
    console.log(facingSunCount(buildings));