const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce(((total, item) => total + item), 0);
};

const multiply = function(arr) {
  return arr.reduce(((product, item) => product * item), 1);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let factorial = 1;
  for (let i = 1; i <= a; i++) factorial *= i;
  return factorial;
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
