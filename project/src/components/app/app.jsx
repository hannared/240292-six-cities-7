import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../pages/main/main-page';

function App(props) {
  const { places } = props;

  return <MainPage places={places} />;
}

App.propTypes = {
  places: PropTypes.array.isRequired,
};
export default App;
