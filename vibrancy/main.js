'use strict';

const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

let win

app.on('ready', () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    vibrancy: 'dark',
    // backgroundColor: '#333', // NOTE: this will make vibrancy effect no use at all.
  });

  win.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }))
});

app.on('window-all-closed', () => {
  app.quit()
})
