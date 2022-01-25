import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const First = () => {
  const [data, setData] = useState('');
  const [Selected, setSelected] = useState('');
  const [input, setInput] = useState('');
  const [submit, setSubmit] = useState(false);

  const handleSelect = e => {
    setSelected(e.target.value);
  };

  const handleInput = e => {
    setInput(e.target.value);
  };

  const handleSubmit = () => {
    setSubmit(prev => !prev);
  };

  console.log(submit);
  useEffect(() => {
    axios
      .get(
        'http://apilayer.net/api/live?access_key=98a575f114ea8d97dd94ca346383fab6'
      )
      .then(res => setData(res.data));
  }, []);
  console.log(data.quotes);
  return (
    <Container>
      <form>
        <Title>환율계산</Title>
        <Text>송금국가: 미국(USD)</Text>

        <ReceiptWrap>
          <Text>수취국가:</Text>
          <ReceiptCountry
            name="exchange"
            onChange={handleSelect}
            value={Selected}
          >
            <option value="USDKRW" defaultValue="USDKRW">
              한국(KRW)
            </option>
            <option value="USDJPY">일본(JPY)</option>
            <option value="USDPHP">필리핀(PHP)</option>
          </ReceiptCountry>
        </ReceiptWrap>

        <ExchangRateWrap>
          환율:
          {Selected && (
            <Text> {Math.round(data.quotes[Selected] * 100) / 100}</Text>
          )}
        </ExchangRateWrap>

        <RemittanceWrap>
          <Text>송금액: </Text>
          <Remittance onChange={handleInput} />
          <Text>USD</Text>
        </RemittanceWrap>

        <Submit onClick={handleSubmit}>Submit</Submit>

        {submit && (
          <Text>
            수취금액 {Number(input * data.quotes[Selected]).toLocaleString()}
            입니다.
          </Text>
        )}
        {/* 수취금액은 {Number(input * data.quotes[Selected]).toLocaleString()}KRW */}
        {/* 입니다. */}
      </form>
    </Container>
  );
};

export default First;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  font-size: 1rem;
  margin-right: 0.3rem;
`;

const ReceiptWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0.6rem 0;
`;

const ReceiptCountry = styled.select.attrs({
  name: 'country',
})``;

const RemittanceWrap = styled(ReceiptWrap)``;

const ExchangRateWrap = styled(ReceiptWrap)``;

const Remittance = styled.input`
  border: 1px solid gray;
  margin-right: 0.3rem;
`;

const Submit = styled.button.attrs({
  type: 'button',
})`
  padding: 0.5rem 2rem;
  background-color: #eeeeee;
  font-weight: 700;
`;
