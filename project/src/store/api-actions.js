import { ActionCreator } from './action';
import { AuthorizationStatus, APIRoute, AppRoute } from '../const';

export const fetchOffersList = () => (dispatch, _getState, api) =>
  api
    .get(APIRoute.HOTELS)
    .then(({ data }) => dispatch(ActionCreator.setOffers(data)));

export const fetchCommentsList = (offer) => (dispatch, _getState, api) =>
  api
    .get(APIRoute.COMMENTS.replace(':hotel_id', offer.id))
    .then(({ data }) => dispatch(ActionCreator.setComments(data)));

export const createComment =
  (offer, comment, rating) => (dispatch, _getState, api) =>
    api
      .post(APIRoute.COMMENTS.replace(':hotel_id', offer.id), {
        comment: comment,
        rating: rating,
      })
      .then(({ data }) => dispatch(fetchCommentsList(offer)));

export const fetchNearbyOffersList = (offer) => (dispatch, _getState, api) =>
  api
    .get(APIRoute.NEARBY_HOTELS.replace(':hotel_id', offer.id))
    .then(({ data }) => dispatch(ActionCreator.setNearbyOffers(data)));

export const checkAuth = () => (dispatch, _getState, api) =>
  api
    .get(APIRoute.LOGIN)
    .then(() =>
      dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)),
    )
    .catch(() => {});

export const login =
  ({ login: email, password }) =>
  (dispatch, _getState, api) =>
    api
      .post(APIRoute.LOGIN, { email, password })
      .then(({ data }) => localStorage.setItem('token', data.token))
      .then(() =>
        dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH)),
      )
      .then(() => dispatch(ActionCreator.redirectToRoute(AppRoute.ROOT)));

export const logout = () => (dispatch, _getState, api) =>
  api
    .delete(APIRoute.LOGOUT)
    .then(() => localStorage.removeItem('token'))
    .then(() => dispatch(ActionCreator.logout()));
