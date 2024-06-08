var size = 0;
var placement = 'point';
function categories_6101_8(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case '2610.0':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,208,1,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.938}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2620.0':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,208,1,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.938}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2630.0':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,208,1,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.938}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2640.0':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,208,1,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.938}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2650.0':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,208,1,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.4579999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2660.0':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,208,1,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.938}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2670.0':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,208,1,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.938}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2680.0':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,208,1,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.938}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2690.0':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,208,1,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.938}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case '2700.0':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,208,1,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 3.4579999999999997}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_6101_8 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("elev");
    var labelText = "";
    size = 0;
    var labelFont = "7.800000000000001px \'Arial\', sans-serif";
    var labelFill = "#c69b00";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
    if (feature.get("elev") !== null) {
        labelText = String(feature.get("elev"));
    }
    
var style = categories_6101_8(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
