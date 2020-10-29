const INITIAL_STATE = {
  };
  
  const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return {
          ...state,
          farmerUser: action.payload,
        };
      case 'LOGOUT_USER':
        return {
          ...state,
          farmerUser: null,
        };
      default:
        return state;
    }
  };
  export default cartReducer;
  