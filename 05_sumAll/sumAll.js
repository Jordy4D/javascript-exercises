const sumAll = function(startInt, endInt) {

    let sumArray = [];
    let sum = 0;
    let arrayStart = parseInt(startInt);
    let arrayEnd = parseInt(endInt);


    if (arrayStart < 0) {
        return 'ERROR';
    } else {
        for (let i = arrayStart; i <= arrayEnd; i++) {
            sumArray.push(i);
        }
    }
    
    sumArray.forEach( num => {
        sum += num;
    })

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
