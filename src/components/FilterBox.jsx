import React from "react";
import { Select } from "./styledcomponent";

const FilterBox = (props) => {
  return (
    <div>
      <nobr>
        <h3>START BY CHOOSING A REGION:</h3>
        <Select
          name="select"
          id="select "
          className="select"
          onChange={(e) => props.changeRegion(e.target.value)}
        >
          <option value="Select">click to select a region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">America</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </Select>
      </nobr>
    </div>
  );
};

export default FilterBox;
