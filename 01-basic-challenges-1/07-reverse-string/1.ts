function reverseString(str: string): string {
  const arr = str.split('');
  let res = '' 

  for (let i=str.length-1; i>=0; i--) {
    res += arr[i];
  }

  return res;
}

console.log(reverseString("hello")); // olleh
console.log(reverseString("world")); // dlrow
console.log(reverseString("")); // ''
