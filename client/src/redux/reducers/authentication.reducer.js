// this is to switch between login modal and register modal for client
const INITIAL_STATE = {
  show: false,
  switch: false,
};

const switchReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SHOW_AUTH':
      return {
        ...state,
        show: !state.show,
      };
      case 'SWITCH_AUTH':
        return {
          ...state,
          switch: !state.switch,
        };
    default:
      return state;
  }
};
export default switchReducer;
