function countVowels(str: string): number { 
  const vowels = "aeiou";
  let res = 0;

  for (let i=0; i<str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      res++;
    }
  }

  return res;
};

console.log(countVowels('hello')); // 2
console.log(countVowels('why')); // 0
console.log(countVowels('mississippi')); // 4
