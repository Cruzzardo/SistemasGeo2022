var coordenadas = {
    lat: 0,
    lng: 0
};

var propiedades = {
    center: coordenadas,
    zoom: 2
};

function obtieneMarcadores(){
    const markers = [
        {
            name: "México",
            longitude: "-99.1276",
            latitude: "19.427"
        }, {
            name: "Brasil",
            longitude: "-47.9292",
            latitude: "-15.7801"
        }, {
            name: "España",
            longitude: "-3.70327",
            latitude: "40.4167"
        }
    ];
    return markers;
};

function iniciaMapa(){
    const map = new google.maps.Map(document.getElementById('map'),propiedades);

    const marcadores = obtieneMarcadores();

    console.log(marcadores);

    for( marcador of  marcadores){

        let marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(marcador.latitude, marcador.longitude),
            title: marcador.name
        });
    }
};

const centerCoordinates = ol.proj.fromLonLat([-3.74922, 40.463667,]);
const initialZoom = 5


const view = new ol.View({
  center: centerCoordinates,
  zoom: initialZoom
})

const osmLayer = new ol.layer.Tile({
  source: new ol.source.OSM()
})

const map = new ol.Map({
  target: 'map',
  layers: [osmLayer],
  view: view
});


function zoomTo(coordinates, zoom) {
  map.getView().setCenter(coordinates)
  map.getView().setZoom(zoom);
}

let initViewButton = document.getElementById('init-view');
initViewButton.addEventListener('click', () => zoomTo(centerCoordinates, initialZoom));

function getZoomLevel() {
  let currentZoom = Math.round(map.getView().getZoom());

  alert(`Current Zoom Level: ${currentZoom}`)
}

let viewZoomButton = document.getElementById('view-zoom');
viewZoomButton.addEventListener('click', getZoomLevel);

function getCurrentExtent() {
  let currentExtent = map.getView().calculateExtent(map.getSize());
  let projectionCode = map.getView().getProjection().code_;
  let transformExtent = ol.proj.transformExtent(currentExtent, projectionCode, 'EPSG:4326');

  alert(`Extend: ${transformExtent.toString()}`)
}

let viewExtentButton = document.getElementById('view-extent');
viewExtentButton.addEventListener('click', getCurrentExtent);