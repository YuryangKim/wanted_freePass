import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

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
  const [selected, setSelected] = useState('USD');
  const [shownTab, setShownTab] = useState('CAD');
  const [data, setData] = useState({});

  const handleInput = e => {
    const userInput = e.target.value;
    const checkedNum = /[0-9|\b|/]/g;

    if (!checkedNum.test(userInput)) {
      alert('숫자만 입력해주세요');
      setIsNum('');
    } else {
      const regexp = /\B(?=(\d{3})+(?!\d))/g;
      const addComma = userInput.replace(regexp, ',');

      setIsNum(addComma);
    }
  };

  const handleSelect = e => {
    setSelected(e.target.value);
  };

  const tabOnClick = shownTab => {
    setShownTab(shownTab);
  };

  useEffect(() => {
    axios
      .get(
        'http://apilayer.net/api/live?access_key=98a575f114ea8d97dd94ca346383fab6'
      )
      .then(res => {
        setData(res.data.quotes);
      });
  }, []);

  const shownExchangeRate =
    Number(isNum) * (data['USD' + shownTab] / data['USD' + selected]);

  const getToday = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.toLocaleString('en-EN', { month: 'short' });
    const day = ('0' + date.getDate()).slice(-2);

    return year + '-' + month + '-' + day;
  };

  return (
    <Container>
      <Form>
        <NumInput
          placeholder="금액을 입력하세요"
          value={isNum}
          onChange={handleInput}
        />
        <SelectBox
          name="moneys"
          id="moneys"
          value={selected}
          onChange={handleSelect}
        >
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
          {CODE_DATA.filter(({ code }) => code !== selected).map(
            ({ id, code }) => (
              <Tab
                key={id}
                shownTab={shownTab}
                code={code}
                onClick={event => tabOnClick(code)}
              >
                {code}
              </Tab>
            )
          )}
        </TabList>
        <TabContents>
          <Result>
            {shownTab} {shownExchangeRate.toFixed(2).toLocaleString()}
          </Result>
          <ReferDate>기준일 : {getToday()}</ReferDate>
        </TabContents>
      </TabWrapper>
    </Container>
  );
};

export default Second;

const Container = styled.div`
  width: 400px;
  margin: 100px auto;
  padding: 20px;
  border: 2px solid black;
`;

const Form = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NumInput = styled.input`
  padding: 8px 16px;
  border: 1px solid black;
`;

const SelectBox = styled.select`
  padding: 8px;
  border: 1px solid black;
`;

const OptionTag = styled.option`
  font-size: 14px;
`;

const TabWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TabList = styled.ul`
  display: flex;
  justify-content: space-between;
  border: 1px solid black;
  border-right: none;
  font-size: 14px;
`;

const Tab = styled.li`
  width: 100%;
  padding: 8px 0;
  display: flex;
  justify-content: center;
  border-right: 1px solid black;
  cursor: pointer;
  background-color: ${({ shownTab, code }) => shownTab === code && 'pink'};
`;

const TabContents = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid black;
  border-top: none;
  padding: 25px 30px;
`;

const Result = styled.h3`
  font-size: 16px;
  font-weight: bold;
  line-height: 1.5;
  /* display: flex;
  justify-content: space-between; */
`;

const ReferDate = styled.span`
  display: block;
  color: grey;
  font-size: 12px;
  padding-top: 15px;
`;
