import React from "react";

const CountryInfo = (props) => {
  console.log(props);
  const { name, capital, population, region, flag, languages, currencies } =
    props.country.country;
  return (
    <div>
      <div>
        <p>
          <strong>Region:</strong> {region}
        </p>
        <p>
          <strong>Capital:</strong> {capital}
        </p>
        <p>
          <strong>Population: </strong> {population}
        </p>

        <p>
          {" "}
          <strong>Currency:</strong> {currencies[0].code} -{" "}
          {currencies[0].symbol}
        </p>
        <p>
          <strong>Language: </strong> {languages[0].name}
        </p>

        <img src={flag} alt={name} width="200" height="120" />
      </div>
    </div>
  );
};
export default CountryInfo;
