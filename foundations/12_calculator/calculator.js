const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(arr) {
	return arr.reduce((total, curr) => {
    total += curr;
    return total;
  }, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, curr) => {
    total *= curr;
    return total;
  })
};

const power = function(b, e) {
	return b ** e;
};

const factorial = function(x) {
	let total = 1
  for (let y = 1; y <= x; y++) {
    total *= y;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
