const fs = require('fs');
const data = require('./data.json');
// console.log(data);
// console.log(data.notes[2])

const userFunction = process.argv[2];
// console.log(userFunction);
// console.log(process.argv);

if (userFunction === 'read') {
  console.log('READ FUNCTION');
  // console.log('data length:',data.notes[x].length);


  for (let x in data.notes) {
    console.log(x + ':',data.notes[x])
    // console.log('data.notes[x]:',data.notes[x]);
  }
}
