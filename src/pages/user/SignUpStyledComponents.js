import styled from 'styled-components';

export const SignUpIntroTextBox = styled.div`
  font-size: 2rem;
  font-weight: 700;
  margin-top: 1rem;
  display: ${(props) => (props.isVerify ? 'none' : 'flex' || 'flex')};
  justify-content: center;
`;
export const PhoneVerifyContainer = styled.div`
  display: ${(props) => (props.isResponse ? 'flex' : 'none' || 'flex')};
  justify-content: space-between;
`;
export const VerifyMessageBox = styled.div`
  margin-bottom: 1.9rem;
  width: 46.9rem;
  height: 4.2rem;
  border: 2px solid #28c840;
  border-radius: 1rem;
  display: ${(props) => (props.isVerify ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.8rem;
  & span {
    color: #28c840;
    font-size: 2rem;
  }
`;
export const SignUpBtnContainer = styled.div`
  display: flex;
  margin-top: ${(props) => props.marginTop};
  flex-direction: column;
  align-items: center;
`;
