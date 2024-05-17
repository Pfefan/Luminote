const { app, BrowserWindow, ipcMain } = require('electron')
const { SerialPort } = require('serialport');
const path = require('path');

let port;
let rgb = [0, 0, 0];
let choosenEffect = '';

function createWindow () {
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    })
    win.loadFile('index.html')

    port = new SerialPort({ path: 'COM4', baudRate: 9600 });
}

app.whenReady().then(createWindow)

ipcMain.handle('turnOn', () => {
    if(port && port.isOpen) {
      port.write('on\n');
    }
})

ipcMain.handle('turnOff', () => {
    if(port && port.isOpen) {
        port.write('off\n');
    }
})

ipcMain.handle('setColor', (event, color) => {
    let hex = color.slice(1);

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    rgb = [r, g, b];
    choosenEffect = '';
})

