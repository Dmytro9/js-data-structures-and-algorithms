function isPalindrome(str: string): boolean { 
  const newStr = str.split('').reverse().join("");

  // console.log(newStr)
  return newStr === str
};

console.log(isPalindrome('madam')) // true
console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('hello')) // false
console.log(isPalindrome('')) // true
