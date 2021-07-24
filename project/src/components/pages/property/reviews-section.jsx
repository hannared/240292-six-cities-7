import React from 'react';
import PropTypes from 'prop-types';

import { ReviewType } from '../../../types';
import Review from './review';
import Form from './form';
import { connect } from 'react-redux';

function ReviewsSection(props) {
  const { reviews } = props;

  const reviewsList = reviews.map((review) => (
    <Review key={review.id} review={review} />
  ));

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot;{' '}
        <span className="reviews__amount">{reviewsList.length}</span>
      </h2>
      <ul className="reviews__list">{reviewsList}</ul>
      <Form />
    </section>
  );
}

ReviewsSection.propTypes = {
  reviews: PropTypes.arrayOf(ReviewType).isRequired,
};

const mapStateToProps = (state) => ({
  reviews: state.comments,
});

const mapDispatchToProps = () => ({});

export { ReviewsSection };

export default connect(mapStateToProps, mapDispatchToProps)(ReviewsSection);
