const removeFromArray = function(array, ...variable) {
    
    return array.filter( ele => !variable.includes(ele) )

};

// Do not edit below this line
module.exports = removeFromArray;

