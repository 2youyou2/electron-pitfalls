'use strict';

const electron = require('electron');
const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let win1, win2;

app.on('ready', () => {
  let displays = electron.screen.getAllDisplays()

  let primaryDisplay = electron.screen.getPrimaryDisplay();
  let externalDisplay = displays.find((display) => {
    return display.bounds.x !== 0 || display.bounds.y !== 0
  })

  if (primaryDisplay) {
    win1 = new BrowserWindow({
      width: 400,
      height: 300,
    });
    win1.setPosition( primaryDisplay.workArea.x + 50, primaryDisplay.workArea.y + 50 );
    setTimeout(() => {
      win1.center();
    }, 1000);

    win1.loadURL(url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true
    }));
  }

  if (externalDisplay) {
    win2 = new BrowserWindow({
      width: 400,
      height: 300,
    });
    win2.setPosition( externalDisplay.workArea.x + 50, externalDisplay.workArea.y + 50 );
    setTimeout(() => {
      win2.center();
    }, 1000);

    win2.loadURL(url.format({
      pathname: path.join(__dirname, 'index2.html'),
      protocol: 'file:',
      slashes: true
    }));
  }
});

app.on('window-all-closed', () => {
  app.quit()
});
