import {createSlice} from '@reduxjs/toolkit';

export interface FarmerState {

}

const initialState: FarmerState = {

}

const farmerSlice = createSlice({
    name: 'farmer',
    initialState,
    reducers: {},
    extraReducers: {},
});


export default farmerSlice.reducer;