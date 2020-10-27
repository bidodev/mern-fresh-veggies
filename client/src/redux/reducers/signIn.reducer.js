const INITIAL_STATE = {
  modal: false,
  darkMode: false,
};

const signInReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_SIGN-IN_MODAL':
      return {
        ...state,
        modal: !state.modal,
      };
    default:
      return state;
  }
};
export default signInReducer;
