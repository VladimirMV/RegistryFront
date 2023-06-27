import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'services/contactsApi';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getAllContacts();
      return data;
    } catch ({ response }) {
      return thunkAPI.rejectWithValue(`Ooops! Wrong... Try again ...`);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.addContact(data);
      // alert(`Add contact`);
      return result;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again ...`);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      await api.deleteContact(id);
      // alert(`Contact delete`);

      return id;
    } catch ({ response }) {
      return rejectWithValue(`Ooops! Wrong... Try again ...`);
    }
  }
);

export const changeContact = createAsyncThunk(
  'contacts/editContact',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.editContact(data);

      // alert(`Contact update!`);
      // console.log(result);
      return result;
    } catch ({ response }) {
      return rejectWithValue(` Wrong... Try again `);
    }
  }
);
