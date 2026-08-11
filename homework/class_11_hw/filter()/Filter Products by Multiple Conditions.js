let products = [
  { name: "Laptop", price: 60000, category: "electronics" },
  { name: "Mouse", price: 800, category: "electronics" },
  { name: "Shirt", price: 1500, category: "clothing" },
  { name: "Mobile", price: 30000, category: "electronics" },
  { name: "Shoes", price: 2500, category: "clothing" }
];

let result = products.filter((product) => {
  return product.category === "electronics" && product.price < 50000;
});

console.log(result);