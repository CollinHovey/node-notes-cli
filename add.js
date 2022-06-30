const fs = require('fs');
const data = require('./data.json');
const userFunction = process.argv[2];
const add = process.argv[3];

if (userFunction === 'create') {
  data.notes[data.nextId] = add;
  data.nextId++;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
    console.log('Data has been created!');
  });

}
