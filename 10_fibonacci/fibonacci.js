const fibonacci = function(num) {
    
    // works but is not as efficient, not as far off as I would
    // have thought!

    let fibStart = [0, 1];
    let value = parseInt(num)
    
    if ( value === 0 ) {
        return 0;
    } else if (value < 0) {
        return "OOPS"
    } else {

        for (let i = 0; i <= value - 2; i++) {
            let entryA = fibStart[fibStart.length - 1]
            let entryB = fibStart[fibStart.length - 2]
            
            let result = entryA + entryB
    
        fibStart.push(result)

    }

}

return fibStart[fibStart.length - 1]

};


// Do not edit below this line
module.exports = fibonacci;
