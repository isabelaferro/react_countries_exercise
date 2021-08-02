import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FilterBox from "./FilterBox";
import SearchBox from "./SearchBox";
import PopUpInfo from "./PopUp";
import { actions } from "../redux/actions";

import { Button, CountryDiv } from "./styledcomponent";

const url = "https://restcountries.eu/rest/v2/all";

const CountriesList = () => {
  const dispatch = useDispatch();

  const [countries, setCountries] = useState({
    countriesList: [],
    selectedRegion: null,
    searchCountry: "",
  });
  useEffect(() => {
    const fetchCountriesData = async () => {
      const res = await fetch(url);
      const countries = await res.json();
      setCountries({
        countriesList: countries,
        selectedRegion: null,
        searchCountry: "",
      });
    };
    fetchCountriesData();
  }, []);

  const changeRegion = (region) => {
    region === "Select"
      ? setCountries({ ...countries, selectedRegion: null })
      : setCountries({ ...countries, selectedRegion: region });
  };
  const filterRegion = () => {
    return countries.selectedRegion
      ? countries.countriesList.filter(
          (country) => country.region === countries.selectedRegion
        )
      : countries.countriesList;
  };
  const setSearchValue = (country) => {
    setCountries({ ...countries, searchCountry: country });
    console.log(country);
  };
  //modal countryInfo
  const favCountryList = useSelector((state) => state.favCountriesList);
  console.log(favCountryList);

  return (
    <div>
      <FilterBox changeRegion={changeRegion} />

      <h1>OR</h1>

      <h3>SEARCH FOR A COUNTRY: </h3>
      <SearchBox setSearchValue={setSearchValue}></SearchBox>

      {filterRegion().map((country) => {
        const { name } = country;

        if (
          !name.toUpperCase().startsWith(countries.searchCountry.toUpperCase())
        )
          return null;

        const isOnFav = favCountryList.find((obj) => obj.name === name);
        return (
          <CountryDiv key={name}>
            <br></br>
            <h2>{name}</h2>
            <PopUpInfo country={country} />
            <br></br>
            {!isOnFav && (
              <Button
                onClick={() => dispatch(actions.addFavoriteCountry(country))}
              >
                ⭐
              </Button>
            )}

            <br></br>
          </CountryDiv>
        );
      })}
    </div>
  );
};

export default CountriesList;
