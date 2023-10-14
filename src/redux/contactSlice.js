import { nanoid } from 'nanoid';

const { createSlice } = require('@reduxjs/toolkit');

const initialStateContact = { contacts: [], name: '', number: '' };

const contactSlice = createSlice({
  name: 'contact',
  initialState: initialStateContact,
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

export const contactReducer = contactSlice.reducer;
export const { addContact, addName, addNumber, deleteContact, setFilter } =
  contactSlice.actions;
