//ex5
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';

import { getProducts } from './productAPI';
import { addProducts } from './productAPI';
import { Product } from '../../Product';
// note - notice we used the same names for increment and decrement but this is not good practice

//instead of below we import (see above)
// class Product{
//   desc: string=""
//   price?: number
// }


export interface ProductState {
  products: Array<Product>;


}

const initialState: ProductState = {
  products: [],

};

export const getProductAsync = createAsyncThunk(
  'product/getProducts',
  async () => {
    const response = await getProducts();
    return response.data
  }
)

export const addProductAsync = createAsyncThunk(
  'product/addProducts',
  async (prod: Product) => {
    const response = await addProducts(prod);
    return response.data
  }
)

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {

  },
    //API
    extraReducers: (builder) => {
      builder
        .addCase(getProductAsync.fulfilled, (state, actions) => {
          state.products = actions.payload
        })
        .addCase(addProductAsync.fulfilled, (state, actions) => {
          // state.products = actions.payload
          state.products.push(actions.payload)
        })

    },
  });

export const selectProducts = (state: RootState) => state.product.products;



export default productSlice.reducer;
