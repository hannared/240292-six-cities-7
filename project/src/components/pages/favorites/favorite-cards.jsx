import React from 'react';
import PropTypes from 'prop-types';
import { OfferType } from '../../../types';
import FavoritePlaceCard from './favorite-place-card';

function FavoriteCards(props) {
  const { city, offers } = props;

  const favoriteCards = offers.map((offer) => (
    <FavoritePlaceCard key={offer.id} offer={offer} />
  ));
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="/#">
            <span>{city}</span>
          </a>
        </div>
      </div>

      <div className="favorites__places">{favoriteCards}</div>
    </li>
  );
}

FavoriteCards.propTypes = {
  city: PropTypes.string.isRequired,
  offers: PropTypes.arrayOf(OfferType).isRequired,
};

export default FavoriteCards;
