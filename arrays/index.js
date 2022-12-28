const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const newNum = [-1, -2, -3];

numeros.splice(3, 3, ...newNum);

console.log(numeros);
