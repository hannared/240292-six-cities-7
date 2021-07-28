import { AuthorizationStatus, DEFAULT_CITY } from '../const';
import { ActionType } from './action';
import { orderBy } from 'lodash';

const initialState = {
  city: DEFAULT_CITY,
  serverOffers: [],
  offers: [],
  comments: [],
  nearbyOffers: [],
  authorizationStatus: AuthorizationStatus.UNKNOWN,
  isDataLoaded: false,
  formInProgress: false,
  error: '',
};

// prettier-ignore
const adaptOfferServerToClient = (offer) => {
  const newOffer = {
    id: offer.id.toString(),
    photos: offer.images,
    title: offer.title,
    description: offer.description,
    city: {
      location: {
        latitude: offer.city.location.latitude,
        longitude: offer.city.location.longitude,
        zoom: offer.city.location.zoom,
      },
      name: offer.city.name,
    },
    isPremium: offer.is_premium,
    isFavorite: offer.is_favorite,
    type: offer.type,
    rating: offer.rating,
    bedrooms: offer.bedrooms,
    maxAdults: offer.max_adults,
    price: offer.price,
    goods: offer.goods,
    host: {
      id: offer.host.id.toString(),
      avatar: offer.host.avatar_url,
      name: offer.host.name,
      isPro: offer.host.is_pro,
    },
    location: {
      latitude: offer.location.latitude,
      longitude: offer.location.longitude,
      zoom: offer.location.zoom,
    },
  };

  return newOffer;
};

const adaptCommentServerToClient = (comment) => {
  const newComment = {
    id: comment.id.toString(),
    comment: comment.comment,
    date: comment.date,
    user: {
      id: comment.user.id.toString(),
      avatar: comment.user.avatar_url,
      name: comment.user.name,
    },
    rating: comment.rating,
  };
  return newComment;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CITY:
      return {
        ...state,
        city: action.payload,
        offers: state.serverOffers.filter(
          (offer) => offer.city.name === action.payload.name,
        ),
      };
    case ActionType.GET_OFFERS:
      return {
        ...state,
        offers: state.serverOffers.filter(
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
        serverOffers: action.payload.map(adaptOfferServerToClient),
        offers: action.payload
          .map(adaptOfferServerToClient)
          .filter((offer) => offer.city.name === DEFAULT_CITY.name),
        isDataLoaded: true,
      };

    case ActionType.SET_COMMENTS:
      return {
        ...state,
        comments: action.payload.map(adaptCommentServerToClient),
      };

    case ActionType.SET_NEARBY_OFFERS:
      return {
        ...state,
        nearbyOffers: action.payload.map(adaptOfferServerToClient),
      };

    case ActionType.SET_FORM_IN_PROGRESS:
      return {
        ...state,
        formInProgress: action.payload,
      };

    case ActionType.SET_COMMENT_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export { reducer };
