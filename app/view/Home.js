Ext.define('prueba.view.Home', {
    extend: 'Ext.form.Panel',
    xtype: 'home',
//    requires: [
//        'Ext.TitleBar'
//    ],
    config: {
        title: 'Home',
        iconCls:'home',
        layout:'fit',
        scrollable: true,

        items:[
            {
                xtype:'titlebar',
                title:'Inicio',
                docked:'top'
            },
            {
                title: 'Contact',
                iconCls: 'user',
                method:'POST',
                standardSubmit:'true',
//                success:function(){
//                    alert("formulario enviado");
//                },
                xtype: 'formpanel',
                url: 'http://192.168.1.131/portal/mobile/lib/returnvalue.php',
                layout: 'vbox',
                id:"login_form",

                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Contact Us',
                        instructions: '(email address is optional)',
                        items: [
                            {
                                xtype: 'textfield',
                                label: 'Name',
                                name:"nombre",
                                id:'nombre'
                            },
                            {
                                xtype: 'emailfield',
                                label: 'Email',
                                name:"nombre",
                                id:'email'
                            }
                        ]
                    },
                    {
                        xtype: 'button',
                        text: 'Send',
                        id:'do_login_button'
//                        ui: 'confirm',
//                        handler: function() {
//                            this.up('formpanel').submit();
//                        }
                    }
                ]

            }
        ]

    }
});
