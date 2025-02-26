const findTheOldest = function(arr) {
    const currentYear = (new Date).getFullYear();
    const sortedByAge = arr.sort((personA, personB) => {
        return ((personB.yearOfDeath ? personB.yearOfDeath : currentYear) - personB.yearOfBirth) -
        ((personA.yearOfDeath ? personA.yearOfDeath : currentYear) - personA.yearOfBirth)
    });
    return sortedByAge[0];
};
    

// Do not edit below this line
module.exports = findTheOldest;
