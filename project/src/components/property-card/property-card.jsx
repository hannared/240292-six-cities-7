import React from 'react';
import { OfferType } from '../../types';
import { Link } from 'react-router-dom';

function PropertyCard(props) {
  const { offer } = props;

  const { photos, isPremium, price, title, type, isFavorite, rating } = offer;

  const PremiumFlag = isPremium ? (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  ) : (
    ''
  );

  return (
    <article className="cities__place-card place-card" {...props}>
      {PremiumFlag}

      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img
            className="place-card__image"
            src={photos.length > 0 ? photos[0] : null}
            width="260"
            height="200"
            alt="Place"
          />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={
              isFavorite
                ? 'place-card__bookmark-button place-card__bookmark-button--active button'
                : 'place-card__bookmark-button button'
            }
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: '80%' }}></span>
            <span className="visually-hidden">{rating}</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

PropertyCard.propTypes = {
  offer: OfferType,
};

export default PropertyCard;
