let numbers = [45, 12, 89, 34, 67, 91, 23];

let result = numbers.reduce((max, num) => {
  if (num > max) {
    return num;
  } else {
    return max;
  }
});

console.log(result);