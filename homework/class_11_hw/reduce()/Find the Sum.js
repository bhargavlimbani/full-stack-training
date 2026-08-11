let numbers = [10, 20, 30, 40, 50];

let result = numbers.reduce((total, num) => {
  return total + num;
}, 0);

console.log(result);