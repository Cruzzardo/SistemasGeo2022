var coordenadas = {
    lat: 0,
    lng: 0
};

var propiedades = {
    center: coordenadas,
    zoom: 2
};

function iniciaMapa() {
    fetch('paises.json')
    .then(function(response) {
        response.json().then(function(datos) {
            const map = new google.maps.Map(document.getElementById('map'), propiedades);
            console.log(datos);
            datos.forEach( marcador => {
                console.log(marcador);
                var informacion = "<strong>País:</strong> "+ marcador.CountryName;

                var infowindow = new google.maps.InfoWindow({
                    content: informacion
                });

                /*var icono = {
                    url : "https://media.giphy.com/media/3oEjIacPJYAJubIDLO/giphy.gif",
                    scaledSize: new google.maps.Size(50,50),
                    origin: new google.maps.Point(0,0),
                    anchor: new google.maps.Point(0,0)
                }*/

                let marker = new google.maps.Marker({
                    map: map,
                    position: new google.maps.LatLng(marcador.CapitalLatitude, marcador.CapitalLongitude),
                    //icon: icono,
                    title: marcador.CountryName  
                });

                marker.addListener('click', function() {
                    infowindow.open(map, marker);
                });
            });
        });
    })
    .catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
    });
}