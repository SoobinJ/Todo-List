import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import { completeModalOffAction } from '../../store/actions/modal';
import { LayoutBtn, LayoutBtnContainer, ModalBackground } from '../styled';

function CompleteModal() {
  const dispath = useDispatch();
  const navigate = useNavigate();
  const modalState = useSelector((state) => state.ModalReducer.CompleteModal);
  const handleCompleteModal = () => {
    dispath(completeModalOffAction());
    navigate('/home');
  };
  return (
    modalState && (
      <ModalBackground>
        <ModalLayout>
          <LayoutBtnContainer>
            <LayoutBtn
              bg="#FF6057"
              id="closeBtn"
              onClick={handleCompleteModal}
            />
          </LayoutBtnContainer>
          <TitleContainer>
            <div id="title">🥳 저장완료 되었습니다!</div>
            <div
              role="presentation"
              id="subTitle"
              onClick={handleCompleteModal}
            >
              <span>홈</span>으로 이동합니다!
            </div>
          </TitleContainer>
        </ModalLayout>
      </ModalBackground>
    )
  );
}

export default CompleteModal;

export const ModalLayout = styled.div`
  position: fixed;
  top: 30%;
  display: flex;
  flex-direction: column;
  width: 65.4rem;
  height: 35.4rem;
  background-color: #fff;
  border-radius: 3.3rem;
  justify-content: flex-start;
`;
export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  #title {
    font-size: 5rem;
    font-weight: 700;
    margin-bottom: 2.8rem;
    margin-top: 2.4rem;
  }
  #subTitle {
    font-size: 3rem;
    font-weight: 500;
    & span {
      color: #ffd737;
      font-weight: 700;
      font-size: 3.2rem;
    }
  }
`;
