import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ErrorMessageBox,
  InputContainer,
  LoginBtn,
  Title,
} from './LoginStyledComponents';
import errorImg from '../../assets/login/img_error.png';
import { LayoutBtn, LayoutBtnContainer } from '../../components/styled';

function Login() {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [isError] = useState(false);

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
        <LoginBtn
          bg={id && pw ? '#28C840' : '#ccc'}
          isClick={id && pw && !isError}
          onClick={() => {
            navigate('/home');
          }}
        >
          LOGIN
        </LoginBtn>
        <LoginBtn bg="#F9E000">KAKAO LOGIN</LoginBtn>
      </InputContainer>
    </>
  );
}

export default Login;
