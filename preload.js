const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
    'electronAPI', {
        turnOn: () => ipcRenderer.invoke('turnOn'),
        turnOff: () => ipcRenderer.invoke('turnOff'),
        setColor: (color) => ipcRenderer.invoke('setColor', color),
    }
)
