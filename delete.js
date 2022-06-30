const fs = require('fs');
const data = require('./data-test.json');
const userFunction = process.argv[2];
const WhatTodelete = process.argv[3];

console.log('Delete', WhatTodelete);

delete data.notes[WhatTodelete];
fs.writeFile('data-test.json', JSON.stringify(data, null, 2), err => {
  if (err) throw err;
  console.log('Data has been deleted!');
});
// delete 1
