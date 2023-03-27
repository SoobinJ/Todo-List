import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  DefaultBtn,
  LayoutBtn,
  LayoutBtnContainer,
  ModalBackground,
} from '../../components/styled';
import {
  completeModalOnAction,
  myPageModalOffAction,
} from '../../store/actions/modal';
import {
  BottomContainer,
  ContentBox,
  ModalLayout,
  ProfileImgBox,
  TopContainer,
  UserSettingContainer,
  UserSettingContentContainer,
  UserSettingInput,
  UserSettingTitleContainer,
} from './MyPageModalStyledComponents';
import defaultProfileImage from '../../assets/myPage/img_defaultProfile.png';

function MyPageModal() {
  const modalState = useSelector((state) => state.ModalReducer.MyPageModal);
  const dispath = useDispatch();
  const handleMyPageModal = () => {
    dispath(myPageModalOffAction());
  };
  const handleCompleteModal = () => {
    handleMyPageModal();
    dispath(completeModalOnAction());
  };
  const [userName, setUserName] = useState('전수빈');
  const [deadLine, setDeadLine] = useState(3);
  return (
    modalState && (
      <ModalBackground>
        <ModalLayout>
          <LayoutBtnContainer>
            <LayoutBtn bg="#FF6057" id="closeBtn" onClick={handleMyPageModal} />
          </LayoutBtnContainer>
          <TopContainer>
            <div id="userName">전수빈님!</div>
            <DefaultBtn onClick={handleCompleteModal}>수정완료</DefaultBtn>
          </TopContainer>
          <ContentBox>
            <UserSettingContainer>
              <UserSettingTitleContainer>
                <div id="title">계정설정</div>
                <div id="subtitle">
                  닉네임과 프로필 이미지를 수정할 수 있습니다!
                </div>
              </UserSettingTitleContainer>
              <UserSettingContentContainer>
                <ProfileImgBox
                  style={{
                    backgroundImage: `url(${defaultProfileImage})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center center',
                  }}
                />
                <UserSettingInput
                  type="text"
                  maxLength={30}
                  value={userName}
                  onChange={(e) => {
                    setUserName(e.target.value);
                  }}
                  id="userName"
                />
              </UserSettingContentContainer>
            </UserSettingContainer>
            <UserSettingContainer>
              <UserSettingTitleContainer>
                <div id="title">마감 기한 설정</div>
                <div id="subtitle">
                  알림을 보여주는 마감기한을 설정할 수 있습니다!
                </div>
              </UserSettingTitleContainer>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: '1.4rem',
                }}
              >
                <UserSettingInput
                  type="text"
                  maxLength={30}
                  value={deadLine}
                  onChange={(e) => {
                    setDeadLine(e.target.value);
                  }}
                  id="userName"
                />
              </div>
            </UserSettingContainer>
          </ContentBox>
          <BottomContainer>
            <div id="logout">로그아웃</div>
            <div>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</div>
            <div id="withdrawal">회원탈퇴</div>
          </BottomContainer>
        </ModalLayout>
      </ModalBackground>
    )
  );
}

export default MyPageModal;
