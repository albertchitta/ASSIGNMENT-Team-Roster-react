import React from 'react';
import styled from 'styled-components';
import logo from '../img/logo.jpg';

const HomeStyle = styled.div`
  justify-content: center;
  img {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
  }
`;

export default function Home() {
  return (
    <HomeStyle>
      <h1>Lakers Nation</h1>
      <img src={logo} alt="Los Angeles Lakers Logo" />
    </HomeStyle>
  );
}
