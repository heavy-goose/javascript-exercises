const palindromes = function (str) {
    let processed = str
    .toLowerCase()
    .split("")
    .filter(char => char.match(/[a-z0-9]/));
    return processed.join("") === processed.reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
