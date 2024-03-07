import styled from 'styled-components';
import loginId from '../../assets/user/img_loginID.png';
import loginPw from '../../assets/user/img_loginPW.png';
import signUpPhone from '../../assets/user/img_signUpPhone.png';
import signUpVerify from '../../assets/user/img_signUpVerify.png';

export const Title = styled.div`
  font-size: 6rem;
  color: #ffd737;
  font-family: Cabin-Bold;
  line-height: 7.3rem;
  text-align: center;
`;
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${(props) => props.marginTop};
  width: ${(props) => props.width || '41.7rem'};
  input {
    background-image: url(${loginId});
    background-position: 2rem center;
    background-repeat: no-repeat;
    background-size: 3rem;
    padding-left: 7.7rem;
    height: 7.5rem;
    border: 1px solid #ccc;
    border-radius: 1rem;
    margin-bottom: 2.2rem;
    font-family: Cabin-Bold;
    color: #1e1e1e;
    font-size: 2rem;
  }
  input: last-child {
    margin-bottm: 1.9rem;
  }
  input::placeholder {
    color: #ccc;
  }
  #pw,
  #confirmPw {
    background-image: url(${loginPw});
  }
  #phone {
    background-image: url(${signUpPhone});
  }
  #verifycode {
    background-image: url(${signUpVerify});
  }
  input:hover {
    border: 1px solid #ffbb2e;
  }
  input:focus {
    outline: none;
    border: 2px solid #ffbb2e;
  }
`;
export const LoginBtn = styled.button`
  width: ${(props) => props.width || '41.7rem'};
  margin-top: ${(props) => props.marginTop};
  height: 7.5rem;
  border-radius: 1.2rem;
  background: ${(props) => props.bg};
  margin-bottom: ${(props) => props.marginBottom || '2.8rem'};
  font-family: Cabin-Bold;
  font-size: 2.8rem;
  line-height: 7.2rem;
  text-align: center;
  color: #fff;

  &:disabled {
    background-color: #ccc;
  }
`;
export const UserNavigateTextContainer = styled.div`
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  & span {
    font-size: 3rem;
  }
  & a {
    cursor: pointer;
    font-weight: 700;
    color: #ffbb2e;
    font-size: 2.4rem;
    text-decoration: none;
  }
`;

export const ErrorMessageBox = styled.div`
  display: ${(props) => (props.isError ? 'flex' : 'none') || 'flex'};
  width: ${(props) => props.width || '41.7rem'};
  height: 2.5rem;
  border: 2px solid #e1512e;
  border-radius: 1rem;
  align-items: center;
  justify-content: center;
  img {
    width: 2rem;
    height: 2rem;
    margin-right: 1rem;
  }
  div {
    font-family: Cabin-Medium;
    font-size: 1.5rem;
    color: #e1512e;
  }
`;
