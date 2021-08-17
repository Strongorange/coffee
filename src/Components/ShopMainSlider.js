import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import coffeeData from "../coffee";
import { Link } from "react-router-dom";

const Container = styled.section`
  height: 50vh;
  color: white;
`;

const ItemContainer = styled.div`
  display: grid;
  height: 60vh;
  grid-template-columns: 30% 1fr;
  grid-template-rows: 1fr;
  @media (max-width: 950px) {
    grid-template-columns: 40% 1fr;
  }
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  height: 100%;
  background-position: center;
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #c3c0ad;
  padding: 0px 100px;
  padding-left: 200px;

  @media (max-width: 950px) {
    padding: 0px 20px;
  }
  .title {
    font-size: 40px;
    margin-bottom: 30px;
    @media (max-width: 950px) {
      font-size: 32px;
    }
  }

  .desc {
    font-size: 14px;
    @media (max-width: 950px) {
      font-size: 14px;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Text = styled.span``;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 100%;

  .slick-prev {
    z-index: 100;
    left: 20px;
    top: 60%;
  }

  .slick-next {
    z-index: 100;
    right: 20px;
    top: 60%;
  }

  .slick-list {
    height: 100%;
  }
`;

const SLink = styled(Link)`
  color: white;
  text-decoration: none;
  background-color: transparent;
  border: 1px solid white;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  margin-top: 30px;
`;

const ShopMainSlider = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Container>
      <StyledSlider {...settings}>
        {coffeeData.map((coffee) => (
          <>
            <ItemContainer>
              <Description>
                <TextContainer>
                  <Text>{coffee.praise}</Text>
                  <Text className="title">{coffee.title}</Text>
                  <Text className="desc">
                    {coffee.description && coffee.description.length > 120
                      ? `${coffee.description.substring(0, 120)}...`
                      : coffee.description}
                  </Text>
                  <SLink to="#">Show Detail</SLink>
                </TextContainer>
              </Description>
              <Image
                bgUrl={
                  coffee.img && coffee !== ""
                    ? coffee.img
                    : "https://images.unsplash.com/photo-1541870730196-cd1efcbf5649?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=676&q=80"
                }
              />
            </ItemContainer>
          </>
        ))}
      </StyledSlider>
    </Container>
  );
};

export default ShopMainSlider;
