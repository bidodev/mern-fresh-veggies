const INITIAL_STATE = {
  user: null,
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
    default:
      return state;
  }
};
export default loginReducer;
