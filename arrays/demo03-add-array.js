const { numbers } = require('./data.js');
// add final
numbers[numbers.length] = 10;
numbers.push(11);
numbers.push(12, 13);

console.log(numbers);

// add inicio
Array.prototype.insetFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};
numbers.insetFirstPosition(-1);

console.log(numbers);

numbers.unshift(-2);
numbers.unshift(-4, -3);

console.log(numbers);
