import { Paris } from './mocks/cities';

export const AppRoute = {
  LOGIN: '/login',
  FAVORITES: '/favorites',
  OFFER: '/offer/:id?',
  ROOT: '/',
};

export const DEFAULT_CITY = Paris;

export const AuthorizationStatus = {
  AUTH: 'AUTH',
  NO_AUTH: 'NO_AUTH',
  UNKNOWN: 'UNKNOWN',
};

export const APIRoute = {
  HOTELS: '/hotels',
  HOTEL: '/hotels/:id',
  FAVORITE: '/favorite',
  IS_FAVORITE: '/favorite/:hotel_id/:status',
  LOGIN: '/login',
  LOGOUT: '/logout',
  COMMENTS: '/comments/:hotel_id',
  NEARBY_HOTELS: '/hotels/:hotel_id/nearby',
};
