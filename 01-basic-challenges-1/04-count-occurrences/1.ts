function countOccurrences(str: string, char: string): number { 
  const res =  str.split(char).length - 1

  return res;
};

console.log(countOccurrences('hello', 'l')); // 2
console.log(countOccurrences('hello', 'z')); // 0
