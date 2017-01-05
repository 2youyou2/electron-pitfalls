'use strict';

const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win1;

global.foo = {
  bar: 'bar'
};

app.on('ready', () => {
  win1 = new BrowserWindow({
    width: 400,
    height: 300,
  });
  win1.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
});

app.on('before-quit', () => {
  win1.destroy();
});
