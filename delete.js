const fs = require('fs');
const data = require('./data.json');
const userFunction = process.argv[2];

const remove = () => {
  const WhatTodelete = process.argv[3];
  delete data.notes[WhatTodelete];
  fs.writeFile('data.json', JSON.stringify(data, null, 2), err => {
    if (err) throw err;
    console.log('Data has been deleted!');
  });
}

module.exports = remove;
