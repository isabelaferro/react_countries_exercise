import {
  ADD_FAVORITE_COUNTRY,
  REMOVE_FAVORITE_COUNTRY,
  CLEAR_FAV,
} from "./actions";

const INITIAL_STATE = {
  favCountriesList: [],
};

function countryReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_FAVORITE_COUNTRY:
      return {
        ...state,
        favCountriesList: [...state.favCountriesList, action.payload],
      };
    case REMOVE_FAVORITE_COUNTRY:
      return {
        ...state,
        favCountriesList: state.favCountriesList.filter(
          (country) => country !== action.payload
        ),
      };
    case CLEAR_FAV:
      return {
        ...state,
        favCountriesList: [],
      };
    default:
      return state;
  }
}
export default countryReducer;
