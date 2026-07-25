//reverse a string

// let str = "programming";
// const split = str.split("");
// console.log(split);
// const reverse = split.reverse();
// console.log(reverse);
// let reverseWord = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   let letter = str[i];
//   console.log("i->", i, letter);
//   reverseWord += letter;
// }
// console.log(reverseWord);
// with function

function reverseWord(word) {
  let reverseWord = "";
  for (let i = word.length - 1; i >= 0; i--) {
    let letter = word[i];
    console.log("i->", i, letter);
    reverseWord += letter;
  }
  return reverseWord;
}
console.log(reverseWord("Mishal"));
