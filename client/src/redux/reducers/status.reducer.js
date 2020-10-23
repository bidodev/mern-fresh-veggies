const INITIAL_STATE = {
    modal: false,
    darkMode: false,
  };
  
  const statusReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'TOOGLE_MODAL':
        return {
          ...state,
          modal: !state.modal,
        };
      default:
        return state;
    }
  };
  export default statusReducer;
  