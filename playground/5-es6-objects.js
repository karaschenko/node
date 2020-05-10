const name = 'Andrew';
const userAge = 27;

const user = {
  name,
  age: userAge,
  location: 'Philadelphia',
};

console.log(user);

const product = {
  label: 'Red note',
  price: 3,
  stock: 201,
  salePrice: null,
}

const { label: productLabel, stock, rating = 5 } = product;
