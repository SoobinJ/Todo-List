const initialState = {
  MiniMemoModal: false,
  MyPageModal: false,
  DeadLineSettingModal: false,
  DetailTodoModal: false,
  CompleteModal: false,
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
    case 'DETAILTODO_ON': {
      return { ...state, DetailTodoModal: true };
    }
    case 'DETAILTODO_OFF': {
      return { ...state, DetailTodoModal: false };
    }
    case 'COMPLETE_ON': {
      return { ...state, CompleteModal: true };
    }
    case 'COMPLETE_OFF': {
      return { ...state, CompleteModal: false };
    }
    default:
      return state;
  }
};

export default ModalReducer;
