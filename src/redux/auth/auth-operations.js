import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import {
  userLogin,
  userSignUp,
  userLogout,
  userCurrent,
} from 'services/authApi';

export const registerUser = createAsyncThunk(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const result = await userSignUp(data);
      toast.success('Successfully registered!', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      //console.log('register:', result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again ...`);
    }
  }
);

export const logInUser = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result = await userLogin(data);
      toast.success('Successfully logged!', {
        position: 'bottom-right',
        autoClose: 1500,
      });
      return result;
    } catch (error) {
      return rejectWithValue(`Ooops! Wrong... Try again ...`);
    }
  }
);

export const logOutUser = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await userLogout();
      toast.success('Successfully logout!', {
        position: 'bottom-right',
        autoClose: 1500,
      });

      return data;
    } catch (error) {
      return rejectWithValue(`Ooops! Wrong... Try again...`);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { token },
      } = getState();
      const { data } = await userCurrent(token);

      return data;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again...`);
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        auth: { token },
      } = getState();

      if (!token) {
        return false;
      }
    },
  }
);

// This code is a Redux toolkit code for handling authentication(login, sign up, logout, and getting the current user information).
//  The code uses createAsyncThunk from Redux toolkit to create
//   asynchronous thunk actions for each authentication operation.

//   First, the code imports some necessary libraries(Redux toolkit and react - toastify)
// and API functions for authentication from another module.

//   Then, the code creates four async thunks(using createAsyncThunk), each for registering
//  a user(registerUser), logging in a user(logInUser), logging out a user(logOutUser),
//   and getting the current user information(getCurrentUser).

// For each async thunk, there is an async callback function that makes an API call and returns
// the result upon successful completion.In case of an error, it returns the rejection
// value(via the rejectWithValue function).

//   Moreover, this code also provides a condition object to check whether there is a token
//   in the state before calling the API for getting the current user.Finally, each async thunk
//     also shows a toast message indicating what action was performed(e.g., "Successfully registered!").
