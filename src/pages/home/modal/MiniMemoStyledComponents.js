import styled from 'styled-components';
import { DefaultBtn, LayoutBtnContainer } from '../../../components/styled';

export const ModalBackground = styled.div`
  z-index: 99;
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.73);
`;

export const ModalLayout = styled.div`
  position: fixed;
  top: 10%;
  display: flex;
  flex-direction: column;
  width: 74.3rem;
  height: 74.3rem;
  background-color: #fff1b8;
  border-radius: 3.3rem;
  justify-content: flex-start;
  & ${DefaultBtn} {
    align-self: flex-end;
    justify-self: flex-end;
    margin-right: 3.9rem;
    margin-bottom: 3.9rem;
  }
  ${LayoutBtnContainer} {
    margin-bottom: 0;
  }
`;

export const ContentContainer = styled.div`
  margin: 3rem 3.9rem;
  height: 54rem;
  textarea {
    width: 100%;
    height: 100%;
    font-size: 2rem;
    font-family: Cabin-Regular;
    background: none;
    border: none;
    resize: none;
  }
  textarea:focus {
    outline: none;
  }
`;
