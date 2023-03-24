import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DefaultBtn,
  LayoutBtn,
  LayoutBtnContainer,
  ModalBackground,
} from '../../../components/styled';
import { detailTodoModalOffAction } from '../../../store/actions/modal';
import {
  ContentContainer,
  ContentInputContainer,
  ModalLayout,
  TitleContainer,
  TitleInputContainer,
} from './DetailToDoStyledComponents';

function DetailToDo() {
  const modalState = useSelector((state) => state.ModalReducer.DetailTodoModal);
  const dispath = useDispatch();
  const [title, setTitle] = useState('정책분석평가 과제');
  const [content, setContent] = useState(
    '정책분석평가 과제 03.2 뭐 블라블라블라',
  );
  const handleDetailModal = () => {
    dispath(detailTodoModalOffAction());
  };
  return (
    modalState && (
      <ModalBackground>
        <ModalLayout>
          <LayoutBtnContainer>
            <LayoutBtn bg="#FF6057" id="closeBtn" onClick={handleDetailModal} />
          </LayoutBtnContainer>
          <ContentContainer>
            <TitleInputContainer>
              <TitleContainer>
                <input
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                  type="text"
                />
                <div id="deadline">2023.03.25 마감</div>
              </TitleContainer>
              <hr />
            </TitleInputContainer>
            <ContentInputContainer>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </ContentInputContainer>
            <DefaultBtn>수정완료</DefaultBtn>
          </ContentContainer>
        </ModalLayout>
      </ModalBackground>
    )
  );
}

export default DetailToDo;
