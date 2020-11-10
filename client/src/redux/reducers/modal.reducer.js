const INITIAL_STATE = {
    show: false
  };
  
const ModalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'TOGGLE_MODAL':
        return {
          ...state,
          show: !state.show
        };
      default:
        return state;
    }
  };
  
  export default ModalReducer;