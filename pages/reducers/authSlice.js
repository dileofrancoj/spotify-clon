import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    logged: false,
  },
};

export const authSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    loggedIn: (state) => {
      state.user.logged = true;
    },
    loggedOut: (state) => {
      state.user.logged = false;
    },
  },
});

export const { loggedIn, loggedOut } = authSlice.actions;

export default authSlice.reducer;
