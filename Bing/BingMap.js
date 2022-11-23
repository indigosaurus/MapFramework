var navigationBarMode = Microsoft.Maps.NavigationBarMode;
var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {
    /* No need to set credentials if already passed in URL */
    navigationBarMode: navigationBarMode.compact,
    supportedMapTypes: [Microsoft.Maps.MapTypeId.road, Microsoft.Maps.MapTypeId.aerial, Microsoft.Maps.MapTypeId.grayscale, Microsoft.Maps.MapTypeId.canvasLight]
document.getElementById('printoutPanel').innerHTML =
    '<b>Map height</b> <br>' + map.getHeight() + '<br>';
document.getElementById('printoutPanel').innerHTML +=
    '<b>Map width</b> <br>' + map.getWidth() + '<br>';
document.getElementById('printoutPanel').innerHTML +=
    '<b>Map page x</b> <br>' + map.getPageX() + '<br>';
document.getElementById('printoutPanel').innerHTML +=
    '<b>Map page y</b> <br>' + map.getPageY() + '<br>';
document.getElementById('printoutPanel').innerHTML +=
    '<b>Map root element</b> <br>' + map.getRootElement().id + '<br>';
});

map.setView({
    mapTypeId: Microsoft.Maps.MapTypeId.aerial,
    center: new Microsoft.Maps.Location(56.063098907470696, -3.5009999275207515),
    zoom: 15
});
