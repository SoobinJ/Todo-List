import { Calendar } from 'react-calendar';
import styled from 'styled-components';
import { DefaultBtn, LayoutBtnContainer } from '../../../components/styled';

export const ModalLayout = styled.div`
  position: fixed;
  top: 15%;
  display: flex;
  flex-direction: column;
  width: 70rem;
  height: 70rem;
  background-color: #fff;
  border-radius: 3.3rem;
  justify-content: flex-start;
  #title {
    font-size: 3.4rem;
    font-weight: 700;
    text-align: center;
  }
  ${DefaultBtn} {
    align-self: center;
    margin-top: 3rem;
  }
  ${LayoutBtnContainer} {
    margin-bottom: 0;
  }
`;
export const CustomCalendar = styled(Calendar)`
  align-self: center;
  width: 45rem;
  margin-top: 6rem;
  .react-calendar__tile--active {
    border-radius: 50%;
    background: #ffd737;
    width: 3rem;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #ffd737;
    width: 3rem;
  }
  .react-calendar__tile--now {
    background: #28c840;
    border-radius: 50%;
    width: 3rem;
  }
  .react-calendar__tile {
    line-height: 4.5rem;
  }
  .react-calendar__month-view__weekdays {
    font-size: 1.5rem;
  }
`;
