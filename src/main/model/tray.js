(function () {
    const path=require('path');
    const {app,Menu,BrowserWindow,Tray, shell} = require('electron');

    //创建系统托盘

    const tray = new Tray(path.resolve(__dirname, '../../renderer/assets/lover.png'))

    //给托盘增加右键菜单
    const template= [
        {
            label: '设置',
            click: function () {
                shell.openExternal('http://blog.poetries.top')
            }
        },
        {
            label: '帮助',
            click: function () {
                shell.openExternal('http://blog.poetries.top/2019/01/06/electron-summary')
            }
        },
        {
            label: '关于',
            click: function () {
                shell.openExternal('https://github.com/poetries/yuqing-monitor-electron')
            }
        },
        {
            label: '退出',
            click: function () {
                // BrowserWindow.getFocusedWindow().webContents().send('close-main-window');
                app.quit();
            
            }
        }
    ];

    const menu = Menu.buildFromTemplate(template);
    tray.setContextMenu(menu);


    tray.setToolTip('舆情监控系统');


    //监听关闭事件隐藏到系统托盘
    // var win = BrowserWindow.getFocusedWindow();
    // win.on('close',(e)=>{
    //         if(!win.isFocused()){
    //             win=null;
    //         }else{
    //             e.preventDefault();  /*阻止应用退出*/

    //             win.hide(); /*隐藏当前窗口*/

    //         }       
    // })

    // //监听托盘的双击事件
    // tray.on('double-click',()=>{               
    //     win.show();
    // })
})()