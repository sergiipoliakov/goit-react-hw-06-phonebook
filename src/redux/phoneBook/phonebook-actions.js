import { v4 as uuid_v4 } from 'uuid';
import { createAction } from '@reduxjs/toolkit';
import types from './phoneBook-types';

const addContact = createAction('phoneBook/addContact', (name, number) => {
  return {
    payload: {
      id: uuid_v4(),
      name,
      number,
    },
  };
});
// const addContact = (name, number) => ({
//   type: types.ADD,
//   payload: {
//     id: uuid_v4(),
//     name,
//     number,
//     dublicateName: false,
//   },
// });

const deleteContact = createAction('phoneBook/deleteContact');

// const deleteContact = contactId => ({
//   type: types.DELETE,
//   payload: contactId,
// });

const changeFilter = createAction('phoneBook/changeFilter');
// const changeFilter = value => ({
//   type: types.CHANGE_FILTER,
//   payload: value,
// });

export default { addContact, deleteContact, changeFilter };
