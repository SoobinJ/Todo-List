const initialState = {
  MiniMemoModal: false,
  MyPageModal: false,
  DeadLineSettingModal: false,
};

// eslint-disable-next-line default-param-last
const ModalReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'MINIMEMO_ON': {
      return { ...state, MiniMemoModal: true };
    }
    case 'MINIMEMO_OFF': {
      return { ...state, MiniMemoModal: false };
    }
    case 'MYPAGE_ON': {
      return { ...state, MyPageModal: true };
    }
    case 'MYPAGE_OFF': {
      return { ...state, MyPageModal: false };
    }
    case 'DEADLINESETTING_ON': {
      return { ...state, DeadLineSettingModal: true };
    }
    case 'DEADLINESETTING_OFF': {
      return { ...state, DeadLineSettingModal: false };
    }
    default:
      return state;
  }
};

export default ModalReducer;
