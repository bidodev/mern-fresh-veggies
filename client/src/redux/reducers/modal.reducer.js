const INITIAL_STATE = {
    modal: false
  };
  
const ModalReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'TOGGLE_MODAL':
        return {
          ...state,
          modal: !state.modal
        };
      default:
        return state;
    }
  };
  
  export default ModalReducer;