import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment/moment';
import {
  DefaultBtn,
  LayoutBtn,
  LayoutBtnContainer,
  ModalBackground,
} from '../../../components/styled';
import {
  completeModalOnAction,
  deadLineSettingOffAction,
} from '../../../store/actions/modal';
import {
  CustomCalendar,
  ModalLayout,
} from './DeadLineSettingModalStyledComponents';
import 'react-calendar/dist/Calendar.css';

function DeadLineSettingModal() {
  const modalState = useSelector(
    (state) => state.ModalReducer.DeadLineSettingModal,
  );
  const dispath = useDispatch();
  const [deadLine, setDeadLine] = useState(new Date());

  const handleDeadLineSettingModal = () => {
    dispath(deadLineSettingOffAction());
  };

  const handleCompleteModal = () => {
    dispath(deadLineSettingOffAction());
    dispath(completeModalOnAction());
  };
  return (
    modalState && (
      <ModalBackground>
        <ModalLayout>
          <LayoutBtnContainer>
            <LayoutBtn
              bg="#FF6057"
              id="closeBtn"
              onClick={handleDeadLineSettingModal}
            />
          </LayoutBtnContainer>
          <div id="title">마감 기한 설정</div>
          <CustomCalendar
            showNeighboringMonth={false}
            formatDay={(locale, date) => moment(date).format('DD')}
            onChange={setDeadLine}
            value={deadLine}
          />
          <DefaultBtn onClick={handleCompleteModal}>등록하기</DefaultBtn>
        </ModalLayout>
      </ModalBackground>
    )
  );
}

export default DeadLineSettingModal;
