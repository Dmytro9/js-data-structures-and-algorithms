function findMaxNumber(arr: number[]): number {
  let res: number = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > res) {
      res = arr[i];
    }
  }

  return res;
}

function findMaxNumber1(arr: number[]): number {
  return arr.sort((a, b) => b - a)[0];
}

function findMaxNumber2(arr: number[]): number {
  return Math.max(...arr);
}

console.log(findMaxNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 10
console.log(findMaxNumber([10, 9, 8, 7, 6, 5, 4, 3, 2, 1])); // 10
console.log(findMaxNumber([1, 2, 3, 4, 5, 10, 9, 8, 7, 6])); // 10
