// FizzBuzz(1 to N)
// loop through numbers from 1 to n . if a number is divisible by 3,print 'fizz' if divisible by 5 print 'buzz '; if divisible by both ,print 'fizzBuzz'; other wise print the number itself
// without function
let number = 15;
for (let i = 0; i <= number; i++) {
  console.log("i=>", i);

  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// with function
function fizzBuzz(number) {
  for (let i = 0; i <= number; i++) {
    console.log("i=>", i);

    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(20);
