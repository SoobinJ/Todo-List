import React from 'react';
import { useDispatch } from 'react-redux';
import { detailToDoModalOnAction } from '../../store/actions/modal';
import {
  CardContent,
  CardLayout,
  ProceedingState,
} from './CardStyledComponents';

function Card(props) {
  const cardState = props;
  const dispath = useDispatch();
  const handleDetailToDoModal = () => {
    dispath(detailToDoModalOnAction());
  };
  return (
    <CardLayout onClick={handleDetailToDoModal}>
      <ProceedingState cardState={cardState.state} />
      <CardContent>
        <div id="cardTitle">정책분석평가 과제 제출</div>
        <div id="cardDeadline">12/12 마감</div>
        <div id="cardContent">정책분석평가 과제는 어쩌구 저쩌구!</div>
      </CardContent>
    </CardLayout>
  );
}

export default Card;
