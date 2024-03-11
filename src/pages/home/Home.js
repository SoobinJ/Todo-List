import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import moment from 'moment';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
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

const SLIDER_SETTING = {
  dots: true,
  infinite: true,
  slideToShow: 1,
  slideToScroll: 1,
  draggable: true,
  arrows: false,
};

const CARD_ITEM = {
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
};

const DATE_FOLER_ITEM = [
  {
    id: 1,
    date: '2024.03.01',
  },
  {
    id: 2,
    date: '2024.03.02',
  },
  {
    id: 3,
    date: '2024.03.03',
  },
  {
    id: 4,
    date: '2024.03.04',
  },
  {
    id: 5,
    date: '2024.03.05',
  },
  {
    id: 6,
    date: '2024.03.06',
  },
];

export const MEMO_ITEM = [
  {
    id: 1,
    title: 'memo1',
    content: '블라블라메모메모메모메모메모메모.................메모!!!~~~~~~',
  },
  {
    id: 2,
    title: 'memo2',
    content: '블라블라메모메모메모메모메모메모.................메모!!!~~~~~~',
  },
  {
    id: 3,
    title: 'memo3',
    content: '블라블라메모메모메모메모메모메모.................메모!!!~~~~~~',
  },
  {
    id: 4,
    title: 'memo4',
    content: '블라블라메모메모메모메모메모메모.................메모!!!~~~~~~',
  },
  {
    id: 4,
    title: 'memo4',
    content: '블라블라메모메모메모메모메모메모.................메모!!!~~~~~~',
  },
];

const DEADLINE_ALARM = [
  {
    id: 1,
    title: '알림1',
    content: '알림1 내용',
  },
  {
    id: 2,
    title: '알림2',
    content: '알림2 내용',
  },
];

function Home() {
  const navigate = useNavigate();
  const [goal, setGoal] = useState('');
  const [selectedDate, setSelectedDate] = useState(
    moment().format('YYYY.MM.DD'),
  );
  const dispath = useDispatch();
  const handleMyPageModal = () => {
    dispath(myPageModalOnAction());
  };

  // 임시 데이터
  const [items, setItems] = useState(CARD_ITEM);

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

  const handleDate = (date) => {
    setSelectedDate(date);
  };

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
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider {...SLIDER_SETTING}>
          {DEADLINE_ALARM.map((item) => {
            return (
              <DeadLineAlarm key={item.id}>
                <div id="deadlineTitle">{item.title}</div>
                <div id="deadlineContent">{item.content}</div>
              </DeadLineAlarm>
            );
          })}
        </Slider>
        {/* map으로 돌리기 */}
        <DateFolderContainer>
          {DATE_FOLER_ITEM.map((item) => {
            return (
              <DateFolder key={item.id} onClick={() => handleDate(item.date)}>
                <img src={FolderImg} alt="folder" />
                <div id="date">{item.date}</div>
              </DateFolder>
            );
          })}
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
          <div id="todayDate">{selectedDate}</div>
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
                      <div
                        style={{
                          height: '47rem',
                          overflowY: 'scroll',
                        }}
                      >
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
                      </div>
                    </CardSection>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </CardContainer>
        </DragDropContext>
        <MemoContainer>
          {MEMO_ITEM.map((item) => {
            return (
              <Memo key={item.id} title={item.title} content={item.content} />
            );
          })}
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
      <div className="plusMemoBox">
        <img src={PlusImg} alt="plus" />
      </div>
    </MemoLayout>
  );
}
