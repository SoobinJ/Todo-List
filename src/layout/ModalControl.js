import React from 'react';
import CompleteModal from '../components/common/CompleteModal';
import DeadLineSettingModal from '../pages/home/modal/DeadLineSettingModal';
import DetailToDo from '../pages/home/modal/DetailToDo';
import MiniMemoModal from '../pages/home/modal/MiniMemoModal';
import MyPageModal from '../pages/myPage/MyPageModal';

function ModalControl() {
  return (
    <>
      <MiniMemoModal />
      <MyPageModal />
      <DeadLineSettingModal />
      <DetailToDo />
      <CompleteModal />
    </>
  );
}

export default ModalControl;
