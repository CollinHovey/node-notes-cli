const fs = require('fs');
const data = require('./data.json');
const userFunction = process.argv[2];

const update = () => {
  const updatedNote = process.argv[4];
  const updatedId = process.argv[3];
  data.notes[updatedId] = updatedNote;
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
    console.log('Data has been updated!');
  });
}

module.exports = update;
