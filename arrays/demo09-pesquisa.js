let numbers = [1, 2, 3, 10, 5, 6, 13, 9, 99, 80, 10];

// indexOf e lestIndexOf
console.log('indexOf ', numbers.indexOf(10)); //3
console.log('indexOf ', numbers.indexOf(100)); //-1
console.log('lastIndexOf ', numbers.lastIndexOf(10)); //9

// find e findIndex
function multipleOf13(element, index, array) {
  return element % 13 == 0;
}

console.log(numbers.find(multipleOf13)); // 13
console.log(numbers.findIndex(multipleOf13)); //6

// includes
console.log(numbers.includes(99));
console.log(numbers.toString());
console.log(numbers.join('-'));
