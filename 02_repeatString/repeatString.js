const repeatString = function(text, repeats) {
    let output = "";
    if (repeats < 0) {
        output = "ERROR"
    } else {
        for (let i = 1; i <= repeats; i++) {
            output = output + text;
        }
    }
    return output
};

// Do not edit below this line
module.exports = repeatString;
