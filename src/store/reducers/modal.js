const initialState = {
  MiniMemoModal: false,
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
    default:
      return state;
  }
};

export default ModalReducer;
