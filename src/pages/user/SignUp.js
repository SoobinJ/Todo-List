import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { LayoutBtn, LayoutBtnContainer } from '../../components/styled';
import {
  PhoneVerifyContainer,
  SignUpBtnContainer,
  SignUpIntroTextBox,
  VerifyMessageBox,
} from './SignUpStyledComponents';
import errorImg from '../../assets/user/img_error.png';
import {
  ErrorMessageBox,
  InputContainer,
  LoginBtn,
  Title,
  UserNavigateTextContainer,
} from './UserStyledComponents';

const signIn = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [confirmPw, setConfirmPw] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [verifyCode, setVerifyCode] = useState('');
  const [isError] = useState(false);
  const [step, setStep] = useState(2);
  const [isResponse, setIsResponse] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const navigate = useNavigate();
  // 휴대폰번호 숫자만 입력 + 자동 하이픈
  const handlePhonePress = (value) => {
    const str = value.replace(/[^0-9]/g, '');
    let tmp = '';

    if (str.length < 4) {
      return setPhone(str);
    }
    if (str.length < 7) {
      tmp += str.substr(0, 3);
      tmp += '-';
      tmp += str.substr(3);
      return setPhone(tmp);
    }
    if (str.length < 11) {
      tmp += str.substr(0, 3);
      tmp += '-';
      tmp += str.substr(3, 3);
      tmp += '-';
      tmp += str.substr(6);
      return setPhone(tmp);
    }
    if (str.length > 11) {
      return setPhone((cur) => cur);
    }
    tmp += str.substr(0, 3);
    tmp += '-';
    tmp += str.substr(3, 4);
    tmp += '-';
    tmp += str.substr(7);
    return setPhone(tmp);
  };

  return (
    <>
      <LayoutBtnContainer>
        <LayoutBtn bg="#FF6057" />
        <LayoutBtn bg="#FFBB2E" />
        <LayoutBtn bg="#28C840" />
      </LayoutBtnContainer>
      <Title>ToDo List</Title>
      <SignUpIntroTextBox>ToDo List에 가입해주세요!</SignUpIntroTextBox>
      {step === 1 ? (
        <InputContainer width="38.8rem" marginTop="6.5rem">
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
          <input
            type="password"
            maxLength={30}
            value={confirmPw}
            onChange={(e) => {
              setConfirmPw(e.target.value);
            }}
            placeholder="비밀번호 확인"
            id="confirmPw"
          />
          <SignUpIntroTextBox
            style={{
              marginTop: '0',
            }}
          >
            영문, 숫자, 특수문자를 포함한 8자 이상을 입력해주세요!
          </SignUpIntroTextBox>
        </InputContainer>
      ) : (
        <InputContainer width="46.9rem" marginTop="6.5rem">
          <input
            type="text"
            maxLength={30}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            placeholder="이름"
            id="name"
          />
          <PhoneVerifyContainer isResponse="true">
            <input
              style={{
                width: '60%',
              }}
              type="text"
              maxLength={14}
              value={phone}
              onChange={(e) => {
                handlePhonePress(e.target.value);
              }}
              placeholder="핸드폰 번호(-제외)"
              id="phone"
            />
            <LoginBtn
              width="20%"
              bg={name && phone ? '#FFD737' : '#ccc'}
              style={{
                fontSize: '1.8rem',
              }}
              isClick={name && phone}
              onClick={() => {
                setIsResponse(true);
              }}
            >
              {isResponse ? '재요청' : '인증요청'}
            </LoginBtn>
          </PhoneVerifyContainer>
          <PhoneVerifyContainer isResponse={isResponse}>
            <input
              style={{
                width: '60%',
              }}
              type="number"
              maxLength={4}
              value={verifyCode}
              onChange={(e) => {
                setVerifyCode(e.target.value);
              }}
              placeholder="인증번호"
              id="verifycode"
            />
            <LoginBtn
              width="20%"
              bg={verifyCode !== '' ? '#FFD737' : '#ccc'}
              style={{
                fontSize: '1.8rem',
              }}
              isClick={verifyCode !== ''}
              onClick={() => {
                setIsVerify(true);
              }}
            >
              인증확인
            </LoginBtn>
          </PhoneVerifyContainer>
          {isResponse ? (
            <SignUpIntroTextBox
              isVerify={isVerify}
              style={{
                marginTop: '0',
              }}
            >
              사용자님의 핸드폰번호로&nbsp;
              <span
                style={{
                  color: '#28C840',
                }}
              >
                인증번호
              </span>
              를 전송했습니다.
            </SignUpIntroTextBox>
          ) : (
            <SignUpIntroTextBox
              style={{
                marginTop: '0',
              }}
            >
              핸드폰 번호는&nbsp;
              <span
                style={{
                  color: '#28C840',
                }}
              >
                - 을 제외하고
              </span>
              &nbsp; 입력해주세요
            </SignUpIntroTextBox>
          )}
        </InputContainer>
      )}

      <ErrorMessageBox
        isError={isError}
        width="46.9rem"
        style={{
          marginBottom: '1.9rem',
          marginTop: '11.4rem',
        }}
      >
        <img src={errorImg} alt="error" />
        <div>영문, 숫자, 특수문자를 포함한 8자 이상을 입력해주세요!</div>
        {/* 확인 비밀번호가 맞지 않는 경우 추가 예정 , 상황에 맞게 메세지 변경 */}
      </ErrorMessageBox>

      {step === 1 ? (
        <LoginBtn
          marginTop={isError ? '0' : '16.3rem'}
          marginBottom="1.4rem"
          width="46.9rem"
          bg={id && pw && confirmPw ? '#FFD737' : '#ccc'}
          isClick={id && pw && confirmPw && !isError}
          onClick={() => {
            setStep(2);
          }}
        >
          다음
        </LoginBtn>
      ) : (
        <SignUpBtnContainer
          marginTop={
            isError
              ? '0'
              : isResponse
              ? isVerify
                ? '11rem'
                : '15rem'
              : '25rem'
          }
        >
          <VerifyMessageBox isVerify={isVerify}>
            인증이&nbsp;<span>완료</span>&nbsp;되었습니다! 가입을 마무리해주세요
            😃
          </VerifyMessageBox>
          <LoginBtn
            marginBottom="1.4rem"
            width="46.9rem"
            bg={name && phone && verifyCode ? '#FFD737' : '#ccc'}
            isClick={name && phone && verifyCode && !isError}
            onClick={() => {
              navigate('/home');
            }}
          >
            ToDo List와 함께하기
          </LoginBtn>
        </SignUpBtnContainer>
      )}
      <UserNavigateTextContainer>
        <span>🥳</span>&nbsp;&nbsp;이미 계정이 있다면&nbsp;&nbsp;
        <a href="/">로그인</a>
        &nbsp;&nbsp;하러가기!
      </UserNavigateTextContainer>
    </>
  );
};

export default signIn;
