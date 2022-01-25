# 1조 Free Pass

## 👨‍💻 프로젝트 소개

원티드 X 프리온보딩 1주차 첫번째 프로젝트로 2가지의 환율 계산기를 구현했습니다.

<p>팀장: 이용우 <br>
팀구성: 김유량, 양주영, 이용우, 홍유진</p>

배포주소 : http://wanted.freepass.s3-website.ap-northeast-2.amazonaws.com/<br>
설치 및 시작방법

- npm i 패키지 설치
- npm start 로컬서버 실행

<br/>

## ⚙️ Tools

- View (React.js, React-Router, Styled-components)
- Build Tool (Create React App)
- Code Quality Tool (Prettier)
- Other Tools (Git, Github, notion, Slack. AWS)

<br/>

## <b>첫번째 계산기</b>

<p>멤버 : 양주영, 이용우</p>

구현목록

- select value값에 따른 환율 업데이트
- 환율 API 불러오기
- 3자리 이상 입력하게 되면 , 자동입력
- 수취국가에 따른 화폐 단위 변화

  ![계산기1](https://user-images.githubusercontent.com/75065159/151044581-f458d60f-f595-479f-b6b1-9cab664e36c9.gif)

- 송금액의 값을 제출 한다면 수취금액 노출
- 송금액 입력값에 조건식을 추가 <br>(숫자가 아닐 때, 0보다 작은금액, 10000 보다 큰 값 일 때 팝업알림)
  ![환율계산기](https://user-images.githubusercontent.com/75065159/151046056-eb8740d8-6628-474e-99fe-42117460a732.gif)

<br/>

## <b>두번째 계산기</b>

<p>멤버 : 김유량, 홍유진</p>

구현목록

- input창에 숫자만 입력할 수 있는 조건문 작성
- select box로 미국, 한국, 홍콩, 일본, 캐나다, 중국를 선택할 수 있도록 드롭다운 메뉴 구현
- 환율 API 불러오기
- 환율에 따른 드롭다운 메뉴 선택시 해당 화면에 노출
- 드롭다운 메뉴에서 선택한 통화와 탭에서 선택한 통화의 환율을 계산하여 화면에 노출
- 기준일의 형식에 맞는 날짜 포맷팅
