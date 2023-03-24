import styled from 'styled-components';
import { DefaultBtn } from '../../../components/styled';

export const ModalLayout = styled.div`
  position: fixed;
  top: 10%;
  display: flex;
  flex-direction: column;
  width: 95rem;
  height: 74.3rem;
  background-color: #fff;
  border-radius: 3.3rem;
  justify-content: flex-start;
  ${DefaultBtn} {
    align-self: flex-end;
  }
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 3.8rem;
`;
export const TitleInputContainer = styled.div`
  width: 100%;
  margin-bottom: 2.6rem;
  input {
    border: none;
    font-weight: 500;
    font-size: 4rem;
  }
  input::placeholder {
    color: #000;
  }
  input:focus {
    outline: none;
  }
  hr {
    border: 3px solid #ccc;
    border-bottom: 0;
  }
`;
export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.2rem;
  #deadline {
    font-size: 2.8rem;
    line-height: 3.4rem;
    font-weight: 700;
    color: #ff6057;
  }
`;
export const ContentInputContainer = styled.div`
  width: 100%;
  textarea {
    color: #1e1e1e;
    width: 100%;
    height: 45rem;
    font-size: 2rem;
    line-height: 2.4rem;
    font-family: Cabin-Regular;
    background: none;
    border: none;
    resize: none;
  }
  textarea:focus {
    outline: none;
  }
`;
