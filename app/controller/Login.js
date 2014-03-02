Ext.define("prueba.controller.Login", {
        extend:"Ext.app.Controller",

        config:{
            refs:{
                do_login_ref:"#do_login_button",
                login_form_ref:"#login_form"
            },
            control:{
                do_login_ref:{
                    tap:"doLogin"
                }
            }
        },
        doLogin:function(){

            //console.log("funcion que realiza el login");
        }
});
