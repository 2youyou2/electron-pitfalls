'use strict';

const electron = require('electron');
const spawn = require('child_process').spawn;
const path = require('path');
const fs = require('fs');

let processArgv, entryFile;

if ( process.argv.length < 3 ) {
  console.error('Please specified an application folder');
  return;
}

entryFile = process.argv[2];
entryFile = path.join(entryFile, 'main.js');

if ( !fs.existsSync(entryFile) ) {
  console.error(`Can not find entry file ${entryFile}`);
  return;
}

processArgv = process.argv.slice(3);

let args = [entryFile].concat(processArgv);

let app = spawn(electron, args, {
  stdio: 'inherit'
});

app.on('close', () => {
  // User closed the app. Kill the host process.
  process.exit();
});
