import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import { OfferType, ReviewType } from '../../../types';
import Logo from '../../logo';
import ReviewsSection from './reviews-section';
import Navigation from '../../header/navigation';
import Map from '../main/map';
import NearProperties from './near-properties';

function PropertyPage(props) {
  // const { id } = props.match.params;

  const { id } = useParams();

  const { offers, reviews } = props;

  const property = offers.find((offer) => offer.id === id);

  const { photos } = property;

  const slicedOffers = offers.slice(0, 3);

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
      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              <div className="property__image-wrapper">
                <img className="property__image" src={photos[0]} alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src={photos[1]} alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src={photos[2]} alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src={photos[3]} alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src={photos[4]} alt="Studio" />
              </div>
              <div className="property__image-wrapper">
                <img className="property__image" src={photos[5]} alt="Studio" />
              </div>
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              <div className="property__mark">
                <span>Premium</span>
              </div>
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  Beautiful &amp; luxurious studio at great location
                </h1>
                <button
                  className="property__bookmark-button button"
                  type="button"
                >
                  <svg
                    className="property__bookmark-icon"
                    width="31"
                    height="33"
                  >
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{ width: '80%' }}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">
                  4.8
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  Apartment
                </li>
                <li className="property__feature property__feature--bedrooms">
                  3 Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max 4 adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;120</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  <li className="property__inside-item">Wi-Fi</li>
                  <li className="property__inside-item">Washing machine</li>
                  <li className="property__inside-item">Towels</li>
                  <li className="property__inside-item">Heating</li>
                  <li className="property__inside-item">Coffee machine</li>
                  <li className="property__inside-item">Baby seat</li>
                  <li className="property__inside-item">Kitchen</li>
                  <li className="property__inside-item">Dishwasher</li>
                  <li className="property__inside-item">Cabel TV</li>
                  <li className="property__inside-item">Fridge</li>
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src="img/avatar-angelina.jpg"
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">Angelina</span>
                  <span className="property__user-status">Pro</span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    A quiet cozy and picturesque that hides behind a a river by
                    the unique lightness of Amsterdam. The building is green and
                    from 18th century.
                  </p>
                  <p className="property__text">
                    An independent House, strategically located between Rembrand
                    Square and National Opera, but where the bustle of the city
                    comes to rest in this alley flowery and colorful.
                  </p>
                </div>
              </div>
              <ReviewsSection reviews={reviews} />
            </div>
          </div>
          <section className="property__map map">
            <Map offers={slicedOffers} hoverCard={property} />
          </section>
        </section>
        <div className="container">
          <NearProperties offers={slicedOffers} />
        </div>
      </main>
    </div>
  );
}

PropertyPage.propTypes = {
  offers: PropTypes.arrayOf(OfferType).isRequired,
  reviews: PropTypes.arrayOf(ReviewType).isRequired,
};

export default PropertyPage;
