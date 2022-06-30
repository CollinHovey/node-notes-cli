const fs = require('fs');
const data = require('./data-test.json');
const userFunction = process.argv[2];
const add = process.argv[3];


if (userFunction === 'create') {
  data.notes[data.nextId] = add;
  data.nextId++;
  fs.writeFile('data-test.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
    console.log('Data has been created!');
  });

}
