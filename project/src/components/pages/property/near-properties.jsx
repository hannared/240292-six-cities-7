import React from 'react';
import PropTypes from 'prop-types';

import PropertyCard from '../../property-card/property-card';
import { OfferType } from '../../../types';

function NearProperties(props) {
  const { offers } = props;

  const cards = offers.map((offer) => (
    <PropertyCard key={offer.id} offer={offer} />
  ));

  return (
    <section className="near-places places">
      <h2 className="near-places__title">Other places in the neighbourhood</h2>
      <div className="near-places__list places__list">{cards}</div>
    </section>
  );
}

NearProperties.propTypes = {
  offers: PropTypes.arrayOf(OfferType).isRequired,
};

export default NearProperties;
