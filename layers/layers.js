ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([189593.232292, 6094004.504378, 2095654.690800, 7190925.452064]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 0.700000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Stadiums_1 = new ol.format.GeoJSON();
var features_Stadiums_1 = format_Stadiums_1.readFeatures(json_Stadiums_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Stadiums_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Stadiums_1.addFeatures(features_Stadiums_1);
var lyr_Stadiums_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Stadiums_1, 
                style: style_Stadiums_1,
                popuplayertitle: "Stadiums",
                interactive: true,
                title: '<img src="styles/legend/Stadiums_1.png" /> Stadiums'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Stadiums_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Stadiums_1];
lyr_Stadiums_1.set('fieldAliases', {'qc_id': 'qc_id', 'stad. name': 'stad. name', 'city': 'city', 'year': 'year', 'capacity': 'capacity', 'link': 'link', 'country': 'country', 'photo': 'photo', 'Stad promo': 'Stad promo', });
lyr_Stadiums_1.set('fieldImages', {'qc_id': 'Hidden', 'stad. name': 'TextEdit', 'city': 'TextEdit', 'year': 'Range', 'capacity': 'TextEdit', 'link': 'TextEdit', 'country': 'TextEdit', 'photo': 'ExternalResource', 'Stad promo': 'TextEdit', });
lyr_Stadiums_1.set('fieldLabels', {'stad. name': 'inline label - always visible', 'city': 'inline label - always visible', 'year': 'inline label - always visible', 'capacity': 'inline label - always visible', 'link': 'inline label - always visible', 'country': 'inline label - always visible', 'photo': 'inline label - always visible', 'Stad promo': 'inline label - always visible', });
lyr_Stadiums_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});