const reverseString = function(str) {
    let reversed = [];
    for (let i = 0; i < str.length; i++){
        reversed[str.length - (i + 1)] = str[i];
    }
    return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
