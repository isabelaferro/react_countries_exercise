import { createStore } from "redux";
import countryReducer from "./reducer";

const store = createStore(countryReducer);

export default store;
