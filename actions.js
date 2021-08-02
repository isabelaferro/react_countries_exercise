export const ADD_FAVORITE_COUNTRY = "ADD_FAVORITE_COUNTRY";

export const REMOVE_FAVORITE_COUNTRY = "REMOVE_FAVORITE_COUNTRY";

export const CLEAR_FAV = "CLEAR_FAV";

const actions = {
  addFavoriteCountry: (country) => ({
    type: ADD_FAVORITE_COUNTRY,
    payload: country,
  }),

  removeFavoriteCountry: (country) => ({
    type: REMOVE_FAVORITE_COUNTRY,
    payload: country,
  }),

  clearFav: () => ({
    type: CLEAR_FAV,
  }),
};

export { actions };
