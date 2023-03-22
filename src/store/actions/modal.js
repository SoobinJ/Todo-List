import { connect } from 'react-redux';

export const miniMemoModalOnAction = () => {
  document.body.style.overflow = 'hidden';
  return {
    type: 'MINIMEMO_ON',
  };
};

export const miniMemoModalOffAction = () => {
  document.body.style.overflow = 'unset';
  return {
    type: 'MINIMEMO_OFF',
  };
};

export const myPageModalOnAction = () => {
  document.body.style.overflow = 'hidden';
  return {
    type: 'MYPAGE_ON',
  };
};

export const myPageModalOffAction = () => {
  document.body.style.overflow = 'unset';
  return {
    type: 'MYPAGE_OFF',
  };
};

export const deadLineSettingOnAction = () => {
  document.body.style.overflow = 'hidden';
  return {
    type: 'DEADLINESETTING_ON',
  };
};

export const deadLineSettingOffAction = () => {
  document.body.style.overflow = 'unset';
  return {
    type: 'DEADLINESETTING_OFF',
  };
};

export default connect(miniMemoModalOnAction);
