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
    setPrice('');
  };

  const SelectedSlice = Selected.slice(3, 6);

  const setPriceIsValue = e => {
    const { value } = e.target;
    return setInput(value);
  };

  const onSubmit = () => {
    let regex = /^[0-9]/g;
    if (Selected === '') {
      alert('송금액이 바르지 않습니다. 확인 부탁드립니다.');
      return setInput('');
    } else if (!regex.test(input)) {
      alert('송금액이 바르지 않습니다. 확인 부탁드립니다.');
      return setInput('');
    } else if (input > 10000 || input <= 0) {
      alert('송금액이 바르지 않습니다. 확인 부탁드립니다.');
      return setInput('');
    }
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
            <Option value="">===선택===</Option>
            <Option value="USDKRW">한국(KRW)</Option>
            <Option value="USDJPY">일본(JPY)</Option>
            <Option value="USDPHP">필리핀(PHP)</Option>
          </ReceiptCountry>
        </ReceiptWrap>
        <ExchangRateWrap>
          <Text>환율: </Text>
          <Text>
            {Selected && (
              <Text>
                {Number(
                  Math.round(data.quotes[Selected] * 100) / 100
                ).toLocaleString()}
                {SelectedSlice}
                /USD
              </Text>
            )}
          </Text>
        </ExchangRateWrap>
        <RemittanceWrap>
          <Text>송금액:</Text>
          <Remittance onChange={setPriceIsValue} value={input} />
          <Text>USD</Text>
        </RemittanceWrap>
        {price && (
          <Text>
            수취금액은 {`${Number(price).toLocaleString()}`} {SelectedSlice}
            입니다.
          </Text>
        )}
        <Submit onClick={onSubmit}>Submit</Submit>
      </Form>
    </Container>
  );
};

export default Exchangerate;

const Container = styled.div`
  width: 460px;
  background-color: #eef8ee;
  border-radius: 15px;
  padding: 70px;
`;

const Form = styled.form``;

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
  padding: 0.2rem;
  color: #333333;
  font-size: 1.2rem;
  border-radius: 5px;
  border: 1px solid #d3d7e1;
`;

const Option = styled.option`
  font-size: 3rem;
`;

const RemittanceWrap = styled(ReceiptWrap)``;

const ExchangRateWrap = styled(ReceiptWrap)``;

const Remittance = styled.input.attrs({
  placeholder: '송금액을 입력해주세요.',
})`
  width: 170px;
  padding: 0.2rem 0;
  margin-right: 0.3rem;
  border-radius: 5px;
  border: 1px solid #d3d7e1;
  background-color: #fff;
  font-size: 1rem;
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
