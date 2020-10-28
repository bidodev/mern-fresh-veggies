// this is to switch between login modal and register modal for client

const INITIAL_STATE = {
  show: false,
};

const switchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SWITCH_SIGN-IN_LOG-IN':
      return {
        ...state,
        show: !state.show,
      };
    default:
      return state;
  }
};
export default switchReducer;
