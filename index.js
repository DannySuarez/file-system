const fs = require('fs');
const { join } = require('path');

// fs.readFile('./hi', { encoding: 'utf8' }, (err, data) => {
//   console.error(err);
//   console.log(data);
// });

// fs.writeFile('./hi', 'i was added to the file', (err) => {
//   if(err) throw err;
//   fs.readFile('./hi', { encoding: 'utf8' }, (err, data) => {
//     console.log(data);
//   });
//   console.log('The file has been saved!');
// });

fs.readFile(join(__dirname, 'hi'), { encoding: 'utf8' }, (err, data) => {
  if(err) return console.error(err);
  console.log('yay');
  fs.writeFile(join(__dirname, 'hi-copy'), data, err => {
    if(err) return console.log(err);
    console.log(data);
  });
});

function copy(src, dest, callback) {
  fs.readFile(src, { encoding: 'utf8' }, (err, data) => {
    if(err) return callback(err);

    fs.writeFile(dest, data, err => {
      callback(err);
    });
  });
}

module.exports = { copy };
