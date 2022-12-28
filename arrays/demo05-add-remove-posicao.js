const { numbers } = require('./data.js');

numbers.splice(5, 3); //remove

console.log(numbers);

delete numbers[0]; //undefined

console.log(numbers);

numbers.splice(5, 0, 2, 3, 4); //add

console.log(numbers);

numbers.splice(0, 8, 0, 1, 2, 3, 4, 5, 6, 7);
