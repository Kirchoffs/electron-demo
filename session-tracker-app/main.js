const { app, dialog, BrowserWindow } = require('electron');
const path = require('node:path');

let startTime = Date.now();

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadFile('index.html');
}

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('before-quit', () => {
  const endTime = Date.now();
  const sessionDuration = Math.floor((endTime - startTime) / 1000);
  dialog.showMessageBoxSync({
    type: 'info',
    title: 'Session Duration',
    message: `You have been using the app for ${sessionDuration} seconds.`
  });
});

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
