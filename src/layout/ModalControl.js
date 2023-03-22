import React from 'react';
import DeadLineSettingModal from '../pages/home/modal/DeadLineSettingModal';
import MiniMemoModal from '../pages/home/modal/MiniMemoModal';
import MyPageModal from '../pages/myPage/MyPageModal';

function ModalControl() {
  return (
    <>
      <MiniMemoModal />
      <MyPageModal />
      <DeadLineSettingModal />
    </>
  );
}

export default ModalControl;
