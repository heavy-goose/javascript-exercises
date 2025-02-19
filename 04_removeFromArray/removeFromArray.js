const removeFromArray = function(...args ) {
    if (args.length === 1) return args[0];
    let list = args.shift();
    let itemsToBeRemoved = args.flat(Infinity);

    result = list.filter((item) => {
        return itemsToBeRemoved.indexOf(item) === -1;
    });

    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
