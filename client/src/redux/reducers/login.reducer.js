const INITIAL_STATE = {
  user: null,
  adminPanelData: null,
};

const loginReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_USER':
      return {
        ...state,
        user: null,
      };
    case 'SET_FARMER':
      return {
        ...state,
        adminPanelData: action.payload,
      };
    default:
      return state;
  }
};
export default loginReducer;
