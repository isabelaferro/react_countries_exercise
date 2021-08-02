import React from "react";

import CountriesList from "./components/CountriesList";
import FavList from "./components/FavList";

import {
  Container,
  Header,
  CountryNavBar,
  FavCountryBar,
  ContainerInfo,
} from "./components/styledcomponent";

const App = () => (
  <Container>
    <Header>🗺 REST COUNTRIES API EXERCISE 🗺</Header>
    <ContainerInfo>
      <CountryNavBar>
        <CountriesList />
      </CountryNavBar>
      <FavCountryBar>
        <FavList />
      </FavCountryBar>
    </ContainerInfo>
  </Container>
);

export default App;
