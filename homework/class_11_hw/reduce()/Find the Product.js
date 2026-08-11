let numbers = [2, 3, 4, 5];

let result = numbers.reduce((total, num) => {
  return total * num;
}, 1);

console.log(result);