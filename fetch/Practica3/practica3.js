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

    var icono = {
        url : "https://media.giphy.com/media/3oEjIacPJYAJubIDLO/giphy.gif",
        scaledSize: new google.maps.Size(50,50),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0,0)
    }

    for( marcador of  marcadores){

        let marker = new google.maps.Marker({
            map: map,
            position: new google.maps.LatLng(icono),
            title: marcador.name
        });
    }
};