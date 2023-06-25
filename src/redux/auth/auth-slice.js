import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web

import {
  registerUser,
  logInUser,
  logOutUser,
  getCurrentUser,
} from './auth-operations';

import persistReducer from 'redux-persist/es/persistReducer';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const customArrThunks = [registerUser, logInUser];

const status = {
  pending: 'pending',
  fulfilled: 'fulfilled',
  rejected: 'rejected',
};

const fn = status => customArrThunks.map(el => el[status]);

const handlePending = state => {
  return state;
};

const handlePendingCurrentUser = state => {
  state.isRefreshing = true;
};

const handleRejected = state => {
  return state;
};

const handleRejectedCurrentUser = state => {
  state.isRefreshing = false;
};

const handleFulfilled = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handleFulfilledLogOut = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

const handleFulfilledCurrentUser = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    const { pending, fulfilled, rejected } = status;
    builder

      .addCase(logOutUser.pending, handlePending)
      .addCase(logOutUser.fulfilled, handleFulfilledLogOut)
      .addCase(logOutUser.rejected, handleRejected)
      .addCase(getCurrentUser.pending, handlePendingCurrentUser)
      .addCase(getCurrentUser.fulfilled, handleFulfilledCurrentUser)
      .addCase(getCurrentUser.rejected, handleRejectedCurrentUser)
      .addMatcher(isAnyOf(...fn(pending)), handlePending)
      .addMatcher(isAnyOf(...fn(fulfilled)), handleFulfilled)
      .addMatcher(isAnyOf(...fn(rejected)), handleRejected);
  },
});

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

export const authReducer = authSlice.reducer;
export default persistedAuthReducer;

// This code imports libraries and functions for managing user authentication
// within a Redux store.It creates a slice of the store by using createSlice()
// from the @reduxjs/toolkit library. It sets an initial state for user authentication
// that includes an empty user object, no token, and a logged out status.

// The extraReducers parameter in the createSlice() creates reducers based on the
// different actions it receives from the Redux store.The addMatcher is a utility function
// for creating reducers that listen to many actions at once.

// The authPersistConfig object is a configuration object for the persistReducer() function,
//   which is used to persist the authentication slice of the store to browser storage using redux - persist.

//   Finally, the code exports two reducers: authReducer, which is just the reducer
// for the authentication slice, and persistedAuthReducer, which is the same reducer but
// with redux - persist functionality added.
