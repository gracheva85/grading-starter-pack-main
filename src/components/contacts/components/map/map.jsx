import L from 'leaflet';
// import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
// import 'leaflet/dist/leaflet';
// import 'leaflet/dist/leaflet.js';
import {useEffect} from 'react';
import iconLocation from 'assets/img/icon-location.png';

const MAP_SIZE = 16;

const Location = {
  LAT: 59.968312,
  LNG: 30.317581,
};

const LEAFLET_DATA = {
  URL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  ATTRIBUTION: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
};

const MarkerDetails = {
  SIZE: [54, 68],
  ANCOR: [24, 68],
};

const Map = () => {

  useEffect(() => {
    const map = L.map('map', { zoomControl: false }).setView({
      lat: Location.LAT,
      lng: Location.LNG,
    }, MAP_SIZE,
    );

    L.tileLayer(
      LEAFLET_DATA.URL,
      {
        attribution: LEAFLET_DATA.ATTRIBUTION,
      },
    ).addTo(map);

    const pinIcon = L.icon({
      iconUrl: iconLocation,
      iconSize: MarkerDetails.SIZE,
      iconAnchor: MarkerDetails.ANCOR,
    })

    const pinMarker = L.marker(
      {
        lat: Location.LAT,
        lng: Location.LNG,
      },
      {
        draggable: true,
        icon: pinIcon,
      },
    );

    pinMarker.addTo(map);
  });

  return (
    <>

      <div
        id="map"
        style={{
          height: '336px',
          width: '649px',
        }}
      >
      </div>
    </>
  );
}

export default Map;
