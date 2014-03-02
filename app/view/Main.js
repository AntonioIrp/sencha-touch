Ext.define('prueba.view.Main', {
    extend: 'Ext.tab.Panel',
    requires: [
        'Ext.TitleBar'
    ],
    config: {
        tabBarPosition: 'bottom',
        items:[
            {
                xtype:'home'
            },
            {
                xtype:'places'
            }]
    }
});
