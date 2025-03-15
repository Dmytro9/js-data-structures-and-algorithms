function fizzBuzzArray(num: number): any[] {
  let res: any[] = [];

  for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      res.push("FizzBuzz");
    } else if (i % 3 === 0) {
      res.push("Fizz");
    } else if (i % 5 === 0) {
      res.push("Buzz");
    } else {
      res.push(i);
    }
  }

  return res;
}

console.log(fizzBuzzArray(5)); // [1, 2, "Fizz", 4, "Buzz"]
console.log(fizzBuzzArray(15)); // [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
