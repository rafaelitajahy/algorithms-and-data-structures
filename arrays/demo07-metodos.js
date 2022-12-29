//concat

const zero = 0;
const numerosPositivos = [1, 2, 3];
const numerosNegativos = [-3, -2, -1];
const numeros = numerosNegativos.concat(zero, numerosPositivos);
console.log(numeros);

//Interação
const isEven = (x) => x % 2 === 0;

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

//every
numbers.every(isEven); //itera pelos elementos do array até que a função devolva false

//some
numbers.some(isEven); //itera pelos elementos do array até que a função devolva true

//forEach
numbers.forEach((x) => console.log(x % 2 === 0)); //mesmo que usar um laço for

//map
const myMap = numbers.map(isEven); //devolve um novo array com um resultado
console.log(myMap);

//filter

const evenNumbers = numbers.filter(isEven); //devolve um novo array com os elemntos true
console.log(evenNumbers);

//reduce

const totalNum = numbers.reduce((previous, current) => previous + current);
console.log(totalNum);

// ES2015

//for...of

for (const n of numbers) {
  console.log(n % 2 === 0 ? 'even' : 'odd');
}

//@@iterator
let iterator = numbers[Symbol.iterator]();
console.log(iterator.next().value); // 1
console.log(iterator.next().value); // 2
console.log(iterator.next().value); // 3
console.log(iterator.next().value); // 4
console.log(iterator.next().value); // 5

for (const n of iterator) {
  console.log(n);
}

// entries, keys e values de array
let aEntries = numbers.entries();
for (const n of aEntries) {
  console.log(n);
}

const aKeys = numbers.keys();
console.log(aKeys.next());
for (const n of aKeys) {
  console.log(n);
}

const aValues = numbers.values();
console.log(aValues.next()); // {value: 1, done: false }
console.log(aValues.next()); // {value: 2, done: false }
console.log(aValues.next()); // {value: 3, done: false }

//from

let numbers2 = Array.from(numbers); //criar um novo array
let evens = Array.from(numbers, (x) => x % 2 == 0);

//of
let numbers3 = Array.of(1);
let numbers4 = Array.of(1, 2, 3, 4, 5, 6, undefined, undefined); //cria um array
let numbersCopy = Array.of(...numbers4); //copia array

//fill
numbersCopy.fill(0, 6); //preenche o array com um valor
console.log(numbersCopy);
let ones = Array(6).fill(1);

//copyWithin

let copyArray = [1, 2, 3, 4, 5, 6];
copyArray.copyWithin(0, 3);
console.log(copyArray);

// ordenação

//sort
numbers.reverse();
numbers.sort((a,b)=> a - b);
console.log(numbers);
