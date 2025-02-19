const reverseString = function(string) {
    let arr = string.split("");
    let reversedArray = [];
    for (let i = 0; i < arr.length; i++) {
        reversedArray.unshift(arr[i]);
    }
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
