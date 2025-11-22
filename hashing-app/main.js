const { app, BrowserWindow, dialog } = require('electron');
const path = require('path');

function createWindow() {
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });
  
  win.loadFile('index.html');

  win.once('ready-to-show', () => {
    win.show();
  });

  win.on('close', event => {
    const choice = dialog.showMessageBoxSync(win, {
      type: 'question',
      buttons: ['Cancel', 'Close'],
      title: 'Confirm',
      message: 'Are you sure you want to close the window?' 
    });

    if (choice === 0) {
      event.preventDefault();
    }
  });

  win.on('closed', () => {
    console.log('Window closed');
    win = null;
  });

  win.on('focus', () => {
    console.log('Window focused');
  });

  win.on('blur', () => {
    console.log('Window lost focus');
  });

  win.on('resize', () => {
    const [width, height] = win.getSize();
    console.log(`Window resized to ${width} x ${height}`);
  });

  win.on('move', () => {
    const [x, y] = win.getPosition();
    console.log(`Window moved to (${x}, ${y})`);
  });

  win.on('unresponsive', () => {
    console.log('Window became unresponsive');

    dialog.showMessageBox(win, {
      type: 'warning',
      title: 'App Not Responding',
      message: 'This application is not responding. You may choose to close it or wait a bit longer.',
      buttons: ['Wait', 'Quit']
    }).then(result => {
      if (result.response === 1) {
        win.destroy();
      }
    });
  });

  win.on('responsive', () => {
    console.log('Window is responsive again');
  });
}

app.whenReady().then(() => {
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
