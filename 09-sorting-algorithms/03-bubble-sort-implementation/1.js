const array = [5, 4, 2, 1, 10];

function bubbleSort(arr) {
  let swapped = false;

  while(!swapped) {
    swapped = true;

    for (let i=0; i<arr.length; i++) {
      const curr = arr[i];
      const next = arr[i+1];
      if (curr > next) {
        arr[i] = next;
        arr[i+1] = curr;
        swapped = false;
      }
    }
    
  }

  return arr;
}

const result = bubbleSort(array);

console.log(result);
