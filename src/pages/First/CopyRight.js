import React from 'react';
import styled from 'styled-components';

const CopyRight = () => {
  return (
    <CopyRightWrap>
      <SubTitle>해외송금서비스 최초</SubTitle>
      <MainTitle>
        한국에서 보낸 송금이 지연되면, <br /> 보상쿠폰을 드립니다.
      </MainTitle>
      <Detail>자세히 보기</Detail>
    </CopyRightWrap>
  );
};

export default CopyRight;

const CopyRightWrap = styled.div``;

const SubTitle = styled.p`
  display: inline-block;
  margin-top: 20px;
  padding: 0.4rem 1rem 0.3rem 1rem;
  border-radius: 3rem;
  background-color: #fff100;
  color: #33aea7;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: -1px;
`;

const MainTitle = styled.h1`
  margin: 20px 0;
  color: #fff;
  font-size: 3rem;
  font-weight: 900;
  letter-spacing: -1px;
  line-height: 3.2rem;
`;

const Detail = styled.p`
  display: inline-block;
  color: #fff;
  font-size: 1.3rem;
  border-bottom: 2px solid #fff;
`;
