import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MainPage from '../pages/main/main-page';
import { Router as BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppRoute } from '../../const';
import PropertyPage from '../pages/property/property-page';
import FavoritePage from '../pages/favorite/favorite-page';
import LoginPage from '../pages/login/login-page';
import NotFoundPage from '../pages/not-found-page/not-found-page';
import { OfferType, ReviewType } from '../../types';
import { isCheckedAuth } from '../../services/api';
import LoadingScreen from '../loading-screen/loading-screen';
import browserHistory from '../../browser-history';

function App(props) {
  const { authorizationStatus, isDataLoaded } = props;
  const { offers } = props;
  const { reviews } = props;

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return <LoadingScreen />;
  }

  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage offers={offers} />
        </Route>
        <Route exact path={AppRoute.OFFER}>
          <PropertyPage offers={offers} reviews={reviews} />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <FavoritePage offers={offers} />
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
  authorizationStatus: PropTypes.string.isRequired,
  isDataLoaded: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
  isDataLoaded: state.isDataLoaded,
  offers: state.offers,
});

export { App };
export default connect(mapStateToProps, null)(App);
