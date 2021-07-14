import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { ActionCreator } from '../../../store/action';

import { CityType } from '../../../types';

function City(props) {
  const { city, onSetCity, selectedCity } = props;

  return (
    <li className="locations__item">
      <a
        className={`locations__item-link tabs__item ${
          city.name === selectedCity.name ? 'tabs__item--active' : ''
        }`}
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
  selectedCity: CityType,
  onSetCity: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  selectedCity: state.city,
});

const mapDispatchToProps = (dispatch) => ({
  onSetCity(city) {
    dispatch(ActionCreator.setCity(city));
  },
});

export { City };
export default connect(mapStateToProps, mapDispatchToProps)(City);
