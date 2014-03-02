Ext.define('prueba.view.Places',{
    extend:'Ext.Panel',
    xtype:'places',

    config:{
        title:'Lugares',
        iconCls:'maps',
        layout: 'fit',
        items:[
            {
                xtype:'titlebar',
                title:'Comercios',
                docked:'top'
            },
            {
                xtype:'list',
                store:'Places',
                id: 'dataList',
                styleHtmlContent:true,
                itemTpl:[
                    '<div class="comercioItem">',
                    '	<div class="comercioTitle">',
                    '    	<div class="comercioName">',
                    '        	<p>{nombre}</p>',
                    '        </div>',
                    '        <div class="followIcon">',
                    '        </div>',
                    '    </div>',
                    '    ',
                    '    <div class="comercioBody">',
                    '    	<div class="imageContainer">',
                    '        	<img class="imageStyle" src="http://upload.wikimedia.org/wikipedia/commons/a/a7/Logotipo_Nike.jpg"/>',
                    '        </div>',
                    '        ',
                    '        <div class="container">',
                    '            <div class="comercioBodyTitle">',
                    '                <h1>{identificador}</h1>',
                    '            </div>',
                    '                  ',
                    '            <div class="comercioDescription">',
                    '                <p>{descripcion}</p>  ',
                    '            </div>',
                    '        </div>',
                    '        ',
                    '        ',
                    '    </div>',
                    '</div>    ',
                    ''
                ]


                //itemTpl:'{nombre}, {descripcion}'
//                itemTpl: [
//                    "<img class='photo' src='http://www.ibm.com/mobilefirst/us/en/bin/images/pillar-icon-development.png' width='40' height='40'/>",
//                    "{nombre}<br/>",
//                    "&nbsp;",
//                    "<small>{descripcion}</small>"
//                ]
            }
        ]
    }


});