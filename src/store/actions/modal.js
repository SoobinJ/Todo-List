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

export default connect(miniMemoModalOnAction);
