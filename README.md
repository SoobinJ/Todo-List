## Todo-List

### 3.14

프로젝트 초기 환경 세팅

- eslint, prettier 설정
- redux, styled-components
- GlobalStyle 설정
  - 폰트 bold, medium, regular 설정
  - css reset 처리
  - 반응형을 위한 device

### 3.15

프로젝트 초기 세팅 추가

- react-router-dom
- eslintrc.js 파일추가, packge.json에서 관리하지 않고 eslintrc.js 파일에서 관리
- App.js에 기본 세팅
  - 404, 500일 때 페이지 처리 및 로딩 중일 경우 Suspense로 처리
  - 기본적으로는 Login 페이지

### 3.16

로그인, 메인 - 홈 퍼블리싱

- DefaultLayout.js의 경우 이후 모달관련 추가예정
- AppContent.js에 기본 레이아웃 및 routes 추가
  - 로그인, 메인, 설정 페이지에서 공통적으로 사용되는 레이아웃 따로 뺀 후 AppContent.js에 추가
- 로그인페이지 퍼블리싱
  - 아이디, 비밀번호 입력 시 로그인 버튼 활성화
  - 아이디, 비밀번호 에러 메세지 -> 이후 api 연동 후 구체화 예정
  - 아이디, 비밀번호 입력창 마우스 오버, 클릭 시 테두리 효과
- 메인 - 홈 퍼블리싱
  - 메인 - 홈 기본적인 레이아웃
  - 할일 카드, 미니 메모 컴포넌트화
  - 할일 카드, 미니 메모의 경우 이후 api 연동 후 map 이용해서 수정 예정
