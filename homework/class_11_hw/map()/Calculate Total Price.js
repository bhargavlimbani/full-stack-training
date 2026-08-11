let products = [
  { name: "Laptop", price: 50000, quantity: 2 },
  { name: "Mouse", price: 500, quantity: 3 },
  { name: "Keyboard", price: 1500, quantity: 2 }
];

let result = products.map((product) => {
  return {
    name: product.name,
    totalPrice: product.price * product.quantity
  };
});

console.log(result);