const INITIAL_STATE = {
    show: false
  };
  
type Action = { type: string; payload?: any };

const ModalReducer = (state = INITIAL_STATE, action: Action) => {
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
