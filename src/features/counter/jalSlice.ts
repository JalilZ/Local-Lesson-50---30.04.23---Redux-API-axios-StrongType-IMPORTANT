//ex5
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

import { getProducts } from './jalAPI';

// note - notice we used the same names for increment and decrement but this is not good practice
export interface CounterState {
  value: number;
  logged: boolean;
  // res: string,        //API 
  res: any[],        //API any type of array

}

const initialState: CounterState = {
  value: 3,
  logged: false,
  res: [],  //API 
};

export const getProductAsync = createAsyncThunk(
  'jal/getProducts',
  async() => {
    const response = await getProducts();
    return response.data
  }
)

export const jalSlice = createSlice({
  name: 'jal',                            
  initialState,                          
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    login: (state) =>{
      state.logged = true;
    },
    logout: (state) =>{
      state.logged = false;
    },
  },
    
  //API
  extraReducers: (builder) => {
    builder
      .addCase(getProductAsync.fulfilled, (state, actions) => {
        state.res = actions.payload
        console.log(actions.payload); 
      })
      
  },
});
export const selectRes = (state: RootState) => state.jal.res   //API 
export const { increment, decrement, login, logout } = jalSlice.actions;
export const selectCount = (state: RootState) => state.jal.value; // jal is the name of the slicer here, now add this slicer to the store ! so now we have jal.value counter from this slice, and counter.value counter from the counterSlice component
export const selectLogged = (state: RootState) => state.jal.logged



export default jalSlice.reducer;
