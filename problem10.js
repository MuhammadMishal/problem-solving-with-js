// let arr = [10, 20, 30, 40];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   sum += arr[i];
// }
// console.log("sum is :", sum);
// let avg = sum / arr.length;
// console.log("average is :", avg);

function generateAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    sum += arr[i];
  }
  let avg = sum / arr.length;
  return ("average is :", avg);
}
console.log(generateAverage([10, 20, 30, 40]));
