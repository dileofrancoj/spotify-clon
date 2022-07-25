import { configureStore } from '@reduxjs/toolkit';
import counterSlice from '../reducers/counterSlice';
import counterReducer from '../reducers/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    authentication: authSlice,
  },
});
