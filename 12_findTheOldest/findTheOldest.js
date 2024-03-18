const findTheOldest = function(array) {
    const d = new Date();
    let year = d.getFullYear();

    array.forEach(function (obj) {
        if (obj.yearOfDeath == undefined) {
            obj.yearOfDeath = year;
        }
        
        obj.age = (obj.yearOfDeath - obj.yearOfBirth)

    })

    array.sort((a, b) => b.age - a.age)
    return array[0]

};

// Do not edit below this line
module.exports = findTheOldest;
