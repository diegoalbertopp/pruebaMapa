var myApp = new Framework7();
var $$ = Dom7;
var app = new Framework7({
    root: '#app',
    name: 'My App',
    id: 'com.myapp.test',
});

var mainView = app.views.create('.view-main');

$$(document).on('deviceready', function() {
    console.log("El dispositivo está listo");
});

var map;
var marcador;
var styledMapType;

function initMap() {
    var icon;
    styledMapType = new google.maps.StyledMapType(
        [{
                "featureType": "administrative",
                "elementType": "geometry",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "poi",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "road",
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "featureType": "transit",
                "stylers": [{
                    "visibility": "off"
                }]
            }
        ]
    );

    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -36.602719, lng: -72.07758 },
        clickableIcons: false,
        mapTypeId: 'satellite',
        zoomControl: false,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        zoom: 17,
    });

    // Multiples mascadores del mapa con su latitud y longitud
    var markers = [
        ['Facultatad de Ciencias Empresariales', -36.60383655, -72.07912356],
        ['Laboratorios Centrales de Computación', -36.603891, -72.078718],
        ['Laboratorio LECYCA', -36.603584, -72.077731],
        ['Laboratorio de Procesos de Alimentos', -36.603441, -72.077435],
        ['Facultad de Ciencias de la Salud y de los Alimentos', -36.603539, -72.076748],
        ['Departamento de Ciencias Básicas', -36.603047, -72.07779],
        ['Administración Central', -36.602311, -72.077806],
        ['Gimnasio Central', -36.602083, -72.076811],
        ['Estadio UBB', -36.601055, -72.075745],
        ['Biblioteca', -36.60278, -72.07608],
        ['Aula Magna', -36.601757, -72.077355],
        ['Aulas y Laboratorios de Diseño Gráfico', -36.599724, -72.075603],
        ['Museo Marta Colvin', -36.599649, -72.075814],
        ['Escuela de Psicología', -36.599151, -72.075684],
        ['Edificio de Postgrado', -36.602652, -72.077152]
    ];

    // Despliega la información de los contendedores de cada marcador
    var infoWindowContent = [
        ['<div class="info_content">' +
            '<img src="https://nosmagazine.cl/wp-content/uploads/2018/10/ubb-face.jpg" width = "200" heigth = "100" >' +
            '<h3>Facultatad de Ciencias Empresariales</h3></div>'
        ],
        ['<div class="info_content">' +
            '<img src="http://noticias.ubiobio.cl/wp-content/uploads//IMG_4817.jpg" width = "200" heigth = "100" >' +
            '<h3>Laboratorios Centrales de Computación</h3></div>'
        ],
        ['<div class="info_content">' +
            '<img src="http://ubiobio.cl/dia/subidas/fotos/galerias/lecyca/Dibujo_lECYCA.jpg" width = "200" heigth = "100" >' +
            '<h3>Laboratorio LECYCA</h3></div>'
        ],
        ['<div class="info_content">' +
            '<img src="https://ubiobio.cl/admision/subidas/carreras/24/IMG_4668.jpg" width = "200" heigth = "100" >' +
            '<h3>Laboratorio de Procesos de Alimentos</h3></div>'
        ],
        ['<div class="info_content">' +
            '<img src="http://noticias.ubiobio.cl/wp-content/uploads//FACSA-1.jpg" width = "200" heigth = "100" >' +
            '<h3>Facultad de Ciencias de la Salud y de los Alimentos</h3></div>'
        ],
        ['<div class="info_content">' +
            '<img src="http://ubiobio.cl/dia/subidas/fotos/galerias/lecyca/le2.jpg" width = "200" heigth = "100" >' +
            '<h3>Departamento de Ciencias Básicas</h3></div>'
        ],
        ['<div class="info_content">' +
            '<img src="http://noticias.ubiobio.cl/wp-content/uploads//IMG_7316.jpg" width = "200" heigth = "100" >' +
            '<h3>Administración Central</h3></div>'
        ],
        ['<div class="info_content">' +
            '<img src="http://noticias.ubiobio.cl/wp-content/uploads/2014/03/DSC00681.jpg" width = "200" heigth = "100" >' +
            '<h3>Gimnasio Central</h3></div>'
        ],
        ['<div class="info_content">' +
            '<img src="http://noticias.ubiobio.cl/wp-content/uploads//IMG_9722-1-1024x768.jpg" width = "200" heigth = "100" >' +
            '<h3>Estadio UBB</h3></div>'
        ],
        ['<div class="info_content">' +
            '<img src="https://mapio.net/images-p/60892191.jpg" width = "200" heigth = "100" >' +
            '<h3>Biblioteca</h3></div>'
        ],
        ['<div class="info_content">' +
            '<img src="http://noticias.ubiobio.cl/wp-content/uploads//DSC_7065.jpg" width = "200" heigth = "100" >' +
            '<h3>Aula Magna</h3></div>'
        ],
        ['<div class="info_content">' +
            '<img src="http://disenog.ubiobio.cl/wp-content/uploads/2019/03/DSC_0422.jpg" width = "200" heigth = "100" >' +
            '<h3>Aulas y Laboratorios de Diseño Gráfico</h3></div>'
        ],
        ['<div class="info_content">' +
            '<img src="https://www.municipalidadchillan.cl/sitio/img/fotos/museos/museo-marta-colvin-max1.jpg" width = "200" heigth = "100" >' +
            '<h3>Museo Marta Colvin</h3></div>'
        ],
        ['<div class="info_content">' +
            '<img src="http://www.ubiobio.cl/miweb/webfile/media/232/Galer%C3%ADa/01%20Sala%20de%20Psicoterapia.jpg" width = "200" heigth = "100" >' +
            '<h3>Escuela de Psicología</h3></div>'
        ],
        ['<div class="info_content">' +
            '<img src="http://vrip.ubiobio.cl/vrip/wp-content/uploads/2016/08/DSC_2081-1024x707.jpg" width = "200" heigth = "100" >' +
            '<h3>Edificio de Postgrado</h3></div>'
        ]
    ];

    var infoWindow = new google.maps.InfoWindow(),
        marker, i;

    for (i = 0; i < markers.length; i++) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // map.fitBounds(bounds);
    }
    //Añadir marcador
    /*
    map.addListener('click', function(e) {
        placeMarkerAndPanTo(e.latLng, map);
    });*/
}

/*
 * @param
 * @return
 */

// function placeMarkerAndPanTo(latLng, map) {
//     var marker = new google.maps.Marker({
//         position: latLng,
//         map: map
//     });
//     map.panTo(latLng);
// }


/*
 * @param Position Este método acepta un objeto Position, que contiene las coordenadas GPS actuales.
 * @return lanza por consola la información sobre posición actual en el mapa
 */



// function funcionExito(position) {
//     console.log('latitude: ' + position.coords.latitude);
//     console.log('longitude: ' + position.coords.longitude);
//     console.log('Altitude: ' + position.coords.altitude);
//     console.log('Accuracy: ' + position.coords.accuracy);
//     console.log('Altitude Accuracy: ' + position.coords.altitudeAccuracy);
//     console.log('Heading: ' + position.coords.heading);
//     console.log('Speed: ' + position.coords.speed);
//     console.log('Timestamp: ' + position.timestamp);
//     console.log('--------------------------------')

//     $$("#lat").html(position.coords.latitude);
//     $$("#lgn").html(position.coords.longitude);

//     var pos = { lat: position.coords.latitude, lng: position.coords.longitude };

//     map.setCenter(pos);
//     map.setZoom(17);
//     marcador.setPosition(pos);
// }

/*
 * @param error : recibe un objeto PositionError
 * @return muestra por consola el mensaje de error
 */
// function funcionError(error) {
//     console.log("hubo un error");
// }

// var opcionesGPS = {
//     timeout: 500000,
//     enableHighAccuracy: false
// }

/* Inicializar la barra de búsqueda con parámetros
* @param el: Selector de CSS o elemento HTML del elemento de la barra de búsqueda (form class="searchbar")
         searchContainer: Selector de CSS o elemento HTML del bloque de lista para buscar.
         searchIn: Selector de CSS del campo del elemento Vista de lista donde debemos buscar.
  @return
*
*/
var searchbar = app.searchbar.create({
    el: '.searchbar',
    searchContainer: '.list',
    searchIn: '.item-title',
    on: {
        search(sb, query, previousQuery) {
            console.log(query, previousQuery);
        }
    }
});