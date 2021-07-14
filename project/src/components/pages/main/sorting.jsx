import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { ActionCreator, ActionType } from '../../../store/action';

export function Sorting(props) {
  const [opened, setOpened] = useState(false);

  const { runSorting } = props;

  const openSorting = () => {
    setOpened(!opened);
  };

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span onClick={openSorting} className="places__sorting-type" tabIndex="0">
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom places__options--${
          opened ? 'opened' : 'closed'
        }`}
      >
        <li
          className="places__option places__option--active"
          tabIndex="0"
          onClick={(e) => {
            e.stopPropagation();
            runSorting(ActionType.SORTING_POPULAR);
            openSorting();
          }}
        >
          Popular
        </li>
        <li
          className="places__option"
          tabIndex="0"
          onClick={(e) => {
            e.stopPropagation();
            runSorting(ActionType.SORTING_ASC);
            openSorting();
          }}
        >
          Price: low to high
        </li>
        <li
          className="places__option"
          tabIndex="0"
          onClick={(e) => {
            e.stopPropagation();
            runSorting(ActionType.SORTING_DESC);
            openSorting();
          }}
        >
          Price: high to low
        </li>
        <li
          className="places__option"
          tabIndex="0"
          onClick={(e) => {
            e.stopPropagatgition();
            runSorting(ActionType.SORTING_TOP_RATING);
            openSorting();
          }}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
}

Sorting.propTypes = {
  runSorting: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  runSorting(type) {
    dispatch(ActionCreator.runSorting(type));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
