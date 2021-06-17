import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { OfferType } from '../../../types';
import useMap from '../../../hooks/useMap';

function Map(props) {
  const { offers, hoverCard } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, offers);

  const defaultCustomIcon = leaflet.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [27, 39],
    iconAnchor: [15, 30],
  });

  const currentCustomIcon = leaflet.icon({
    iconUrl: 'img/pin-active.svg',
    iconSize: [27, 39],
    iconAnchor: [15, 30],
  });

  const propertyId = offers.map((o) => o.id);

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const { location } = offer;

        leaflet
          .marker(
            {
              lat: location.latitude,
              lng: location.longitude,
            },
            {
              icon:
                hoverCard !== null && hoverCard.id === offer.id
                  ? currentCustomIcon
                  : defaultCustomIcon,
            },
          )
          .addTo(map);
      });
    }
  }, [map, propertyId]);

  return <div style={{ height: '100%' }} ref={mapRef}></div>;
}

Map.propTypes = {
  offers: PropTypes.arrayOf(OfferType).isRequired,
  hoverCard: OfferType,
};

export default Map;
