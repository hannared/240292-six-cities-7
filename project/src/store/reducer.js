import { AuthorizationStatus, DEFAULT_CITY } from '../const';
import { ActionType } from './action';
import { orderBy } from 'lodash';

const initialState = {
  city: DEFAULT_CITY,
  offers: [],
  // offers: offers.filter((offer) => offer.city.name === DEFAULT_CITY.name),
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload,
        offers: state.offers.filter(
          (offer) => offer.city.name === action.payload.name,
        ),
      };
    case ActionType.GET_OFFERS:
      return {
        ...state,
        offers: state.offers.filter(
          (offer) => offer.city.name === action.payload.name,
        ),
      };

    case ActionType.SORTING_POPULAR:
      return state;

    case ActionType.SORTING_ASC:
      return {
        ...state,
        offers: orderBy(state.offers, ['price'], ['asc']),
      };

    case ActionType.SORTING_DESC:
      return {
        ...state,
        offers: orderBy(state.offers, ['price'], ['desc']),
      };

    case ActionType.SORTING_TOP_RATING:
      return {
        ...state,
        offers: orderBy(state.offers, ['rating'], ['desc']),
      };

    case ActionType.REQUIRED_AUTHORIZATION:
      return {
        ...state,
        authorizationStatus: action.payload,
      };

    case ActionType.LOGOUT:
      return {
        ...state,
        authorizationStatus: AuthorizationStatus.NO_AUTH,
      };

    case ActionType.SET_OFFERS:
      return {
        ...state,
        offers: action.payload,
        isDataLoaded: true,
      };

    default:
      return state;
  }
};

export { reducer };
