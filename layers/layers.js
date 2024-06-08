var wms_layers = [];

var format_GRUPO1_0 = new ol.format.GeoJSON();
var features_GRUPO1_0 = format_GRUPO1_0.readFeatures(json_GRUPO1_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GRUPO1_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GRUPO1_0.addFeatures(features_GRUPO1_0);
var lyr_GRUPO1_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GRUPO1_0, 
                style: style_GRUPO1_0,
                popuplayertitle: "GRUPO1",
                interactive: true,
                    title: '<img src="styles/legend/GRUPO1_0.png" /> GRUPO1'
                });
var format_4107_1 = new ol.format.GeoJSON();
var features_4107_1 = format_4107_1.readFeatures(json_4107_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_4107_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_4107_1.addFeatures(features_4107_1);
var lyr_4107_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_4107_1, 
                style: style_4107_1,
                popuplayertitle: "4107",
                interactive: true,
                    title: '<img src="styles/legend/4107_1.png" /> 4107'
                });
var format_2320_2 = new ol.format.GeoJSON();
var features_2320_2 = format_2320_2.readFeatures(json_2320_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2320_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2320_2.addFeatures(features_2320_2);
var lyr_2320_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2320_2, 
                style: style_2320_2,
                popuplayertitle: "2320 ",
                interactive: true,
                    title: '<img src="styles/legend/2320_2.png" /> 2320 '
                });
var format_5128_3 = new ol.format.GeoJSON();
var features_5128_3 = format_5128_3.readFeatures(json_5128_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5128_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5128_3.addFeatures(features_5128_3);
var lyr_5128_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5128_3, 
                style: style_5128_3,
                popuplayertitle: "5128",
                interactive: true,
                    title: '<img src="styles/legend/5128_3.png" /> 5128'
                });
var format_5101_4 = new ol.format.GeoJSON();
var features_5101_4 = format_5101_4.readFeatures(json_5101_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5101_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5101_4.addFeatures(features_5101_4);
var lyr_5101_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5101_4, 
                style: style_5101_4,
                popuplayertitle: "5101",
                interactive: true,
                    title: '<img src="styles/legend/5101_4.png" /> 5101'
                });
var format_5124_5 = new ol.format.GeoJSON();
var features_5124_5 = format_5124_5.readFeatures(json_5124_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_5124_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5124_5.addFeatures(features_5124_5);
var lyr_5124_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_5124_5, 
                style: style_5124_5,
                popuplayertitle: "5124",
                interactive: true,
                    title: '<img src="styles/legend/5124_5.png" /> 5124'
                });
var format_3101_6 = new ol.format.GeoJSON();
var features_3101_6 = format_3101_6.readFeatures(json_3101_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3101_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3101_6.addFeatures(features_3101_6);
var lyr_3101_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3101_6, 
                style: style_3101_6,
                popuplayertitle: "3101",
                interactive: true,
                title: '3101'
            });
var format_3411P_7 = new ol.format.GeoJSON();
var features_3411P_7 = format_3411P_7.readFeatures(json_3411P_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3411P_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3411P_7.addFeatures(features_3411P_7);
var lyr_3411P_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3411P_7, 
                style: style_3411P_7,
                popuplayertitle: "3411P",
                interactive: true,
                    title: '<img src="styles/legend/3411P_7.png" /> 3411P'
                });
var format_6101_8 = new ol.format.GeoJSON();
var features_6101_8 = format_6101_8.readFeatures(json_6101_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_6101_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_6101_8.addFeatures(features_6101_8);
var lyr_6101_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_6101_8, 
                style: style_6101_8,
                popuplayertitle: "6101",
                interactive: true,
    title: '6101<br />\
    <img src="styles/legend/6101_8_0.png" /> 2610<br />\
    <img src="styles/legend/6101_8_1.png" /> 2620<br />\
    <img src="styles/legend/6101_8_2.png" /> 2630<br />\
    <img src="styles/legend/6101_8_3.png" /> 2640<br />\
    <img src="styles/legend/6101_8_4.png" /> 2650<br />\
    <img src="styles/legend/6101_8_5.png" /> 2660<br />\
    <img src="styles/legend/6101_8_6.png" /> 2670<br />\
    <img src="styles/legend/6101_8_7.png" /> 2680<br />\
    <img src="styles/legend/6101_8_8.png" /> 2690<br />\
    <img src="styles/legend/6101_8_9.png" /> 2700<br />'
        });
var format_2325_9 = new ol.format.GeoJSON();
var features_2325_9 = format_2325_9.readFeatures(json_2325_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2325_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2325_9.addFeatures(features_2325_9);
var lyr_2325_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2325_9, 
                style: style_2325_9,
                popuplayertitle: "2325",
                interactive: true,
                    title: '<img src="styles/legend/2325_9.png" /> 2325'
                });
var format_TOPONIMIA_10 = new ol.format.GeoJSON();
var features_TOPONIMIA_10 = format_TOPONIMIA_10.readFeatures(json_TOPONIMIA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPONIMIA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPONIMIA_10.addFeatures(features_TOPONIMIA_10);
var lyr_TOPONIMIA_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOPONIMIA_10, 
                style: style_TOPONIMIA_10,
                popuplayertitle: "TOPONIMIA",
                interactive: true,
                title: 'TOPONIMIA'
            });

lyr_GRUPO1_0.setVisible(true);lyr_4107_1.setVisible(true);lyr_2320_2.setVisible(true);lyr_5128_3.setVisible(true);lyr_5101_4.setVisible(true);lyr_5124_5.setVisible(true);lyr_3101_6.setVisible(true);lyr_3411P_7.setVisible(true);lyr_6101_8.setVisible(true);lyr_2325_9.setVisible(true);lyr_TOPONIMIA_10.setVisible(true);
var layersList = [lyr_GRUPO1_0,lyr_4107_1,lyr_2320_2,lyr_5128_3,lyr_5101_4,lyr_5124_5,lyr_3101_6,lyr_3411P_7,lyr_6101_8,lyr_2325_9,lyr_TOPONIMIA_10];
lyr_GRUPO1_0.set('fieldAliases', {'id': 'id', 'left': 'left', 'top': 'top', 'right': 'right', 'bottom': 'bottom', '2014-I': '2014-I', });
lyr_4107_1.set('fieldAliases', {'fid': 'fid', 'proyecto': 'proyecto', 'symbol': 'symbol', 'fecha': 'fecha', 'ruleid': 'ruleid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_2320_2.set('fieldAliases', {'fid': 'fid', });
lyr_5128_3.set('fieldAliases', {'fid': 'fid', 'RULE ID': '512812 ', 'NMG': '512806', });
lyr_5101_4.set('fieldAliases', {'fid': 'fid', });
lyr_5124_5.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'nombre_geo': 'nombre_geo', 'estado_dre': 'estado_dre', 'proyecto': 'proyecto', 'symbol': 'symbol', 'fecha': 'fecha', 'dispersion': 'dispersion', 'ruleid': 'ruleid', 'pk_cue': 'pk_cue', 'globalid': 'globalid', });
lyr_3101_6.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'tipo_via': 'tipo_via', 'estado_sup': 'estado_sup', 'numero_car': 'numero_car', 'accesibili': 'accesibili', 'nombre_geo': 'nombre_geo', 'proyecto': 'proyecto', 'symbol': 'symbol', 'fecha': 'fecha', 'ruleid': 'ruleid', 'pk_cue': 'pk_cue', 'globalid': 'globalid', 'eje_vial': 'eje_vial', 'NOMBRE GEO': 'NOMBRE GEO', });
lyr_3411P_7.set('fieldAliases', {'fid': 'fid', });
lyr_6101_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'elev': 'elev', });
lyr_2325_9.set('fieldAliases', {'fid': 'fid', 'NMG': '23507 ', 'RULE ID': '232513 ', });
lyr_TOPONIMIA_10.set('fieldAliases', {'fid': 'fid', 'NMG': '85006 ', });
lyr_GRUPO1_0.set('fieldImages', {'id': 'TextEdit', 'left': 'TextEdit', 'top': 'TextEdit', 'right': 'TextEdit', 'bottom': 'TextEdit', '2014-I': 'TextEdit', });
lyr_4107_1.set('fieldImages', {'fid': 'TextEdit', 'proyecto': 'TextEdit', 'symbol': 'TextEdit', 'fecha': 'DateTime', 'ruleid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_2320_2.set('fieldImages', {'fid': 'TextEdit', });
lyr_5128_3.set('fieldImages', {'fid': 'TextEdit', 'RULE ID': 'Range', 'NMG': 'TextEdit', });
lyr_5101_4.set('fieldImages', {'fid': 'TextEdit', });
lyr_5124_5.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'nombre_geo': 'TextEdit', 'estado_dre': 'TextEdit', 'proyecto': 'TextEdit', 'symbol': 'TextEdit', 'fecha': 'TextEdit', 'dispersion': 'TextEdit', 'ruleid': 'TextEdit', 'pk_cue': 'TextEdit', 'globalid': 'TextEdit', });
lyr_3101_6.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'tipo_via': 'TextEdit', 'estado_sup': 'TextEdit', 'numero_car': 'TextEdit', 'accesibili': 'TextEdit', 'nombre_geo': 'TextEdit', 'proyecto': 'TextEdit', 'symbol': 'TextEdit', 'fecha': 'TextEdit', 'ruleid': 'TextEdit', 'pk_cue': 'TextEdit', 'globalid': 'TextEdit', 'eje_vial': 'TextEdit', 'NOMBRE GEO': 'TextEdit', });
lyr_3411P_7.set('fieldImages', {'fid': 'TextEdit', });
lyr_6101_8.set('fieldImages', {'fid': 'TextEdit', 'id': 'Range', 'elev': 'TextEdit', });
lyr_2325_9.set('fieldImages', {'fid': 'TextEdit', 'NMG': 'TextEdit', 'RULE ID': 'Range', });
lyr_TOPONIMIA_10.set('fieldImages', {'fid': 'TextEdit', 'NMG': 'TextEdit', });
lyr_GRUPO1_0.set('fieldLabels', {'id': 'no label', 'left': 'no label', 'top': 'no label', 'right': 'no label', 'bottom': 'no label', '2014-I': 'no label', });
lyr_4107_1.set('fieldLabels', {'fid': 'no label', 'proyecto': 'no label', 'symbol': 'no label', 'fecha': 'no label', 'ruleid': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_2320_2.set('fieldLabels', {'fid': 'no label', });
lyr_5128_3.set('fieldLabels', {'fid': 'no label', 'RULE ID': 'no label', 'NMG': 'no label', });
lyr_5101_4.set('fieldLabels', {'fid': 'no label', });
lyr_5124_5.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'nombre_geo': 'no label', 'estado_dre': 'no label', 'proyecto': 'no label', 'symbol': 'no label', 'fecha': 'no label', 'dispersion': 'no label', 'ruleid': 'no label', 'pk_cue': 'no label', 'globalid': 'no label', });
lyr_3101_6.set('fieldLabels', {'fid': 'no label', 'objectid': 'no label', 'tipo_via': 'no label', 'estado_sup': 'no label', 'numero_car': 'no label', 'accesibili': 'no label', 'nombre_geo': 'no label', 'proyecto': 'no label', 'symbol': 'no label', 'fecha': 'no label', 'ruleid': 'no label', 'pk_cue': 'no label', 'globalid': 'no label', 'eje_vial': 'no label', 'NOMBRE GEO': 'no label', });
lyr_3411P_7.set('fieldLabels', {'fid': 'no label', });
lyr_6101_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'elev': 'no label', });
lyr_2325_9.set('fieldLabels', {'fid': 'no label', 'NMG': 'no label', 'RULE ID': 'no label', });
lyr_TOPONIMIA_10.set('fieldLabels', {'fid': 'no label', 'NMG': 'no label', });
lyr_TOPONIMIA_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});