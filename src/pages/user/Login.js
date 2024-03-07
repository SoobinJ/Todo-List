import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import errorImg from '../../assets/user/img_error.png';
import { LayoutBtn, LayoutBtnContainer } from '../../components/styled';
import {
  ErrorMessageBox,
  InputContainer,
  LoginBtn,
  Title,
  UserNavigateTextContainer,
} from './UserStyledComponents';

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isError, setIsError] = useState(false);

  const handleLogin = () => {
    if (!(id === 'test@test.com' && pw === 'test1234!')) {
      setIsError(true);
      return;
    }

    navigate('/');
  };

  return (
    <>
      <LayoutBtnContainer>
        <LayoutBtn bg="#FF6057" />
        <LayoutBtn bg="#FFBB2E" />
        <LayoutBtn bg="#28C840" />
      </LayoutBtnContainer>
      <Title>ToDoList</Title>
      <InputContainer marginTop="9.9rem">
        <input
          type="text"
          maxLength={30}
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          placeholder="아이디"
          id="id"
        />
        <input
          type="password"
          maxLength={30}
          value={pw}
          onChange={(e) => {
            setPw(e.target.value);
          }}
          placeholder="비밀번호"
          id="pw"
        />
      </InputContainer>
      <ErrorMessageBox isError={isError}>
        <img src={errorImg} alt="error" />
        <div>아이디/비밀번호를 확인해주세요</div>
      </ErrorMessageBox>
      <InputContainer marginTop={isError ? '5.1rem' : '7.3rem'}>
        <LoginBtn bg="#28C840" disabled={!(id && pw)} onClick={handleLogin}>
          LOGIN
        </LoginBtn>
        <LoginBtn bg="#F9E000">KAKAO LOGIN</LoginBtn>
        <UserNavigateTextContainer>
          <span>🥳</span>&nbsp;&nbsp;아직 가입하지 않았다면&nbsp;&nbsp;
          <a href="/signup">회원가입</a>
          &nbsp;&nbsp; 하러가기!
        </UserNavigateTextContainer>
      </InputContainer>
    </>
  );
}

export default Login;
