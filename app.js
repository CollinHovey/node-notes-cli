const fs = require('fs');
const data = require('./data.json');
const userFunction = process.argv[2];
const add = require('./add');
const update = require('./update');
const remove = require('./delete');

if (userFunction === 'read') {
  console.log('READ FUNCTION');

  for (let x in data.notes) {
    console.log(x + ':',data.notes[x])

  }
} else if (userFunction === 'create') {
  add();
} else if (userFunction === 'update') {
  update();
} else if (userFunction === 'delete') {
  remove();
}
