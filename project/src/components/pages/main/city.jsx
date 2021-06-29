import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../../store/action';

import { CityType } from '../../../types';

function City(props) {
  const { city, onSetCity } = props;

  return (
    <li className="locations__item">
      <a
        className="locations__item-link tabs__item"
        href="/#"
        onClick={() => {
          onSetCity(city);
        }}
      >
        <span>{city.name}</span>
      </a>
    </li>
  );
}

City.propTypes = {
  city: CityType,
  onSetCity: PropTypes.func.isRequired,
};

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  onSetCity(city) {
    dispatch(ActionCreator.setCity(city));
  },
});

export { City };
export default connect(mapStateToProps, mapDispatchToProps)(City);
