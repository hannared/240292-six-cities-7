import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { OfferType } from '../../../types';
import useMap from '../../../hooks/useMap';

function Map(props) {
  const { offers } = props;
  const mapRef = useRef(null);
  const map = useMap(mapRef, offers);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [15, 30],
  });

  // const currentCustomIcon = leaflet.icon({
  //   iconUrl: 'img/pin-active.svg',
  //   iconSize: [30, 30],
  //   iconAnchor: [15, 30],
  // });

  const points = offers.map((offer) => offer.location);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker(
            {
              lat: point.latitude,
              lng: point.longitude,
            },
            {
              icon: defaultCustomIcon,
            },
          )
          .addTo(map);
      });
    }
  }, [map, offers.map((o) => o.id)]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferType).isRequired,
};

export default Map;
