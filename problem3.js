// factorial of a number
// without function
let number = 5;
let result = 1;
for (let i = 1; i <= number; i++) {
  result = result * i;
}
console.log(result);

// with function

function getFactorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}

console.log(getFactorial(5));
