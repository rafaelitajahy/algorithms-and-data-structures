const numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numeros);

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i + 1]) numeros[i] = numeros[i + 1];
}

console.log(numeros);
