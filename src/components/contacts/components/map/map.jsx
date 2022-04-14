import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import * as S from './map.styled';


import {useEffect, useRef} from 'react';
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
  const mapRef = useRef(null);

  useEffect(() => {
    if (mapRef && mapRef.current) {
    const map = L.map(mapRef.current, { zoomControl: false }).setView({
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
    }
  }, [mapRef]);

  return (
    <S.MapWrapper ref={mapRef}>
    </S.MapWrapper>
  );
}

export default Map;


