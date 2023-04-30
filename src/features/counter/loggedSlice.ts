//ex5
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

import { getProducts } from './jalAPI';

// note - notice we used the same names for increment and decrement but this is not good practice
export interface LoggedState {


}

const initialState: LoggedState = {

};

export const getProductAsync = createAsyncThunk(
  'logged/getProducts',
  async () => {
    const response = await getProducts();
    return response.data
  }
)

export const loggedSlice = createSlice({
  name: 'logged',
  initialState,
  reducers: {

    login: (state, action) => {
      console.log(action.payload);

    },
  },
    //API
    extraReducers: (builder) => {
      builder
        .addCase(getProductAsync.fulfilled, (state, actions) => {
          
        })

    },
  });
export const { login } = loggedSlice.actions;




export default loggedSlice.reducer;
