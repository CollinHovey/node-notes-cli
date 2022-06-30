const fs = require('fs');
const data = require('./data-test.json');
const userFunction = process.argv[2];
const updatedNote = process.argv[4];
const updatedId = process.argv[3]


if (userFunction === 'update') {
  data.notes[updatedId] = updatedNote;
  fs.writeFile('data-test.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
    console.log('Data has been created!');
  });

}
