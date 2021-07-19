import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import PropertyCard from '../../property-card/property-card';
import { CityType, OfferType } from '../../../types';
import Header from '../../header/header';
import Map from './map';
import CitiesList from './cities-list';
import {
  Amsterdam,
  Brussels,
  Cologne,
  Dusseldorf,
  Hamburg,
  Paris,
} from '../../../mocks/cities';
import Sorting from './sorting';

function MainPage(props) {
  const { offers, city } = props;

  const [hoverCard, setHoverCard] = useState({});

  const cards = offers.map((offer) => (
    <PropertyCard
      key={offer.id}
      offer={offer}
      onMouseEnter={() => setHoverCard(offer)}
      onMouseLeave={() => setHoverCard(null)}
    />
  ));

  const offersCount = offers.length;

  return (
    <div className="page page--gray page--main">
      <Header />
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList
            cities={[Paris, Cologne, Brussels, Amsterdam, Hamburg, Dusseldorf]}
          />
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offersCount} places to stay in {city.name}
              </b>
              <Sorting />
              <div className="cities__places-list places__list tabs__content">
                {cards}
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map offers={offers} hoverCard={hoverCard} />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

MainPage.propTypes = {
  offers: PropTypes.arrayOf(OfferType).isRequired,
  city: CityType,
};

const mapStateToProps = (state) => ({ offers: state.offers, city: state.city });

const mapDispatchToProps = (dispatch) => ({});

export { MainPage };
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
