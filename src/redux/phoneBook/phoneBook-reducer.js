import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-actions';
// import types from './phoneBook-types';

const items = createReducer([], {
  [actions.addContact]: (state, action) => [...state, action.payload],
  [actions.deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload),
});

// const items = (state = [], actions) => {
//   switch (actions.type) {
//     case types.ADD:
//       return [...state, actions.payload];

//     case types.DELETE:
//       return state.filter(contact => contact.id !== actions.payload);

//     default:
//       return state;
//   }
// };

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
});
// const filter = (state = '', actions) => {
//   switch (actions.type) {
//     case 'phoneBook/changeFilter':
//       return actions.payload;

//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  filter,
});
