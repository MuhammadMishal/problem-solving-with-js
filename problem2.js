// sum of a range of numbers (1 to N)
// without function
let sum = 0;
for (let i = 0; i <= 7; i++) {
  sum = sum + i;
}
console.log(sum);

// with function
function sumOfNum(number) {
  let sum = 0;
  for (let i = 0; i <= number; i++) {
    sum = sum + i;
  }
  return sum;
}
console.log(sumOfNum(8));
console.log(sumOfNum(10));
