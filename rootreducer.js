import { combineReducers } from "redux";

import countryReducer from "./reducer";

const reducer = combineReducers({ countryReducer });

export default reducer;
