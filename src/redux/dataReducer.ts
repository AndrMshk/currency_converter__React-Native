import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../api/mainApi';
import { ItemType } from '../types/types';

export const getItems = createAsyncThunk('data/getItems', async(params) => {
  try {
    const res1 = await api.getItems1();
    const res2 = await api.getItems2();
    const res = res1.data.concat(res2.data);
    return res.filter((el, i) => res[i + 1] && res[i].ccy !== res[i + 1].ccy);
  } catch (e) {
    console.log(e);
  }
});

const rootSlice = createSlice({
  name: 'data',
  initialState: { items: [] as ItemType[] },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getItems.fulfilled, (state, action) => {
      state.items = action.payload || [];
    });
  },
});

export const dataReducer = rootSlice.reducer;

