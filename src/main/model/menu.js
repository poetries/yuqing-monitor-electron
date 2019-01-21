const { Menu,ipcMain,BrowserWindow} = require('electron');


//右键菜单
const contextMenuTemplate=[
    {
        label: '复制', role: 'copy' },
    {
        label: '黏贴', role: 'paste' },        
    { type: 'separator' }, //分隔线
    {
        label: '其他功能',     
        click: () => {
        console.log('click')
         }
    }
];

const contextMenu=Menu.buildFromTemplate(contextMenuTemplate);


ipcMain.on('contextmenu',function(){

    contextMenu.popup(BrowserWindow.getFocusedWindow());

})

