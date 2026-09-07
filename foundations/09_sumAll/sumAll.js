const sumAll = function(num1, num2) {
    let total = 0;
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    if (num1 > num2){
        let temp = num2;
        num2 = num1;
        num1 = temp;
    }
    while (num2 >= num1){
        total += num2;
        num2 -= 1;
    }
    return total;
};

// Do not edit below this line
module.exports = sumAll;
