const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function buscar(numero) {
  baixo = 0;
  alto = numeros.length - 1;

  numeros.forEach((item) => {
    meio = (baixo + alto) / 2;
    chute = numeros[meio];

    if (chute === item) {
      return chute;
    } else if (chute > item) {
      alto = meio - 1;
    } else {
      baixo = meio + 1;
    }
  });
}

console.log(buscar(3));
