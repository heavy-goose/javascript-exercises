const sumAll = function(num1, num2) {
    
    if (num1 < 0 ||
        num2 < 0 || 
        typeof num1 !== "number" ||
        typeof num2 !== "number" ||
        num1 !== Math.floor(num1) ||
        num2 !== Math.floor(num2)
    ) return "ERROR";


    let lower;
    let upper;
    let sum = 0;
    if (num1 < num2) {
        lower = num1;
        upper = num2;
    } else {
        lower = num2;
        upper = num1;
    }

    for (lower; lower <= upper; lower++) sum += lower;

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
