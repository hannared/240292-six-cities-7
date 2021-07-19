import { useEffect, useState } from 'react';
import leaflet from 'leaflet';

function useMap(mapRef, city, offers) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (mapRef.current !== null && city !== null && map === null) {
      const location = city.location;

      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: location.latitude,
          lng: location.longitude,
        },
        zoom: location.zoom,
        zoomControl: false,
      });

      leaflet
        .tileLayer(
          'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
          {
            attribution:
              '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
          },
        )
        .addTo(instance);

      setMap(instance);
    } else {
      if (map !== null) {
        map.panTo(
          new leaflet.LatLng(city.location.latitude, city.location.longitude),
        );
      }
    }
  }, [mapRef, map, city, offers]);

  return map;
}

export default useMap;
