//Array bidimensional

let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];

console.log(averageTemp);

for (let i = 0; i < averageTemp.length; i++) {
  for (let j = 0; j < averageTemp[i].length; j++) {
    console.log(averageTemp[i][j]);
  }
}

//Array multidimensional

const matrix3x3x3 = [];

for (let i = 0; i < 3; i++) {
  matrix3x3x3[i] = [];
  for (let j = 0; j < 3; j++) {
    matrix3x3x3[i][j] = [];
    for (let z = 0; z < 3; z++) {
      matrix3x3x3[i][j][z] = i + j + z;

      console.log(matrix3x3x3);
      console.log(i);
      console.log(j);
      console.log(z);
    }
  }
}

console.log(matrix3x3x3);
