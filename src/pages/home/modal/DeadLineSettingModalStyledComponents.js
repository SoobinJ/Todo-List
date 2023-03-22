import { Calendar } from 'react-calendar';
import styled from 'styled-components';
import { DefaultBtn } from '../../../components/styled';

export const ModalLayout = styled.div`
  position: fixed;
  top: 15%;
  display: flex;
  flex-direction: column;
  width: 65rem;
  height: 65rem;
  background-color: #fff;
  border-radius: 3.3rem;
  justify-content: flex-start;
  #title {
    font-size: 4rem;
    font-weight: 700;
    text-align: center;
  }
  ${DefaultBtn} {
    align-self: center;
    margin-top: 7rem;
  }
`;
export const CustomCalendar = styled(Calendar)`
  align-self: center;
  margin-top: 5rem;
`;
