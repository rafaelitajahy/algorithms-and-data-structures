//https://www.scaler.com/topics/bubble-sort-in-javascript/

const array = [9, 6, 2, 9, 1];

function bubbleSort(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let aux = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = aux;
      }
    }
  }
  return arr;
}

console.log(bubbleSort(array));
