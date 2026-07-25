// check if a number is even or odd
let number = 10;
if (number % 2 == 0) {
  console.log("even number");
} else {
  console.log("Odd Number");
}

// with function
function checkEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "even number";
  } else {
    return "Odd Number";
  }
}
console.log(checkEvenOrOdd(11));
