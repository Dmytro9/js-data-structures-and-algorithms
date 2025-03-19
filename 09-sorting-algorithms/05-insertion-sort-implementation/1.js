function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    // current element
    const curr = arr[i];

    // last sorted index
    let j = i - 1;

    while (j >= 0 && arr[j] > curr) {
      arr[j+1] = arr[j];
      j--;
      
      // arr[j+1] = curr; // no diff in result ??
    }

    arr[j+1] = curr;
  }

  return arr;
}

const array = [4, 3, 2, 10, 12, 1, 5, 6];
// const array1 = [3, 4, 2, 10, 12, 1, 5, 6];
const result = insertionSort(array);

console.log(result);