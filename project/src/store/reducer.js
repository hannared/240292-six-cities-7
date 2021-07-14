import { DEFAULT_CITY } from '../const';
import { ActionType } from './action';
import offers from '../mocks/offers';
import { orderBy } from 'lodash';

const initialState = {
  city: DEFAULT_CITY,
  offers: offers.filter((offer) => offer.city.name === DEFAULT_CITY.name),
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload,
        offers: offers.filter(
          (offer) => offer.city.name === action.payload.name,
        ),
      };
    case ActionType.GET_OFFERS:
      return {
        ...state,
        offers: offers.filter(
          (offer) => offer.city.name === action.payload.name,
        ),
      };

    case ActionType.SORTING_POPULAR:
      return {
        ...state,
        offers: offers,
      };

    case ActionType.SORTING_ASC:
      return {
        ...state,
        offers: orderBy(offers, ['price'], ['asc']),
      };

    case ActionType.SORTING_DESC:
      return {
        ...state,
        offers: orderBy(offers, ['price'], ['desc']),
      };

    case ActionType.SORTING_TOP_RATING:
      return {
        ...state,
        offers: orderBy(offers, ['rating'], ['desc']),
      };

    default:
      return state;
  }
};

export { reducer };
