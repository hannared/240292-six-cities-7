import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import Logo from '../../logo';
import { OfferType } from '../../../types';
import FavoriteCards from './favorite-cards';
import Navigation from '../../header/navigation';

function FavoritesPage(props) {
  const { offers } = props;

  const favorites = _.groupBy(_.filter(offers, 'isFavorite'), 'city.name');

  const cards = Object.keys(favorites).map((city) => {
    const os = favorites[city];

    return <FavoriteCards key={city} city={city} offers={os} />;
  });

  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo />
            <Navigation />
          </div>
        </div>
      </header>

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">{cards}</ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width="64"
            height="33"
          />
        </a>
      </footer>
    </div>
  );
}

FavoritesPage.propTypes = {
  offers: PropTypes.arrayOf(OfferType).isRequired,
};
export default FavoritesPage;
