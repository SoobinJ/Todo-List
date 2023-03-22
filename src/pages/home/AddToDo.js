import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
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

function AddToDo() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();
  const dispath = useDispatch();

  useEffect(() => {
    const saveBtn = document.getElementById('saveBtn');
    if (title === '' || content === '') {
      saveBtn.style.background = 'rgba(255, 215, 55, 0.6)';
      saveBtn.style.color = 'rgba(0, 0, 0, 0.6)';
    } else {
      saveBtn.style.background = 'rgba(255, 215, 55)';
      saveBtn.style.color = 'rgba(0, 0, 0)';
    }
  }, [title, content]);

  const handleHome = () => {
    navigate('/home');
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
          <Memo />
          <Memo />
          <Memo />
          <Memo />
        </MiniMemoContainer>
      </LayoutLeft>
      <LayoutRight>
        <TopContainer>
          <div id="date">2021.03.21</div>
          <DefaultBtn id="saveBtn" onClick={handleDeadLineSettingModal}>
            저장하기
          </DefaultBtn>
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
