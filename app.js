const fs = require('fs');
const data = require('./data-test.json');
const userFunction = process.argv[2];

if (userFunction === 'read') {
  console.log('READ FUNCTION');

  for (let x in data.notes) {
    console.log(x + ':',data.notes[x])

  }
}
