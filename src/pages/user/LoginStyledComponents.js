import styled from 'styled-components';
import loginId from '../../assets/login/img_loginID.png';
import loginPw from '../../assets/login/img_loginPW.png';

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
  width: 41.7rem;
  input {
    background-image: url(${loginId});
    background-position: 2rem center;
    background-repeat: no-repeat;
    background-size: 3rem;
    padding-left: 7.7rem;
    width: 33.6rem;
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
  #pw {
    background-image: url(${loginPw});
  }
  input:hover {
    border: 1px solid #ffbb2e;
  }
  input:focus {
    outline: none;
    border: 2px solid #ffbb2e;
  }
`;
export const ErrorMessageBox = styled.div`
  display: ${(props) => (props.isError ? 'flex' : 'none')};
  width: 41.7rem;
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
export const LoginBtn = styled.div`
  pointer-events: ${(props) => (props.isClick ? 'auto' : 'none' || 'none')};
  cursor: ${(props) => (props.isClick ? 'pointer' : 'Default' || 'Default')};
  width: 41.7rem;
  height: 7.5rem;
  border-radius: 1.2rem;
  background: ${(props) => props.bg};
  margin-bottom: 2.8rem;
  font-family: Cabin-Bold;
  font-size: 2.8rem;
  line-height: 7.2rem;
  text-align: center;
  color: #fff;
`;
