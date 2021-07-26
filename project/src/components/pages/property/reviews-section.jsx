import React from 'react';
import PropTypes from 'prop-types';

import { OfferType, ReviewType } from '../../../types';
import Review from './review';
import Form from './form';
import { connect } from 'react-redux';
import { isLoggedIn } from '../../../services/api';

function ReviewsSection(props) {
  const { reviews, offer, authorizationStatus } = props;

  const reviewsList = reviews.map((review) => (
    <Review key={review.id} review={review} />
  ));

  const isAuthorized = isLoggedIn(authorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviewsList.length}</span>
      </h2>
      <ul className="reviews__list">{reviewsList}</ul>
      {isAuthorized ? <Form offer={offer} /> : ''}
    </section>
  );
}

ReviewsSection.propTypes = {
  reviews: PropTypes.arrayOf(ReviewType).isRequired,
  offer: OfferType,
  authorizationStatus: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  reviews: state.comments,
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = () => ({});

export { ReviewsSection };

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsSection);
