import React, { useEffect, useState } from 'react';
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
  // 비밀번호 규칙 알차 여부
  const [isValidError, setIsValidError] = useState(false);
  // 확인 비밀번호 일치 여부
  const [isConfirmError, setIsConfirmError] = useState(false);
  // 아이디, 비밀번호 관련 에러 통합
  const [isPwError, setIsPwError] = useState(false);
  // 인증요청 버튼 활성화 여부
  const [isValidRequest, setIsValidRequest] = useState(false);
  // 요청 보냈는지 여부
  const [isResponse, setIsResponse] = useState(false);
  // 인증번호 에러 메세지 여부
  const [isValidVerifyCodeError, setIsValidVerifyCodeError] = useState(false);
  // 최종 인증여부
  const [isVerify, setIsVerify] = useState(false);
  const [step, setStep] = useState(1);
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
  const isValidPassword = (password) => {
    return (
      password.match(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[{}[\]()/?.,;:|~`!@#$%^&*\-_+<>\\='"])[A-Za-z\d{}[\]()/?.,;:|~`!@#$%^&*\-_+<>\\='"]{8,}$/,
      ) !== null
    );
  };
  // 비밀번호 오류 검사
  const handleIDPW = () => {
    if (pw !== confirmPw) {
      setIsConfirmError(true);
      setIsValidError(false);
      return;
    }
    if (!isValidPassword(pw)) {
      setIsValidError(true);
      setIsConfirmError(false);
      return;
    }
    setIsConfirmError(false);
    setIsValidError(false);
    setStep(2);
  };

  // 인증요청 버튼 활성화 관리
  useEffect(() => {
    if (name.length >= 2 && phone.length >= 13) {
      setIsValidRequest(true);
    } else {
      setIsValidRequest(false);
    }
  }, [name, phone]);

  // 비밀번호 관련 에러 모두 관리
  useEffect(() => {
    if (isValidError || isConfirmError) {
      setIsPwError(true);
    } else {
      setIsPwError(false);
    }
  }, [isValidError, isConfirmError]);

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
        <InputContainer width="46.9rem" marginTop="6.5rem">
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
              bg={isValidRequest ? '#FFD737' : '#ccc'}
              style={{
                fontSize: '1.8rem',
              }}
              isClick={isValidRequest}
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
              bg={verifyCode.length >= 4 ? '#FFD737' : '#ccc'}
              style={{
                fontSize: '1.8rem',
              }}
              isClick={verifyCode.length >= 4}
              onClick={() => {
                if (verifyCode === '1234') {
                  setIsValidVerifyCodeError(false);
                  setIsVerify(true);
                } else {
                  setIsValidVerifyCodeError(true);
                  setIsVerify(false);
                }
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
        isError={isPwError}
        width="46.9rem"
        style={{
          marginBottom: '1.9rem',
          marginTop: '10rem',
        }}
      >
        <img src={errorImg} alt="error" />
        {isValidError ? (
          <div>영문, 숫자, 특수문자를 포함한 8자 이상을 입력해주세요!</div>
        ) : (
          <div>비밀번호가 일치하지 않습니다. 다시 확인해주세요!</div>
        )}
      </ErrorMessageBox>

      {step === 1 ? (
        <LoginBtn
          marginTop={isPwError ? '0' : '15rem'}
          marginBottom="1.4rem"
          width="46.9rem"
          bg={id && pw && confirmPw ? '#FFD737' : '#ccc'}
          isClick={id && pw && confirmPw}
          onClick={() => {
            handleIDPW();
          }}
        >
          다음
        </LoginBtn>
      ) : (
        <SignUpBtnContainer
          marginTop={
            isResponse
              ? isValidVerifyCodeError || isVerify
                ? '11rem'
                : '15rem'
              : '25rem'
          }
        >
          {isVerify ? (
            <VerifyMessageBox isVerify={isVerify}>
              인증이&nbsp;<span>완료</span>&nbsp;되었습니다! 가입을
              마무리해주세요 😃
            </VerifyMessageBox>
          ) : (
            <ErrorMessageBox
              isError={isValidVerifyCodeError}
              width="46.9rem"
              style={{
                marginBottom: '1.9rem',
              }}
            >
              <img src={errorImg} alt="error" />
              <div>인증번호가 옳지 않습니다. 다시한번 확인해주세요!</div>
            </ErrorMessageBox>
          )}
          <LoginBtn
            marginBottom="1.4rem"
            width="46.9rem"
            bg="#FFD737"
            disabled={!isVerify}
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
        <a href="/signin">로그인</a>
        &nbsp;&nbsp;하러가기!
      </UserNavigateTextContainer>
    </>
  );
};

export default signIn;
