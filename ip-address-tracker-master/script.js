
let searchBtn = document.querySelector('.imageDiv');
let ipAddress = document.querySelector('.ipAddress');
let timezone = document.querySelector('.timezone');
let isp = document.querySelector('.isp');


let latitutde = '';
let langitude = '';
let map;
let t = false;
async function getLocation() {
  let location = document.querySelector('.location');
  let userInput = document.querySelector('.input').value;
  if (map !== undefined && map !== null) {
   map = map.remove();
  }
  /*
  var container = L.DomUtil.get('map');
       if(container != null){
         container._leaflet_id = null;
       } */
 let response = await fetch(`https://geo.ipify.org/api/v2/country,city,vpn?apiKey=at_Wn2jjzrFpgEhhziyUqb9HqoRzgOMe&ipAddress=${userInput}`);
 let res = await response.json();
 latitutde = res.location.lat;
 langitude = res.location.lng;
   map = L.map('map').setView([latitutde, langitude], 13);
   const myIcon = L.icon( {
     iconUrl: 'images/icon-location.svg',
     iconSize: [40, 50],
     iconAnchor: [25, 16]
   })
   let marker = L.marker([latitutde, langitude], {icon: myIcon}).addTo(map);
   L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
       maxZoom: 19,
       attribution: '© OpenStreetMap'
   }).addTo(map);

   ipAddress.textContent = res.ip;
   timezone.textContent = 'UTC ' + res.location.timezone;
   isp.textContent = res.isp;
   location.innerHTML = `${res.location.city}, ${res.location.region}`;

}

searchBtn.addEventListener('click', (e) => {
   getLocation();
})

/*
const searchBtn = document.querySelector('.imageDiv');
const userInput = document.querySelector('.input').value;
const isp = document.querySelector('.isp');
const timezone = document.querySelector('.timezone');
const ipAddress = document.querySelector('.ipAddress');
const location = document.querySelector('.location');
*/
