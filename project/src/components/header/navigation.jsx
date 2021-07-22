import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { AppRoute, AuthorizationStatus } from '../../const';
import { logout } from '../../store/api-actions';

function Navigation(props) {
  const { authorizationStatus, onLogout } = props;

  const isAuthenticated = authorizationStatus !== AuthorizationStatus.NO_AUTH;

  if (isAuthenticated) {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link
              to={AppRoute.FAVORITES}
              className="header__nav-link header__nav-link--profile"
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>

              <span className="header__user-name user__name">
                Oliver.conner@gmail.com
              </span>
            </Link>
          </li>
          <li className="header__nav-item">
            <a className="header__nav-link" href="/#">
              <span className="header__signout">
                <Link
                  className="result-logout__link"
                  onClick={() => {
                    onLogout();
                  }}
                  to="/"
                >
                  Sign out
                </Link>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    );
  } else {
    return (
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" href="/#">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">
                <Link to={AppRoute.LOGIN}>Sign in</Link>
              </span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

Navigation.propTypes = {
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  onLogout() {
    dispatch(logout());
  },
});

export { Navigation };

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
