import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Second = () => {
  const CODE_DATA = [
    { id: 1, code: 'USD' },
    { id: 2, code: 'CAD' },
    { id: 3, code: 'KRW' },
    { id: 4, code: 'HKD' },
    { id: 5, code: 'JPY' },
    { id: 6, code: 'CNY' },
  ];

  const [isNum, setIsNum] = useState('');

  useEffect(() => {
    console.log(isNum);
  }, [isNum]);

  async function handleInput(e) {
    let userInput = e.target.value;
    let checkedNum = /[0-9|\b|/]/g;

    if (!checkedNum.test(userInput)) {
      alert('숫자만 입력해주세요');
      await setIsNum('');
    } else {
      await setIsNum(userInput);
      if (isNum >= 1000) {
        alert('1,000 이하로 입력해주세요');
        await setIsNum(() => '');
      }
    }
    // console.log(isNum);
  }

  return (
    <Container>
      <Form>
        <NumInput
          placeholder="금액을 입력하세요"
          value={isNum}
          onChange={handleInput}
        />
        <SelectBox name="moneys" id="moneys">
          {CODE_DATA.map(({ id, code }) => {
            return (
              <OptionTag key={id} value={code}>
                {code}
              </OptionTag>
            );
          })}
        </SelectBox>
      </Form>
      <TabWrapper>
        <TabList>
          <Tab>USD</Tab>
          <Tab>USD</Tab>
          <Tab>USD</Tab>
          <Tab>USD</Tab>
          <Tab>USD</Tab>
        </TabList>
        <TabContents>
          <Result>CAD 2,000.00</Result>
          <ReferDate>기준일 : 2022-Jan-01</ReferDate>
        </TabContents>
      </TabWrapper>
    </Container>
  );
};

export default Second;

const Container = styled.div`
  width: 300px;
  margin: 100px auto;
  padding: 20px;
  border: 3px solid black;
`;

const Form = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NumInput = styled.input`
  border: 1px solid black;
`;

const SelectBox = styled.select`
  border: 1px solid black;
`;

const OptionTag = styled.option`
  font-size: 14px;
`;

const TabWrapper = styled.div`
  margin: 20px 0;
`;

const TabList = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
`;

const Tab = styled.li`
  padding: 5px 0;
  border: 1px solid black;
  cursor: pointer;
`;

const TabContents = styled.div`
  width: 100%;
  height: 150px;
  border: 1px solid black;
  padding: 10px;
`;

const Result = styled.h3`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
`;

const ReferDate = styled.span`
  display: block;
  font-size: 14px;
  line-height: 1.5;
  padding-top: 15px;
`;
