import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.article`
  background-color: transparent;
  height: 100%;
  position: relative;
  @media (max-width: 950px) {
    height: 100%;
  }
`;

const Grid = styled.div`
  display: grid;
  width: 80%;
  height: 80%;
  grid-template-columns: repeat(4, minmax(100px, 1fr));
  grid-template-rows: 5% 1fr 1fr;
  gap: 20px;
  @media (max-width: 950px) {
    grid-template-rows: 5% 1fr 1fr 1fr;
    grid-template-columns: repeat(3, minmax(100px, 1fr));
  }

  .main_product {
    background-color: tomato;
    grid-column: 1 / span 1;
    grid-row: 1 / -1;
    @media (max-width: 950px) {
      grid-column: 1 / -1;
      grid-row: 2 / span 1;
    }
  }
  .category {
    grid-column: 3 / -1;
    justify-content: center;
    align-items: flex-end;
    @media (max-width: 950px) {
      grid-column: 2 / -1;
    }
  }
`;

const Category = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 50%;
  @media (max-width: 950px) {
    width: 100%;
  }
`;

const CategoryItem = styled.li``;

const SLink = styled(Link)`
  text-decoration: none;
  padding: 10px 30px;
  color: white;
  background-color: transparent;
  border: 1px solid white;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  @media (max-width: 950px) {
    font-size: 6px;
  }
`;

const Name = styled.span``;

const Price = styled.span``;

const Info = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  padding-top: 10px;
  @media (max-width: 950px) {
    font-size: 10px;
    flex-direction: column;
  }

  ${Name} {
    font-size: 24px;
    @media (max-width: 950px) {
      font-size: 16px;
    }
  }

  ${Price} {
    font-size: 20px;
    @media (max-width: 950px) {
      font-size: 14px;
    }
  }
`;

const Praise = styled.p``;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-position: 80% center;
  padding: 30px;
  display: flex;
  flex-direction: column;
  position: relative;
  color: white;
  width: 100%;
  height: 100%;

  ${Name} {
    font-size: 120px;
    font-family: "Josefin Slab", serif;
    font-weight: 200;
  }

  ${Praise} {
    font-size: 22px;
  }

  ${SLink} {
    position: absolute;
    align-self: flex-end;
    bottom: 5%;
    font-size: 18px;
    @media (max-width: 950px) {
      font-size: 14px;
    }
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  ${Image} {
    width: 100%;
    position: relative;
    &::after {
      content: "";
      display: block;
      padding-bottom: 100%;
    }
    box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.1);
  }
`;

const ShopGrid = ({ data }) => {
  return (
    <Container>
      <Grid>
        <Image className="main_product" bgUrl={data[0].img}>
          <Name>{data[0].title}</Name>
          <Praise>{data[0].praise}</Praise>
          <SLink to="#">Show Detail</SLink>
        </Image>
        <Item className="category">
          <Category>
            <CategoryItem>All</CategoryItem>
            <CategoryItem>Best</CategoryItem>
            <CategoryItem>New</CategoryItem>
            <CategoryItem>Upcoming</CategoryItem>
          </Category>
        </Item>
        {data.map((coffee, i) =>
          i > 0 ? (
            i < 7 ? (
              <Item>
                <Image bgUrl={coffee.img}></Image>
                <Info>
                  <Name>{coffee.title}</Name>
                  <Price>{coffee.price}</Price>
                </Info>
              </Item>
            ) : null
          ) : null
        )}
      </Grid>
    </Container>
  );
};

export default ShopGrid;
