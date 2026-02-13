const INITIAL_STATE = {
  color: 'green',
  avatar: {},
};

type Action = { type: string; payload?: any };

const statusReducer = (state = INITIAL_STATE, action: Action) => {
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
        color: action.payload,
      };
    default:
      return state;
  }
};

export default statusReducer;
