Ext.define('prueba.store.Places',{
    extend:'Ext.data.Store',
    config:{
        model:'prueba.model.Place',
        autoLoad:'true',
        proxy:{
            type:'ajax',
            url:'http://192.168.1.131/portal/mobile/lib/get_comercios.php?usuario=7',
            reader:{
                type:'json',
                rootProperty:''
            }
        }
//        data:[
//            {
//                name:'name1',
//                description:'description1'
//            },
//            {
//                name:'name2',
//                description:'description2'
//            },
//            {
//                name:'name3',
//                description:'description3'
//            },
//            {
//                name:'name4',
//                description:'description4'
//            }
//        ]

    }
});