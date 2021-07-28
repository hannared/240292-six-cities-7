import React, { useState } from 'react';
import { useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { createComment } from '../../../store/api-actions';
import { OfferType } from '../../../types';
import { ActionCreator } from '../../../store/action';

const MAX_LENGTH = 300;
const MIN_LENGTH = 50;

function Form(props) {
  const { onSubmit, offer, formInProgress, error } = props;

  const [rating, setRating] = useState(0);
  const [text, setText] = useState('');

  const commentRef = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onSubmit(offer, text, rating);

    setText('');
    setRating('');
  };

  const handleTextChange = (evt) => {
    setText(evt.target.value);
  };

  const onValidate = () => {
    if (text.length < MIN_LENGTH) {
      return true;
    }
    return !text || !rating;
  };

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="5"
          id="5-stars"
          type="radio"
          checked={rating === 5}
          onChange={() => setRating(5)}
          rating={rating}
          disabled={formInProgress}
        />
        <label
          htmlFor="5-stars"
          className="reviews__rating-label form__rating-label"
          title="perfect"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="4"
          id="4-stars"
          type="radio"
          checked={rating === 4}
          onChange={() => setRating(4)}
          rating={rating}
          disabled={formInProgress}
        />
        <label
          htmlFor="4-stars"
          className="reviews__rating-label form__rating-label"
          title="good"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="3"
          id="3-stars"
          type="radio"
          checked={rating === 3}
          onChange={() => setRating(3)}
          rating={rating}
          disabled={formInProgress}
        />
        <label
          htmlFor="3-stars"
          className="reviews__rating-label form__rating-label"
          title="not bad"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="2"
          id="2-stars"
          type="radio"
          checked={rating === 2}
          onChange={() => setRating(2)}
          rating={rating}
          disabled={formInProgress}
        />
        <label
          htmlFor="2-stars"
          className="reviews__rating-label form__rating-label"
          title="badly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>

        <input
          className="form__rating-input visually-hidden"
          name="rating"
          value="1"
          id="1-star"
          type="radio"
          checked={rating === 1}
          onChange={() => setRating(1)}
          rating={rating}
          disabled={formInProgress}
        />
        <label
          htmlFor="1-star"
          className="reviews__rating-label form__rating-label"
          title="terribly"
        >
          <svg className="form__star-image" width="37" height="33">
            <use xlinkHref="#icon-star"></use>
          </svg>
        </label>
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        ref={commentRef}
        maxLength={MAX_LENGTH}
        value={text}
        onChange={handleTextChange}
        disabled={formInProgress}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{' '}
          <span className="reviews__star">rating</span> and describe your stay
          with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={onValidate()}
          onClick={handleSubmit}
        >
          Submit
        </button>
        <p>{error}</p>
      </div>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  offer: OfferType,
  formInProgress: PropTypes.bool.isRequired,
  error: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  formInProgress: state.formInProgress,
  error: state.error,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit(offer, comment, rating) {
    dispatch(ActionCreator.setFormInProgress(true));
    dispatch(createComment(offer, comment, rating));
  },
});

export { Form };

export default connect(mapStateToProps, mapDispatchToProps)(Form);
