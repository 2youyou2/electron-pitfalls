'use strict';

const {app, BrowserWindow, ipcMain} = require('electron');
const path = require('path');
const url = require('url');

var id = 0;

function spawnWorker (index) {
  let win = new BrowserWindow({
    x: 100,
    y: 100,
    width: 400,
    height: 300,
    minWidth: 400,
    minHeight: 300,

    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, index),
    protocol: 'file:',
    slashes: true
  }));

  var currentID = ++id;

  console.log(`spawn worker : [${index} - ${currentID}]`);
  win.webContents.on('did-finish-load', function () {
    console.log(`finished spawn worker : ${index} - ${currentID}]`);
  });
}

ipcMain.on('spawn-worker', function (event, index) {
  spawnWorker(index);
});

app.on('ready', () => {
  spawnWorker('index.html');
});

app.on('window-all-closed', () => {
  app.quit()
});
