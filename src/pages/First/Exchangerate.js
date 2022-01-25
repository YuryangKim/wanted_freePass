import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Exchangerate = () => {
  const [data, setData] = useState(''); //전체 데이터
  const [input, setInput] = useState(); //인풋값
  const [price, setPrice] = useState('');
  const [Selected, setSelected] = useState('');

  const handleSelect = e => {
    setSelected(e.target.value);
  };

  const setPriceIsValue = e => {
    const { value } = e.target;
    if (value > 10000 || value == 0 || value < 0) {
      alert('송금액이 바르지 않습니다. 확인 부탁드립니다.');
      return setInput('');
    }
    return setInput(value);
  };

  const onSubmit = () => {
    return setPrice((input * Math.round(data.quotes[Selected] * 100)) / 100);
  };

  useEffect(() => {
    axios
      .get(
        'http://apilayer.net/api/live?access_key=98a575f114ea8d97dd94ca346383fab6'
      )
      .then(res => setData(res.data));
  }, []);
  return (
    <Container>
      <Form>
        <Title>환율계산</Title>
        <Text>송금국가: 미국(USD)</Text>
        <ReceiptWrap>
          <Text>수취국가:</Text>
          <ReceiptCountry
            name="exchangeRate"
            onChange={handleSelect}
            value={Selected}
          >
            <Option value="USDKRW">한국(KRW)</Option>
            <Option value="USDJPY">일본(JPY)</Option>
            <Option value="USDPHP">필리핀(PHP)</Option>
          </ReceiptCountry>
        </ReceiptWrap>
        <ExchangRateWrap>
          <Text>환율: </Text>
          <Text>
            {Selected && (
              <Text>{Math.round(data.quotes[Selected] * 100) / 100}</Text>
            )}
          </Text>
        </ExchangRateWrap>
        <RemittanceWrap>
          <Text>송금액:</Text>
          <Remittance onChange={setPriceIsValue} />
          <Text>USD</Text>
        </RemittanceWrap>
        {price && (
          <Text>수취금액은 {`${Number(price).toLocaleString()}`} 입니다.</Text>
        )}
        <Submit onClick={onSubmit}>Submit</Submit>
      </Form>
    </Container>
  );
};

export default Exchangerate;

const Container = styled.div`
  width: 45%;
  background-color: #eef8ee;
  border-radius: 15px;
`;

const Form = styled.form`
  padding: 40px;
`;

const Title = styled.p`
  color: #333333;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const Text = styled.p`
  color: #333333;
  font-size: 1.2rem;
  margin-right: 0.3rem;
`;

const ReceiptWrap = styled.div`
  display: flex;
  align-items: center;
  margin: 0.6rem 0;
`;

const ReceiptCountry = styled.select.attrs({
  name: 'country',
})`
  color: #333333;
  font-size: 1rem;
`;

const Option = styled.option`
  font-size: 3rem;
`;

const RemittanceWrap = styled(ReceiptWrap)``;

const ExchangRateWrap = styled(ReceiptWrap)``;

const Remittance = styled.input`
  padding: 0.5rem 0;
  margin-right: 0.3rem;
  border-radius: 5px;
  border: 1px solid #d3d7e1;
  background-color: #fff;
`;

const Submit = styled.button.attrs({
  type: 'button',
})`
  margin-top: 10px;
  padding: 1rem 4rem;
  border-radius: 3rem;
  color: #eef8ee;
  background-color: #02ce89;
  font-size: 1.2rem;
  font-weight: 700;
`;
