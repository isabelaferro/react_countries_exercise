import React from "react";
import { Input } from "./styledcomponent";

const SearchBox = (props) => {
  return (
    <div>
      <nobr>
        <Input
          type="search"
          placeholder="type a country name"
          onInput={(e) => props.setSearchValue(e.target.value)}
        />
      </nobr>
    </div>
  );
};

export default SearchBox;
