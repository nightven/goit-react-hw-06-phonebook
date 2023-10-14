import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import {  persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'




const contactSlice = createSlice({
  name: 'contact',
  initialState: { contacts: [], name: '', number: '' },
  reducers: {
    addName(state, action) {
      state.name = action.payload;
    },

    addNumber(state, action) {
      state.number = action.payload;
    },
    addContact: {
      reducer(state, action) {
        state.contacts.push(action.payload);
      },
      prepare({ name, number }) {
        return {
          payload: {
            name,
            number,
            id: nanoid(),
          },
        };
      },
    },

    deleteContact(state, action) {
      const index = state.contacts.findIndex(
        contact => contact.id === action.payload
      );
      state.contacts.splice(index, 1);
    },
  },
});

//local storage
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['contacts']
}
export const contactReducer = persistReducer(persistConfig, contactSlice.reducer)

//export actions
export const { addContact, addName, addNumber, deleteContact, setFilter } =
  contactSlice.actions;