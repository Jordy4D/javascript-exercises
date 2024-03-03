const repeatString = function(string, num) {
    let returnValue = '';
    
    if (num < 0) {
        return 'ERROR';
    };
    
    for (let i = 1; i <= num; i++) {        
        returnValue += string;
    } 
    return returnValue;
};

// Do not edit below this line
module.exports = repeatString;
