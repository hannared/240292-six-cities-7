import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { OfferType } from '../../../types';
import Logo from '../../logo';
import ReviewsSection from './reviews-section';
import Navigation from '../../header/navigation';
import NearbyMap from '../main/nearby-map';
import NearProperties from './near-properties';
import {
  fetchCommentsList,
  fetchNearbyOffersList,
} from '../../../store/api-actions';

function PropertyPage(props) {
  const { id } = useParams();

  const { offers, fetchComments, fetchNearbyOffers } = props;

  const property = offers.find((offer) => offer.id === id);

  fetchComments(property);
  fetchNearbyOffers(property);

  const {
    photos,
    isPremium,
    title,
    rating,
    type,
    price,
    bedrooms,
    maxAdults,
    description,
    host,
    goods,
  } = property;

  const PremiumFlag = isPremium ? (
    <div className="property__mark">
      <span>Premium</span>
    </div>
  ) : (
    ''
  );

  const ProFlag = host.isPro ? (
    <span className="property__user-status">Pro</span>
  ) : (
    ''
  );

  const goodsList = goods.map((good) => (
    <li className="property__inside-item" key={good}>
      {good}
    </li>
  ));

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
              {PremiumFlag}
              <div className="property__name-wrapper">
                <h1 className="property__name">{title}</h1>
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
                  {rating}
                </span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms}
                </li>
                <li className="property__feature property__feature--adults">
                  {maxAdults}
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">{goodsList}</ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img
                      className="property__avatar user__avatar"
                      src={host.avatar}
                      width="74"
                      height="74"
                      alt="Host avatar"
                    />
                  </div>
                  <span className="property__user-name">{host.name}</span>
                  {ProFlag}
                </div>
                <div className="property__description">
                  <p className="property__text">{description}</p>
                </div>
              </div>
              <ReviewsSection />
            </div>
          </div>
          <section className="property__map map">
            <NearbyMap hoverCard={property} />
          </section>
        </section>
        <div className="container">
          <NearProperties />
        </div>
      </main>
    </div>
  );
}

PropertyPage.propTypes = {
  offers: PropTypes.arrayOf(OfferType).isRequired,
  fetchComments: PropTypes.func.isRequired,
  fetchNearbyOffers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  fetchComments(offer) {
    dispatch(fetchCommentsList(offer));
  },

  fetchNearbyOffers(offer) {
    dispatch(fetchNearbyOffersList(offer));
  },
});

export { PropertyPage };

export default connect(mapStateToProps, mapDispatchToProps)(PropertyPage);
