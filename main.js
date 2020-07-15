const { app, BrowserWindow, ipcMain } = require('electron');

app.on('ready', () => {
  console.log('app is ready');

  let win = new BrowserWindow({
    width: 600,
    height: 400,
    webPreferences: {
      nodeIntegration: true
    }
  });

  win.loadURL(`file://${__dirname}/app/index.html`);
});

app.on('window-all-closed', () => {
  app.quit();
});

let aboutWindow = null;
ipcMain.on('abrir-janela-sobre', () => {
  if (!aboutWindow) {
    aboutWindow = new BrowserWindow({
      width: 300,
      height: 220,
      alwaysOnTop: true,
      frame: false,
      webPreferences: {
        nodeIntegration: true
      }
    });

    aboutWindow.on('closed', () => aboutWindow = null);
  }

  aboutWindow.loadURL(`file://${__dirname}/app/sobre.html`);
})

ipcMain.on('fechar-janela-sobre', () => {
  aboutWindow.close();
})