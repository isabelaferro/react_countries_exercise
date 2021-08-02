import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import SearchBox from "./SearchBox";
import { actions } from "../redux/actions";
import { Button } from "./styledcomponent";

const FavList = () => {
  const favCountriesList = useSelector((state) => state.favCountriesList);
  const dispatch = useDispatch();

  const [favCountry, setFavCountry] = useState("");

  const setSearchValue = (country) => {
    setFavCountry(country);
    console.log(country);
  };

  return (
    <div>
      <h3> 🗺 FAVORITE COUNTRY LIST </h3>
      <h5>Search for favorite country:</h5>
      <SearchBox setSearchValue={setSearchValue} />

      <Button onClick={() => dispatch(actions.clearFav())}>CLEAR ALL</Button>

      {favCountriesList.map((country) => {
        const { name } = country;

        if (!name.toUpperCase().startsWith(favCountry.toUpperCase()))
          return null;
        return (
          <div key={name}>
            <br></br>
            <br></br>
            <h3>{name} </h3>
            <Button
              onClick={() => dispatch(actions.removeFavoriteCountry(country))}
            >
              REMOVE
            </Button>
          </div>
        );
      })}
    </div>
  );
};
export default FavList;
