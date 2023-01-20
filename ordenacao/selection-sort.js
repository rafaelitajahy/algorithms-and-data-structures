//Selection Sort -> Seleção
//seleciona o menor elemento e troca pelo primeiro elemento, repete até o último
//superior BubbleSort e iferior ao InsertionSort
//https://www.doabledanny.com/selection-sort-javascript
//O(n2)

const array = [9, 6, 2, 9, 1];

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    if (lowest !== i) {
      [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort(array));
