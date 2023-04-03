import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
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

  // 임시 데이터
  const [items, setItems] = useState({
    ready: [
      {
        id: '1',
        title: 'Title1',
      },
      {
        id: '2',
        title: 'Title2',
      },
      {
        id: '3',
        title: 'Title3',
      },
    ],
    proceeding: [
      {
        id: '4',
        title: 'Title4',
      },
      {
        id: '5',
        title: 'Title5',
      },
    ],
    complete: [
      {
        id: '6',
        title: 'Title6',
      },
      {
        id: '7',
        title: 'Title7',
      },
      {
        id: '8',
        title: 'Title8',
      },
    ],
  });

  const onDragEnd = ({ source, destination }) => {
    if (!destination) return;

    const scourceKey = source.droppableId;
    const destinationKey = destination.droppableId;

    const nitems = JSON.parse(JSON.stringify(items));
    const [targetItem] = nitems[scourceKey].splice(source.index, 1);
    nitems[destinationKey].splice(destination.index, 0, targetItem);
    setItems(nitems);
  };
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }
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
        <DragDropContext onDragEnd={onDragEnd}>
          <CardContainer>
            {Object.keys(items).map((key) => (
              <Droppable key={key} droppableId={key}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...provided.droppableProps}
                  >
                    <CardSection
                      id={key}
                      color={
                        key === 'ready'
                          ? '#FF6057'
                          : key === 'proceeding'
                          ? '#FFBB2E'
                          : '#28C840'
                      }
                    >
                      <div className="cardSectionTitle">
                        {key === 'ready'
                          ? '미진행'
                          : key === 'proceeding'
                          ? '진행중'
                          : '완료'}
                      </div>
                      {items[key].map((item, index) => (
                        <Draggable
                          key={item.id}
                          draggableId={item.id}
                          index={index}
                        >
                          {(provided) => (
                            <div
                              ref={provided.innerRef}
                              // eslint-disable-next-line react/jsx-props-no-spreading
                              {...provided.draggableProps}
                              // eslint-disable-next-line react/jsx-props-no-spreading
                              {...provided.dragHandleProps}
                            >
                              <Card state={key} title={item.title} />
                            </div>
                          )}
                        </Draggable>
                      ))}
                    </CardSection>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </CardContainer>
        </DragDropContext>
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
