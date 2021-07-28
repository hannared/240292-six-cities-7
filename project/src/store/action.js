import { AppRoute } from '../const';

export const ActionType = {
  SET_CITY: 'city/set',
  GET_OFFERS: 'offers/get',
  SET_OFFERS: 'offers/set',
  SET_COMMENTS: 'comments/set',
  SET_NEARBY_OFFERS: 'nearbyOffers/set',
  SORTING_POPULAR: 'sorting/popular',
  SORTING_ASC: 'sorting/asc',
  SORTING_DESC: 'sorting/desc',
  SORTING_TOP_RATING: 'sorting/top',
  REQUIRED_AUTHORIZATION: 'user/requiredAuthorization',
  LOGOUT: 'user/logout',
  REDIRECT_TO_ROUTE: 'user/redirectToRoute',
  SET_FORM_IN_PROGRESS: 'InProgress/set',
  SET_COMMENT_ERROR: 'error/set',
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

  setComments: (comments) => ({
    type: ActionType.SET_COMMENTS,
    payload: comments,
  }),

  setNearbyOffers: (offers) => ({
    type: ActionType.SET_NEARBY_OFFERS,
    payload: offers,
  }),

  requireAuthorization: (status) => ({
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: status,
  }),
  logout: () => ({
    type: ActionType.LOGOUT,
  }),

  setFormInProgress: (status) => ({
    type: ActionType.SET_FORM_IN_PROGRESS,
    payload: status,
  }),

  setCommentError: (error) => ({
    type: ActionCreator.SET_COMMENT_ERROR,
    payload: error,
  }),

  redirectToRoute: (url) => ({
    type: ActionType.REDIRECT_TO_ROUTE,
    payload: AppRoute.ROOT,
  }),
};
