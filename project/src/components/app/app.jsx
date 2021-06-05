import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../pages/main/main-page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import PropertyPage from '../pages/property/property-page';
import FavoritesPage from '../pages/favorites/favorites-page';
import LoginPage from '../pages/login/login-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';

function App(props) {
  const { places } = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage places={places} />
        </Route>
        <Route exact path={AppRoute.PROPERTY}>
          <PropertyPage />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage />
        </Route>
        <Route exact path={AppRoute.LOGIN}>
          <LoginPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

App.propTypes = {
  places: PropTypes.array.isRequired,
};
export default App;
