import { combineReducers } from 'redux';
import types from './phoneBook-types';

const items = (state = [], actions) => {
  switch (actions.type) {
    case types.ADD:
      return [...state, actions.payload];

    case types.DELETE:
      return state.filter(contact => contact.id !== actions.payload);

    default:
      return state;
  }
};

const filter = (state = '', actions) => {
  switch (actions.type) {
    case types.CHANGE_FILTER:
      return actions.payload;

    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});
