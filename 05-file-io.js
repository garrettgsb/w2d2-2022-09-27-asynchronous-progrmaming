const fs = require('fs');

// let counter = 0;
// counter++;
// console.log(counter);

// Basic file read
// fs.readFile('./counter', { encoding: 'utf8' }, (error, theFileContents) => {
//   if (error) { return console.log('Ahh hell.') }
//   console.log('Contents:', theFileContents);
// });


// Basic file write
// fs.writeFile('./counter', '1234', (error) => {
//   if (error) return console.log(error);
// });

const path = './counter';
const options = { encoding: 'utf8' };


handleInitialRead(oldCount => handleWrite(oldCount, handleFinalRead));

function handleInitialRead(fn) {
  fs.readFile(path, options, (readError, oldCount) => {
    if (readError) { return console.log('Ahh hell. Read error.') }
    console.log('Old count:', oldCount);
    return fn(oldCount);
  });
}

function handleWrite(oldCount, fn) {
  fs.writeFile(path, incrementFileValue(oldCount), (writeError) => {
    if (writeError) { return console.log('Ahh hell. Write error.') }
    return fn();
  });
}

function handleFinalRead() {
  fs.readFile(path, options, (readError2, newCount) => {
    console.log('New count:', newCount);
  });
}


function incrementFileValue(value) {
  return String(Number(value) + 1)
}


/*
With Promises, it's much nicer :)
fs.readFile(path, options)
  .then(handleInitialRead)
  .then(handleWrite)
  .then(handleFinalRead);
*/
