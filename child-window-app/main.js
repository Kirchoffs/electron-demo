const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');

const createWindow = () => {
  const mainWin = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: 'aliceblue',
    show: false,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
  });

  const childWin = new BrowserWindow({
    width: 640,
    height: 480,
    backgroundColor: 'aliceblue',
    show: false,
    parent: mainWin,
  });

  const anotherChildWin = new BrowserWindow({
    width: 512,
    height: 384 ,
    backgroundColor: 'aliceblue',
    show: false,
    parent: mainWin,
    frame: false,
  });

  const modalWin = new BrowserWindow({
    width: 512,
    height: 384,
    backgroundColor: 'aliceblue',
    show: false,
    parent: mainWin,
    modal: true,
  });

  mainWin.loadFile('main.html');
  childWin.loadFile('child.html');
  anotherChildWin.loadFile('another-child.html');
  modalWin.loadFile('modal.html');

  mainWin.once('ready-to-show', () => {
    mainWin.show();
  });

  childWin.once('ready-to-show', () => {
    childWin.show();
  });

  anotherChildWin.once('ready-to-show', () => {
    anotherChildWin.show();
  });

  modalWin.once('ready-to-show', () => {
    modalWin.show();
  });
};

// app.on('ready', () => {
//   createWindow()
// });

app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'pong');
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
