let mapita = L.map('map').setView([-26.18489, -58.17313], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mapita)

document.getElementById('select-location').addEventListener('change', function(c){
    let coordenadas = c.target.value.split(",");
    mapita.flyTo(coordenadas, 13);
})