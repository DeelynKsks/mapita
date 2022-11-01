let mapita = L.map('map').setView([-26.18489, -58.17313], 10);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapita)

// Creo una constante llamada select, trayendo precisamente al select
// que se encuentra dentro de archivo html, a fin de escribir más cómodo
const select = document.getElementById('select-location');

// Luego creo una función asociada al evento change del select,
// pasándole como parámetro, precisamente el evento
select.addEventListener('change', function(c){

    // Creo una constante que traiga el array del select
    const lista = c.target

    // Creo dos constantes de coordenadas, una que traiga el valor de la opción del select
    // y otra que me traiga ese mismo valor pero convertido a un array por el split
    const coordenadas1 = c.target.value
    const coordenadas2 = c.target.value.split(",");
    
    // Con el flyTo paso dos parámetros, el primero que vendrían siendo las coordenadas
    //y el segundo, un number, que vendría siendo el zoom con el que se va a visualizar el mapa
    mapita.flyTo(coordenadas2, 18);

    // Creo una variable llamada descripción, sin inicializar
    let descripcion

    // Utilizo un for para recorrer el array "lista", que hace referencia al array del select
    for (let index = 0; index < lista.length; index++) {
      
      // Creo una condición en la que si el valor(las coordenadas) de la opción escogida del select
      // es igual a un valor en el array del select, entonces asigno el id(el id está en el html) de esa opción a la variable descripción
      if (lista[index].value == coordenadas1) descripcion = lista[index].id
      
    }

    // Utilizo marker para mostrar un marcador en el mapa, indicándole las coordenadas
    // y, posteriormente, el bindPopup se encarga de que el marcador tenga una descripción por encima.
    // En este caso, la descripción, es la variable descripción, que trae el id de la opción escogida, como bien se explica arriba.
    L.marker(coordenadas2).addTo(mapita)
    .bindPopup(descripcion)
    .openPopup()

    // El que esté leyendo esto, puede proceder a probar el código hee hee

    // By Deelyn_ksks || Fernández Jeremías
})