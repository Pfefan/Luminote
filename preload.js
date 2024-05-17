const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
    'electronAPI', {
        turnOn: () => ipcRenderer.invoke('turnOn'),
        turnOff: () => ipcRenderer.invoke('turnOff'),
        apply: () => ipcRenderer.invoke('apply'),
        setColor: (color) => ipcRenderer.invoke('setColor', color),
        setBrightness: (brightness) => ipcRenderer.invoke('setBrightness', brightness),
        setEffect: (effect) => ipcRenderer.invoke('setEffect', effect)
    }
)
