import {createSlice} from '@reduxjs/toolkit';
import {initialObjectState} from './initialState';
import Service from '../service';

const promotionsSlice = createSlice({
  name: 'promotions',
  initialState: initialObjectState,
  reducers: {
    setItemList: (state, {payload}) => {
      state.item = payload;
      state.loading = false;
      state.hasErrors = false;
      state.hasMessage = null;
    },
  },
});

export const {setItemList} = promotionsSlice.actions;
export default promotionsSlice.reducer;
export const getPromotionsData = () => async dispatch => {
  const service = new Service();
  try {
    const res = await service.promotions.getPromotions({Channel: 'PWA'});
    dispatch(setItemList(res));
  } catch (error) {
    console.error('Error fetching promotions data', error);
  }
};
