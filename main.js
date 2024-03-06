const { app, BrowserWindow } = require('electron');

function createWindow() {
  let win = new BrowserWindow({
    icon: 'E:\\TuneWizard Car Tuning Companion\\images\\Tunewizard.ico', // Corrected path with escaped backslashes
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // Consider security implications of your context
    }
  });

  win.loadFile('index.html');

  win.on('closed', () => {
    win = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
