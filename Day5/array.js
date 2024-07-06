let numbers = Array.of(3);
console.log(numbers.length); 

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.find(e => e % 2 == 0));

const products = [
    { name: 'Phone', price: 999 },
    { name: 'Computer', price: 1999 },
    { name: 'Tablet', price: 995 },
  ];
  
  const index = products.findIndex(product => product.price > 1000);
  
  console.log(index);
