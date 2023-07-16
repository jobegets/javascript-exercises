const findTheOldest = function(array) {
    const oldest = array.sort((p1,p2) => ((p1.yearOfDeath - p1.yearOfBirth) < (p2.yearOfDeath - p2.yearOfBirth) ? 1 : -1));
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
