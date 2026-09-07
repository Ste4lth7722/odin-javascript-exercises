const removeFromArray = function(arr, ...args) {
    return arr.filter((str) => !args.includes(str));
};

// Do not edit below this line
module.exports = removeFromArray;
