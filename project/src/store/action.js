import { AppRoute } from '../const';

export const ActionType = {
  SET_CITY: 'city/set',
  GET_OFFERS: 'offers/get',
  SET_OFFERS: 'offers/set',
  SORTING_POPULAR: 'sorting/popular',
  SORTING_ASC: 'sorting/asc',
  SORTING_DESC: 'sorting/desc',
  SORTING_TOP_RATING: 'sorting/top',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'user/redirectToRoute',
};

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),

  runSorting: (type) => ({
    type: type,
  }),

  setOffers: (offers) => ({
    type: ActionType.SET_OFFERS,
    payload: offers,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: AppRoute.ROOT,
  }),
};
