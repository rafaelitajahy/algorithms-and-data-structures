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
