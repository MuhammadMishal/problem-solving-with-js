// problem 7 : Check if a string is a Palindrome .....

// without function...........
let str = "madam";
let reverseStr = "";
for (let i = str.length - 1; i >= 0; i--) {
  let letter = str[i];
  reverseStr = reverseStr + letter;
}
console.log(reverseStr);
if (str === reverseStr) {
  console.log("palindrome");
} else {
  console.log("Not Palindrome");
}

// With function

function isPalindrome(word) {
  let reverseStr = "";
  for (let i = word.length - 1; i >= 0; i--) {
    let letter = word[i];
    reverseStr = reverseStr + letter;
  }
  console.log(reverseStr);
  if (word === reverseStr) {
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome("programming"));
