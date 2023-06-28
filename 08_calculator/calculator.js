const factorialMap = new Map();
factorialMap.set(0, 1);  
factorialMap.set(1, 1);

const add = function(int1, int2) {
	return int1 + int2;
};

const subtract = function(int1, int2) {
	return int1 - int2;
};

const sum = function(arr) {
	let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
};

const multiply = function(...args) {
  let total = 1;
  for (let i = 0; i < args.length; i++) {
    total *= args[i];
  }
  return total;
};

const power = function(int1, int2) {
	return Math.pow(int1, int2);
};

const factorial = function(int) {
  let val = factorialMap.get(int);
  if (val === undefined) {
    val = int * factorial(int - 1);
    factorialMap.set(int, val);
  }
    return val;
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
