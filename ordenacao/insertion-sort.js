//InsertionSort -> Insserção Direta
// desempenho melhor que o BubbleSort
// Eficiente:
//    listas substancialmente ordenadas
//    pequenas listas
// O(n) - O(n2)

const array = [9, 6, 2, 9, 1];

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 1; i < n; i++) {
    let current = arr[i];
    let j = i - 1;
    while (j > -1 && current < arr[j]) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = current;
  }
  return arr;
}

console.log(insertionSort(array));
