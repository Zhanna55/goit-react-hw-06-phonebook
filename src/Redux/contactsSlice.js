import { createSlice } from '@reduxjs/toolkit';

const contactsInitialState = [];

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: contactsInitialState,
  // Об'єкт редюсерів
  reducers: {
    addContact(state, action) {
      if (
        state.find(
          contact =>
            contact.name.toLowerCase() === action.payload.name.toLowerCase()
        )
      ) {
        alert(`${action.payload.name} is already in contacts`);
        return;
      }
      state.push(action.payload);
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
