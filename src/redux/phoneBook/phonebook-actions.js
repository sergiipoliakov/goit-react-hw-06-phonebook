import { v4 as uuid_v4 } from 'uuid';
import types from './phoneBook-types';

const addContact = (name, number) => ({
  type: types.ADD,
  payload: {
    id: uuid_v4(),
    name,
    number,
    dublicateName: false,
  },
});

const deleteContact = contactId => ({
  type: types.DELETE,
  payload: contactId,
});

const changeFilter = value => ({
  type: types.CHANGE_FILTER,
  payload: value,
});

export default { addContact, deleteContact, changeFilter };
