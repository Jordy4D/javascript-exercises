const reverseString = function(string) {
    const stringSplit = string.split('');
    const revString = stringSplit.reverse();
    const rejoinString = revString.join('');

    return rejoinString;
};

// Do not edit below this line
module.exports = reverseString;
