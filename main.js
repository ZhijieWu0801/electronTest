const { app, BrowserWindow, Menu } = require('electron')
const path = require('path')

// 检查是否是开发模式
const isDev = process.env.NODE_ENV === 'development'

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    // autoHideMenuBar: true,  // 自动隐藏菜单栏（按 Alt 可临时显示）
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
    }
  })

  // 监听键盘事件，F12 打开开发者工具
  win.webContents.on('before-input-event', (event, input) => {
    if (input.key === 'F12') {
      win.webContents.toggleDevTools()
      event.preventDefault()
    }
  })

  if (isDev) {
    // 开发模式：加载 Vite 开发服务器
    win.loadURL('http://localhost:5173')
    // 打开开发者工具
    win.webContents.openDevTools()
  } else {
    // 生产模式：加载打包后的静态文件（不需要 Vite）
    const htmlPath = path.join(__dirname, 'dist-vue', 'index.html')
    console.log('加载文件路径:', htmlPath)
    win.loadFile(htmlPath)
  }
}

app.whenReady().then(() => {
  // Menu.setApplicationMenu(null)  // 完全移除菜单栏
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  app.quit()
})
