import React from 'react';
import PropTypes from 'prop-types';
import City from './city';
import { CityType } from '../../../types';

function CitiesList(props) {
  const { cities } = props;

  const citiesList = cities.map((city) => <City key={city.id} city={city} />);

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">{citiesList}</ul>
    </section>
  );
}

CitiesList.propTypes = {
  cities: PropTypes.arrayOf(CityType).isRequired,
};

export default CitiesList;
