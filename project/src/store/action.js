export const ActionType = {
  SET_CITY: 'city/set',
  GET_OFFERS: 'offers/get',
};

export const ActionCreator = {
  setCity: (city) => ({
    type: ActionType.SET_CITY,
    payload: city,
  }),
};
