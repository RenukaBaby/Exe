const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 1000,
    height: 750,
    webPreferences: {
      nodeIntegration: false,    // Set to false for security (standard web apps)
      contextIsolation: true,    // Safe context sandboxing
      devTools: true             // Switch to false if you want to hide developer tools (Ctrl+Shift+I)
    }
  });

  // Load your local frontend file
  win.loadFile('index.html');
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
