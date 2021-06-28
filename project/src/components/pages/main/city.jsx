import React from 'react';
import { CityType } from '../../../types';

function City(props) {
  const { city } = props;

  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="/#">
        <span>{city}</span>
      </a>
    </li>
  );
}

City.propTypes = {
  city: CityType,
};

export default City;
