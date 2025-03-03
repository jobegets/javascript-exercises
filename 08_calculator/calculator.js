const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	const s = array.reduce((acc, cur) => acc + cur, 0);
  return s;
};

const multiply = function(a, b) {
  return a * b;
};

const power = function(a, b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  if (a == 0) {
    return 1;
  }
	return a * factorial(a-1);
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
