const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  let total = arr.reduce((a, b) => a + b, 0);
  return arr.length > 0 ? total : 0;
  
};

const multiply = function(arr) {
  return arr.reduce((a, b) => (a * b));
  
};

const power = function(a, b) {
	// return arr.reduce((a, b) => (a ** b))
  return (a ** b)
};

const factorial = function(num) {
	let f = [];
  if (num === 0 || num === 1)
    return 1;

    if (f[num] > 0)
      return f[num];

    return f[num] = factorial(num - 1) * num;
  
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
