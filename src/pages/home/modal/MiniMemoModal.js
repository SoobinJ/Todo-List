import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DefaultBtn,
  LayoutBtn,
  LayoutBtnContainer,
  ModalBackground,
} from '../../../components/styled';
import { miniMemoModalOffAction } from '../../../store/actions/modal';
import { ContentContainer, ModalLayout } from './MiniMemoStyledComponents';

function MiniMemoModal() {
  const dispath = useDispatch();
  const modalState = useSelector((state) => state.ModalReducer.MiniMemoModal);
  const [memoContent, setMemoContent] = useState('');

  const handleMemoModal = () => {
    dispath(miniMemoModalOffAction());
  };

  return (
    modalState && (
      <ModalBackground>
        <ModalLayout>
          <LayoutBtnContainer>
            <LayoutBtn bg="#FF6057" id="closeBtn" onClick={handleMemoModal} />
          </LayoutBtnContainer>
          <ContentContainer>
            <textarea
              placeholder="메모를 입력해주세요!"
              value={memoContent}
              onChange={(e) => setMemoContent(e.target.value)}
            />
          </ContentContainer>
          <DefaultBtn>저장하기</DefaultBtn>
        </ModalLayout>
      </ModalBackground>
    )
  );
}

export default MiniMemoModal;
