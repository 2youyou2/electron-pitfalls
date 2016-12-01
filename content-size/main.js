'use strict';

const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win1, win2;

app.on('ready', () => {
  win1 = new BrowserWindow({
    useContentSize: true,
    x: 100,
    y: 100,
    width: 400,
    height: 300,
    minWidth: 400,
    minHeight: 300,
  });

  win1.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));

  win2 = new BrowserWindow({
    useContentSize: false,
    x: 510,
    y: 100,
    width: 400,
    height: 300,
    minWidth: 400,
    minHeight: 300,
  });

  win2.loadURL(url.format({
    pathname: path.join(__dirname, 'index2.html'),
    protocol: 'file:',
    slashes: true
  }));
});

app.on('window-all-closed', () => {
  app.quit()
});
