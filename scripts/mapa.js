/*
  - para este codigo del mapa, utilizo la api de 'openstreetmap'
  
  Si los servicios de geolocalización están disponibles:

  - este codigo es para saber la ubicacion del usuario que esta viendo en este momento nuestra pagina web.

  - para más información sobre la geolocalizacion, poner en el navegador:
  getCurrentPosition y nos llevara a la pagina (https://developer.mozilla.org/es/docs/Web/API/Geolocation/getCurrentPosition).

  - se puede dar el caso de que el navegador no nos de las coordenadas, porque el usuario no a permitido
  dar su ubicacion cuando el navegador se lo a preguntado. Para esto, creamos una condicion:

  - si nos permite y nos da las coordenadas ejecutamos la funcion 'sucess', insertamos el mapa, definimos las
  imagenes de los iconos de las ubicaciones y creamos el trayecto.

  - sino, ejecutamos la funcion 'error', mostramos el mapa pero sin la ruta.

  - las opciones son para:

  * enableHighAccuracy: true (para poder ver la posicion más exacta de la ubicacion)

  * timeout: 5000 (valor por defecto en milisegundos)

  * maximumAge: 0 (valor = 0, para no coger ningun posicionamiento de caché)
*/

/* Para averiguar si tenemos coordenadas de ubicacion, llama a 'getCurrentPosition' para obtenerlas */
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(sucess, error, options);
}
else {
  alert("Los servicios de geolocalización no están disponibles");
}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function sucess(position) {
  /* Para obtener las coordenadas de la ubicación actual del usuario */
  var latitude = position.coords.latitude;
  var longitude = position.coords.longitude;

  /* Ubicación de Alzira */
  // var latitude = 39.15224816712692;
  // var longitude = -0.4315280432444942;

  /* este alert, es para comprobar las coordenadas que obtengo de la posicion actual */
  // alert(latitude + ' ' + longitude);

  /* Iniciamos mapa en las coordenadas del usuario */
  var map = L.map('map', {
    center: [latitude, longitude],
    zoom: 14
  });

  /* Aplicamos capa/tipo de mapa */
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    maxZoom: 17
  }).addTo(map);


  /* Definimos un icono inicio */
  var inicio = L.icon({
    iconUrl: '../assets/images/img_contac_map/leaf-orange.png',
    shadowUrl: '../assets/images/img_contac_map/leaf-shadow.png',

    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  /* Definimos un icono final */
  var final = L.icon({
    iconUrl: '../assets/images/img_contac_map/leaf-green.png',
    shadowUrl: '../assets/images/img_contac_map/leaf-shadow.png',

    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  /* Definimos un icono intermedio */
  var track = L.icon({
    iconUrl: '../assets/images/img_contac_map/leaf-red.png',
    shadowUrl: '../assets/images/img_contac_map/leaf-shadow.png',

    iconSize: [38, 95], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
  });

  /*
    Trazamos ruta:
    (draggable: true) quiere decir, que el icono de la ubicacion puede moverse y cambiar de posicion,
    esto hace que el usuario pueda buscar nuevas rutas alternativas. Con este mapa se tiene la opcion
    de cambiar las ubicaciones e ir desde el punto que quieras hasta el destino que quieras, trazandose
    dicha ruta (a partir de la ruta especificada al inicio de mostrarse el mapa).

    para obtener puntos intermedios que hemos creado, hay que pinchar en el lugar que queramos del trayecto
    y aparecerá un icono intermedio para ponerlo en el punto de la ruta por donde queramos que pase el trayecto.
    (puedes poner tantos puntos intermedios como quieras) o (cambiar de posicion los existentes).
  */
  var control = L.Routing.control({
    waypoints: [
      L.latLng(latitude, longitude),
      L.latLng(38.99998, -0.16316) // Ubicación de Gandía
    ],
    language: 'es',
    createMarker: function (i, wp, nWps) {
      switch (i) {
        case 0:
        return L.marker(wp.latLng, {
          icon: inicio,
          draggable: true
        }).bindPopup("<b>" + "Inicio" + "</b>");

      case nWps - 1:
        return L.marker(wp.latLng, {
          icon: final,
          draggable: true
        }).bindPopup("<b>" + "Destino" + "</b>");

      default:
        return L.marker(wp.latLng, {
          icon: track,
          draggable: true
        }).bindPopup("<b>" + "Waypoint" + "</b>");
      }
    }
  }).addTo(map);
}

function error() {
  var map = L.map('map', {
    center: [37.17059, -3.60552],
    zoom: 17
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var marker = L.marker([38.99998, -0.16316]).bindPopup('Aquí esta el local').openPopup().addTo(map);
}