import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import promotionsSlice from './promotionsSlice';

const reducer = combineReducers({
  promotions: promotionsSlice,
});
const store = configureStore({
  reducer,
});
export default store;
