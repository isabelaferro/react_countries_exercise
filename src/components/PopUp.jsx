import React, { useState } from "react";
import { Button } from "./styledcomponent";

import CountryInfo from "./CountryInfo";

const PopUpInfo = (country) => {
  const [popup, setPopup] = useState(false);

  const showInfo = () => {
    setPopup(!popup);
  };
  return (
    <div>
      <Button onClick={() => showInfo(country)}>MORE INFO</Button>
      {popup && (
        <div className={"popup"}>
          <CountryInfo country={country} />
        </div>
      )}
    </div>
  );
};

export default PopUpInfo;
