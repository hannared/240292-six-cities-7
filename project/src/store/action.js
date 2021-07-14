export const ActionType = {
  SET_CITY: 'city/set',
  GET_OFFERS: 'offers/get',
  SORTING_POPULAR: 'sorting/popular',
  SORTING_ASC: 'sorting/asc',
  SORTING_DESC: 'sorting/desc',
  SORTING_TOP_RATING: 'sorting/top',
};

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),

  runSorting: (type) => ({
    type: type,
  }),
};
