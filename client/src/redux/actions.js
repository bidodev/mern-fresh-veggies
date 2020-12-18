import { REQUEST_FARMER_PENDING, REQUEST_FARMER_SUCCESS, REQUEST_FARMER_FAILED } from 'redux/constants';
import axios from 'axios';

export const requestFarmer = (dispatch) => {
  dispatch({ type: REQUEST_FARMER_PENDING });

  axios
    .get('/farmers/admin/panel')
    .then(({ data }) => dispatch({ type: REQUEST_FARMER_SUCCESS, payload: data.data }))
    .catch((err) => dispatch({ type: REQUEST_FARMER_FAILED, payload: err }));
};
