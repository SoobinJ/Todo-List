import React, { useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Memo from '../../components/home/Memo';
import {
  DefaultBtn,
  LayoutBtn,
  LayoutBtnContainer,
} from '../../components/styled';
import { deadLineSettingOnAction } from '../../store/actions/modal';
import {
  AddToDoLayout,
  ContentContainer,
  ContentInputContainer,
  MiniMemoContainer,
  TitleInputContainer,
  TopContainer,
} from './AddToDoStyledComponents';
import { LayoutLeft, LayoutRight } from './HomeStyledComponents';
import { MEMO_ITEM } from './Home';

function AddToDo() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  const handleDeadLineSettingModal = () => {
    dispath(deadLineSettingOnAction());
  };

  return (
    <AddToDoLayout>
      <LayoutLeft>
        <LayoutBtnContainer>
          <LayoutBtn bg="#FF6057" onClick={handleHome} />
          <LayoutBtn bg="#FFBB2E" />
          <LayoutBtn bg="#28C840" />
        </LayoutBtnContainer>
        <div id="userName">전수빈님</div>
        <MiniMemoContainer>
          {MEMO_ITEM.map((item) => {
            return (
              <Memo key={item.id} title={item.title} content={item.content} />
            );
          })}
        </MiniMemoContainer>
      </LayoutLeft>
      <LayoutRight>
        <TopContainer>
          <div id="date">{moment().format('YYYY.MM.DD')}</div>
          <SaveBtn
            onClick={handleDeadLineSettingModal}
            disabled={title === '' || content === ''}
          >
            저장하기
          </SaveBtn>
        </TopContainer>
        <ContentContainer>
          <TitleInputContainer>
            <input
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
              type="text"
              placeholder="제목"
            />
            <hr />
          </TitleInputContainer>
          <ContentInputContainer>
            <textarea
              placeholder="내용을 입력해주세요"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </ContentInputContainer>
        </ContentContainer>
      </LayoutRight>
    </AddToDoLayout>
  );
}

export default AddToDo;

const SaveBtn = styled(DefaultBtn)`
  background-color: rgba(255, 215, 55);
  color: #000;

  &:disabled {
    background: rgba(255, 215, 55, 0.6);
    color: rgba(0, 0, 0, 0.6);
  }
`;
