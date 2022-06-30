const fs = require('fs');
const data = require('./data.json');
// console.log(data);

const userFunction = process.argv[2];
console.log(userFunction);
// console.log(process.argv);

if (userFunction === 'read') {
  console.log('READ FUNCTION');
  console.log(data.notes.length);
  for (var x = 1; x < data.notes.length; x++) {
    console.log(x);
    console.log(data.notes[x].toString());
  }
}
