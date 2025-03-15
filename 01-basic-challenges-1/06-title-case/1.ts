function titleCase(str: string): string { 
  const arr = str.toLowerCase().split(" ");

  const arr1 = arr.map(word => word[0].toUpperCase() + word.slice(1) )
  return arr1.join(" ")

};

console.log(titleCase("I'm a little tea pot")); // I'm A Little Tea Pot
console.log(titleCase('sHoRt AnD sToUt')); // Short And Stout
console.log(titleCase('HERE IS MY HANDLE HERE IS MY SPOUT')); // Here Is My Handle Here Is My Spout
