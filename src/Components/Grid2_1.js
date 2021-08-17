import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Url1 =
  "https://i.pinimg.com/564x/c2/31/14/c23114b5fa7717def67e585c887950ce.jpg";
const Url2 =
  "https://i.pinimg.com/564x/a9/d7/c5/a9d7c59c5ce04abda3dc218f0d4776b6.jpg";

const Container = styled.article`
  height: 30vh;
  margin-bottom: 10vh;
  padding-top: 0;
  margin-top: 20vh;
  background-color: transparent;
  @media (max-width: 950px) {
    height: 20vh;
    margin-top: 0px;
  }
`;

const Grid = styled.div`
  width: 80%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(200px, 1fr));
  grid-template-rows: 1fr;
  gap: 30px;
`;

const Item = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.div`
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.bgUrl});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Grid2_1 = () => {
  return (
    <Container>
      <Grid>
        <Item>
          <Image bgUrl={Url1}>1</Image>
        </Item>
        <Item>
          <Image bgUrl={Url2}>2</Image>
        </Item>
      </Grid>
    </Container>
  );
};

export default Grid2_1;
