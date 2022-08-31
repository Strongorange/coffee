import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import coffeeData from "../coffee";
import ShopMainSlider from "../Components/ShopMainSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopGrid from "../Components/ShopGrid";
import ShopGridReverse from "../Components/ShopGridReverse";
import Grid2_1 from "../Components/Grid2_1";
import Fade from "react-reveal/Fade";
import { UserContext } from "../Contexts/Context";

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

function Shop() {
  const [coffee, setCoffee] = useState([]);
  const { user } = useContext(UserContext);

  console.log(user);

  useEffect(() => {
    setCoffee(coffeeData);
  }, []);

  return (
    <>
      <main className="shop_main">
        <div className="divider"></div>
        <ShopMainSlider />
        <ShopGrid data={coffeeData} />
        <Fade>
          <Grid2_1 />
        </Fade>
        <ShopGridReverse data={coffeeData} />
      </main>
    </>
  );
}

export default Shop;
