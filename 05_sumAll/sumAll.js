const sumAll = function(startInt, endInt) {

    // if ( !isNaN(startInt) || !isNaN(endInt) ) {
    //     return 'ERROR';
    // } else {
    //     continue;
    // }

    let sumArray = [];
    let sum = 0;
    let arrayStart;
    let arrayEnd;

    if (startInt > endInt) {
        arrayEnd = startInt;
        arrayStart = endInt;
    } else {
        arrayStart = startInt;
        arrayEnd = endInt;
    }



    if ( arrayStart < 0 || typeof startInt !== 'string' || typeof endInt !== 'string') {
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
