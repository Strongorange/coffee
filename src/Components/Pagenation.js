import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import coffeeData from "../coffee";
import Example from "./Slider";

const SLink = styled(Link)`
  all: unset;
  text-decoration: none;
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid white;
  width: 10%;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: white;
  a {
    background-color: transparent;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  width: 100%;
  height: 100%;
`;

const CoffeeDesc = styled.span``;

const CoffeeName = styled.h1``;

const GridItem = styled.div`
  background-color: #c3c0ad;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  ${CoffeeDesc} {
    font-size: 16px;
  }
  ${CoffeeName} {
    font-size: 50px;
    font-weight: 600;
    letter-spacing: 4px;
    margin-top: 10px;
    margin-bottom: 30px;
  }
`;

function Pagenation({ page, children }) {
  return (
    <>
      <Grid>
        <GridItem>
          <div>
            <CoffeeDesc>Korean's Favorite Coffee</CoffeeDesc>
            <CoffeeName>AMERICANPO</CoffeeName>
            <SLink>Show Detail</SLink>
          </div>
        </GridItem>
        <GridItem>WOWOWO</GridItem>
      </Grid>
      <Example />
    </>
  );
}

export default Pagenation;
