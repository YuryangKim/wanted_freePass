import React from 'react';
import styled from 'styled-components';
import CopyRight from './CopyRight';
import Exchangerate from './Exchangerate';

const First = () => {
  return (
    <MainContainer>
      <MainWrap>
        <CopyRight />
        <Exchangerate />
      </MainWrap>
    </MainContainer>
  );
};

export default First;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
  background-image: url(https://www.wirebarley.com/img/background/img-bg-1.png);
  background-position: center;

  @media screen and (max-width: 965px) {
  }
`;

const MainWrap = styled.div`
  width: 1150px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
