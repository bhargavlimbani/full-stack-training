let cart = [
  { name: "Laptop", price: 50000 },
  { name: "Mouse", price: 500 },
  { name: "Keyboard", price: 1500 },
  { name: "Headphone", price: 2000 }
];

let result = cart.reduce((total, product) => {
  return total + product.price;
}, 0);

console.log(result);