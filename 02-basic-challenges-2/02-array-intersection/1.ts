function arrayIntersection(arr1: number[], arr2: number[]): number[] {
  const intersection: number[] = [];

  // const set1 = new Set(arr1);
  // const set2 = new Set(arr2);
  // for (const value of set1) {
  //   if (set2.has(value)) {
  //     intersection.push(value);
  //   }
  // }

  // return intersection;

  arr1.forEach((value) => {
    if (arr2.includes(value) && !intersection.includes(value)) {
      intersection.push(value);
    }
  });

  return intersection;
}

console.log(arrayIntersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9])); // should return [1, 3, 5]
console.log(arrayIntersection([1, 1, 1, 1, 1], [2, 2, 2, 2, 2])); // should return []
console.log(arrayIntersection([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])); // should return [1, 2, 3, 4, 5]
