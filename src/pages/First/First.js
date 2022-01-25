// import React, { useEffect, useState } from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

// const First = () => {
//   const [data, setData] = useState('');
//   const [Selected, setSelected] = useState('');
//   const [input, setInput] = useState('');
//   const [submit, setSubmit] = useState(0);
//   const handleSelect = e => {
//     setSelected(e.target.value);
//   };

//   const handleInput = e => {
//     setInput(e.target.value);
//   };

//   const handleSubmit = () => {
//     setSubmit(input * data.quotes[Selected]);
//   };

//   const handleReset = () => {
//     setInput('');
//   };
//   console.log(submit + 'hh');
//   useEffect(() => {
//     axios
//       .get(
//         'http://apilayer.net/api/live?access_key=98a575f114ea8d97dd94ca346383fab6'
//       )
//       .then(res => setData(res.data));
//   }, []);
//   console.log(data.quotes);
//   const price = Number(input * data.quotes[Selected]).toLocaleString();
//   return (
//     <Container>
//       <form>
//         <Title>환율계산</Title>
//         <Text>송금국가: 미국(USD)</Text>

//         <ReceiptWrap>
//           <Text>수취국가:</Text>
//           <ReceiptCountry
//             name="exchange"
//             onChange={handleSelect}
//             value={Selected}
//           >
//             <option value="USDKRW" defaultValue="USDKRW">
//               한국(KRW)
//             </option>
//             <option value="USDJPY">일본(JPY)</option>
//             <option value="USDPHP">필리핀(PHP)</option>
//           </ReceiptCountry>
//         </ReceiptWrap>

//         <ExchangRateWrap>
//           환율:
//           {Selected && (
//             <Text> {Math.round(data.quotes[Selected] * 100) / 100}</Text>
//           )}
//         </ExchangRateWrap>

//         <RemittanceWrap>
//           <Text>송금액: </Text>
//           <Remittance onChange={handleInput} />
//           <Text>USD</Text>
//         </RemittanceWrap>

//         <Submit onClick={handleSubmit()}>Submit</Submit>

//         {submit ? (
//           <Text>
//             수취금액 {`${price}`}
//             입니다.
//           </Text>
//         ) : (
//           ''
//         )}

//         {/* 수취금액은 {Number(input * data.quotes[Selected]).toLocaleString()}KRW */}
//         {/* 입니다. */}
//       </form>
//     </Container>
//   );
// };

// export default First;

// const Container = styled.div`
//   width: 45%;
//   background-color: #eef8ee;
//   border-radius: 15px;
// `;

// const Form = styled.form`
//   padding: 40px;
// `;

// const Title = styled.p`
//   color: #333333;
//   font-size: 2rem;
//   font-weight: 700;
//   margin-bottom: 1.5rem;
// `;

// const Text = styled.p`
//   color: #333333;
//   font-size: 1.2rem;
//   margin-right: 0.3rem;
// `;

// const ReceiptWrap = styled.div`
//   display: flex;
//   align-items: center;
//   margin: 0.6rem 0;
// `;

// const ReceiptCountry = styled.select.attrs({
//   name: 'country',
// })`
//   color: #333333;
//   font-size: 1rem;
// `;

// const Option = styled.option`
//   font-size: 3rem;
// `;

// const RemittanceWrap = styled(ReceiptWrap)``;

// const ExchangRateWrap = styled(ReceiptWrap)``;

// const Remittance = styled.input`
//   padding: 0.5rem 0;
//   margin-right: 0.3rem;
//   border-radius: 5px;
//   border: 1px solid #d3d7e1;
//   background-color: #fff;
// `;

// const Submit = styled.button.attrs({
//   type: 'button',
// })`
//   margin-top: 10px;
//   padding: 1rem 4rem;
//   border-radius: 3rem;
//   color: #eef8ee;
//   background-color: #02ce89;
//   font-size: 1.2rem;
//   font-weight: 700;
// `;

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
  width: 1200px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;
