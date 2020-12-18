import { REQUEST_FARMER_PENDING, REQUEST_FARMER_SUCCESS, REQUEST_FARMER_FAILED } from 'redux/constants';

const INITIAL_STATE = {
  isPending: true,
  error: null,
  data: {},
};

const requestFarmer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REQUEST_FARMER_PENDING:
      return {
        ...state,
        isPending: true,
      };
    case REQUEST_FARMER_SUCCESS:
      return {
        ...state,
        isPending: false,
        data: action.payload,
      };
    case REQUEST_FARMER_FAILED:
      return {
        ...state,
        isPending: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
export default requestFarmer;
