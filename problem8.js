// Problem 8 : Count Words in a sentence
// without function
let str = "Programming";
const strSplit = str.split("");
console.log(strSplit.length);
console.log(strSplit);

// With function
function wordCount(str) {
  const strSplit = str.split("");
  return strSplit.length;
}
console.log(wordCount("Programming"));
