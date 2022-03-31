function zoomTo(coordinates, zoom) {
    map.getView().setCenter(coordinates)
    map.getView().setZoom(zoom);
}
  
let initViewButton = document.getElementById('zoom-extend');
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