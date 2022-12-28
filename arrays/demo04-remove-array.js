let { numbers } = require('./data.js');

// removendo final
numbers.pop();

//removendo inicio
for (let i = 0; i < numbers.length; i++) {
  numbers[i] = numbers[i + 1];
}

console.log(numbers);

numbers.shift();

////Removendo primeira posição e reindexando

Array.prototype.reIndex = function (myArray) {
  const newArray = [];
  for (let i = 0; i < myArray.length; i++) {
    if (myArray[i] !== undefined) {
      newArray.push(myArray[i]);
    }
  }
  return newArray;
};

Array.prototype.removeFirstPosition = function () {
  for (let i = 0; i < this.length; i++) {
    this[i] = this[i + 1];
  }
  return this.reIndex(this);
};
numbers = numbers.removeFirstPosition();

console.log(numbers);
