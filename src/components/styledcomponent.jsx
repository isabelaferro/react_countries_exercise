import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  border-radius: 13px;
  background: #f7d4ea;
  box-shadow: 8px 8px 20px #aaaaaa, -8px -8px 20px #ffffff;
  max-width: 90vw;
  margin: 10px auto;
  padding: 0 15px;
  align-items: center;
`;

export const ContainerInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;
export const Header = styled.div`
  color: #cf0c3d;
  float: left;
  font-family: "Courier New", Courier, monospace;
  font-size: 35px;
  justify-self: center;
  align-items: center;
  padding: 20px 35px;
  margin: 0;
`;

export const CountryNavBar = styled.nav`
  font-family: "Courier New", Courier, monospace;

  color: #cf0c3d;
  display: block;
  padding: 20px;
  align-items: center;
  margin-bottom: 40px;
  h3 {
    display: inline;
    float: left;
  }
`;
export const CountryDiv = styled.div`
  font-family: "Courier New", Courier, monospace;

  background-color: lavender;
  width: auto;
  height: auto;
  color: #cf0c3d;
  display: grid;
  padding: auto;
  align-items: center;
  justify-items: center;
  margin-bottom: 40px;
  h2 {
    display: inline;
    float: left;
  }
`;

export const FavCountryBar = styled.div`
  position: relative;
  background-color: #e0bec6;
  width: 300px;
  display: flex;
  padding: 20px 5px;

  justify-content: center;
  margin: 0 0 auto auto;
  font-family: "Courier New", Courier, monospace;

  color: #cf0c3d;
  h3 {
    display: inline;
    float: inline-start;
    padding: 5px;
  }
`;

export const Button = styled.button`
  background: linear-gradient(to bottom, #cf0c3d 5%, #cf0c3d 100%);
  background-color: #f7d4ea;
  border-radius: 16px;
  border: 0px solid;
  display: inline;

  cursor: pointer;
  color: #ebe9e9;
  font-family: "monospace";
  font-size: 12px;

  padding: 7px 15px;
`;

export const Select = styled.select`
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
  width: auto;
  font-family: "Monospace";
  display: inline;
  font-size: 20px;
  cursor: pointer;
  padding: 7px 10px;
  outline: 0;
  border: 0px solid #000000;
  border-radius: 31px;
  background: #cf0c3d;
  color: #ebe9e9;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

export const Input = styled.input`
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
  width: auto;
  font-family: "Monospace";
  display: inline;
  font-size: 20px;
  padding: 7px 10px;
  outline: 0;
  border: 0px solid #000000;
  border-radius: 31px;
  background: #cf0c3d;
  ::placeholder {
    color: #ebe9e9;
  }
`;
