const { contextBridge, ipcRenderer } = require('electron');

// Expose version information (already implemented)
contextBridge.exposeInMainWorld('versions', {
  node: () => process.versions.node,
  chrome: () => process.versions.chrome,
  electron: () => process.versions.electron
});

// Expose exitApp functionality for the Exit button
contextBridge.exposeInMainWorld('electronAPI', {
  exitApp: () => ipcRenderer.send('exit-app')  // Sends 'exit-app' signal to the main process
});