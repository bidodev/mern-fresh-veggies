const INITIAL_STATE = {
  avatar: {
    path: 'bido.jpeg',
    name: 'francisco',
  },
};

const ModalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_AVATAR':
      return {
        ...state,
        ...state.avatar,
        path: action.payload,
      };
    default:
      return state;
  }
};

export default ModalReducer;
