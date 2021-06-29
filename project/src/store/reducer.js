import { DEFAULT_CITY } from '../const';
import { ActionType } from './action';
import offers from '../mocks/offers';

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
    default:
      return state;
  }
};

export { reducer };
