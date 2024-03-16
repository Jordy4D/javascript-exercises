const palindromes = function (str) {

    //reduce string to letters, remove spaces and puncuation
    //reduce string to lowercase
    //create variable with str forward
    //create variable with str reverse
    //compare strings to return true or false if not the same
    //dont forget to join

    let palSplit = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '').toLowerCase().split('')
    let replaceSpace = palSplit.reduce((a, b) => b === " " ? a : a + b, "")
    
    let strForward = replaceSpace;
    let strReverse = replaceSpace.split('').reverse().join('')

    return strForward === strReverse

};


// Do not edit below this line
module.exports = palindromes;
