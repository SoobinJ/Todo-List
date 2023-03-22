import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { LayoutBtn, LayoutBtnContainer } from '../../components/styled';
import {
  CardContainer,
  CardSection,
  DateFolder,
  DateFolderContainer,
  DeadLineAlarm,
  GoalInputContainer,
  HomeLayout,
  LayoutLeft,
  LayoutRight,
  MemoContainer,
  TopContainer,
} from './HomeStyledComponents';
import FolderImg from '../../assets/home/img_folder.png';
import SettingImg from '../../assets/home/img_setting.png';
import PlusImg from '../../assets/home/img_plus.png';
import Card from '../../components/home/Card';
import Memo from '../../components/home/Memo';
import { MemoLayout } from '../../components/home/MemoStyledComponents';
import {
  miniMemoModalOnAction,
  myPageModalOnAction,
} from '../../store/actions/modal';

function Home() {
  const navigate = useNavigate();
  const [goal, setGoal] = useState('');
  const dispath = useDispatch();
  const handleMyPageModal = () => {
    dispath(myPageModalOnAction());
  };
  return (
    <HomeLayout>
      <LayoutLeft>
        <LayoutBtnContainer>
          <LayoutBtn bg="#FF6057" />
          <LayoutBtn bg="#FFBB2E" />
          <LayoutBtn bg="#28C840" />
        </LayoutBtnContainer>
        <div id="userName">전수빈님</div>
        <DeadLineAlarm>
          <div id="deadlineTitle">마감 1일전!!</div>
          <div id="deadlineContent">정책분석 평가 과제 제출</div>
        </DeadLineAlarm>
        {/* map으로 돌리기 */}
        <DateFolderContainer>
          <DateFolder>
            <img src={FolderImg} alt="folder" />
            <div id="date">2023.03.13</div>
          </DateFolder>
          <DateFolder>
            <img src={FolderImg} alt="folder" />
            <div id="date">2023.03.13</div>
          </DateFolder>
          <DateFolder>
            <img src={FolderImg} alt="folder" />
            <div id="date">2023.03.13</div>
          </DateFolder>
          <DateFolder>
            <img src={FolderImg} alt="folder" />
            <div id="date">2023.03.13</div>
          </DateFolder>
          <DateFolder>
            <img src={FolderImg} alt="folder" />
            <div id="date">2023.03.13</div>
          </DateFolder>
          <DateFolder>
            <img src={FolderImg} alt="folder" />
            <div id="date">2023.03.13</div>
          </DateFolder>
          <DateFolder>
            <img src={FolderImg} alt="folder" />
            <div id="date">2023.03.13</div>
          </DateFolder>
        </DateFolderContainer>
        <img
          role="presentation"
          id="setting"
          src={SettingImg}
          alt="setting"
          onClick={handleMyPageModal}
        />
      </LayoutLeft>
      <LayoutRight>
        <TopContainer>
          <div id="todayDate">2023.03.13</div>
          <img
            role="presentation"
            id="todoPlus"
            src={PlusImg}
            alt="plus"
            onClick={() => {
              navigate('/add');
            }}
          />
        </TopContainer>
        <GoalInputContainer>
          <input
            value={goal}
            onChange={(e) => {
              setGoal(e.target.value);
            }}
            type="text"
            placeholder="오늘의 목표를 입력해주세요!"
          />
          <hr />
        </GoalInputContainer>
        <CardContainer>
          <CardSection id="ready" color="#FF6057">
            <div className="cardSectionTitle">미진행</div>
            <Card state="ready" />
            <Card state="ready" />
            <Card state="ready" />
            <Card state="ready" />
          </CardSection>
          <CardSection id="proceeding" color="#FFBB2E">
            <div className="cardSectionTitle">진행중</div>
            <Card state="proceeding" />
            <Card state="proceeding" />
          </CardSection>
          <CardSection id="complete" color="#28C840">
            <div className="cardSectionTitle">완료</div>
            <Card state="complete" />
          </CardSection>
        </CardContainer>
        <MemoContainer>
          <Memo />
          <Memo />
          <Memo />
          <MemoPlus />
        </MemoContainer>
      </LayoutRight>
    </HomeLayout>
  );
}

export default Home;

export function MemoPlus() {
  const dispath = useDispatch();
  const handleMemoModal = () => {
    dispath(miniMemoModalOnAction());
  };
  return (
    <MemoLayout state="plus" onClick={handleMemoModal}>
      <img src={PlusImg} alt="plus" />
    </MemoLayout>
  );
}
