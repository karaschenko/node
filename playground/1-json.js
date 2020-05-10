const fs = require('fs');

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
// };
//
// const bookJSON = JSON.stringify(book);
//
// fs.writeFileSync('1-json.json', bookJSON);

const dataBuffer = fs.readFileSync('1-json.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON);
data.name = 'Misha';
data.age = 26;
console.log(data);
const jsonString = JSON.stringify(data);
console.log(jsonString);
fs.writeFileSync('1-json.json', jsonString);
