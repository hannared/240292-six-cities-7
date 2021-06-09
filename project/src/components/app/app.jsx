import React from 'react';
import PropTypes from 'prop-types';
import MainPage from '../pages/main/main-page';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import PropertyPage from '../pages/property/property-page';
import FavoritesPage from '../pages/favorites/favorites-page';
import LoginPage from '../pages/login/login-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import { OfferType, ReviewType } from '../../types';

function App(props) {
  const { offers } = props;
  const { reviews } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage offers={offers} />
        </Route>
        <Route exact path={AppRoute.OFFER}>
          <PropertyPage offers={offers} reviews={reviews} />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritesPage offers={offers} />
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
  offers: PropTypes.arrayOf(OfferType).isRequired,
  reviews: PropTypes.arrayOf(ReviewType).isRequired,
};
export default App;
