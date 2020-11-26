const INITIAL_STATE = {
  color: 'green',
};

const ModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_AVATAR':
      return {
        ...state,
        ...state.avatar,
        path: action.payload,
      };
      case 'SET_COLOR':
        return {
          ...state,
          color: action.payload
        };
    default:
      return state;
  }
};

export default ModalReducer;
