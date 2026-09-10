const fibonacci = function(x) {
    let prev = 0;
    let curr = 1;

    if (x < 0){
        return "OOPS";
    }
    for(let i = 0; i < x; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return prev;
};

// Do not edit below this line
module.exports = fibonacci;
