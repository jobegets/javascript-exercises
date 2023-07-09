const removeFromArray = function(arr,num) {
    let a = arr;
    let ind = 0;
    for(i = 0; i < a.length; i++){
        if (a[i] == num){
            ind = i;
        }
    }
    a.splice(ind, 1)
    return a;
};

// Do not edit below this line
module.exports = removeFromArray;
