function calculator(num1: number, num2: number, operator: string): number { 
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  if (operator === '*') {
    return num1 * num2;
  }
  if (operator === '/') {
    return num1 / num2;
  }

  throw new Error("Unknown operator");
};

console.log(calculator(1, 2, '+')) // 3
console.log(calculator(10, 5, '-')) // 5
console.log(calculator(2, 2, '*')) // 4
console.log(calculator(10, 5, '/')) // 2