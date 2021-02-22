import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phonebook-actions';
import Filter from '../Filter/Filter';
import Title from '../Title/Title';
import './ContactList.css';

import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({
  filteredContacts,
  contacts,
  searchName,
  onRemoveContact,
}) => (
  <>
    <CSSTransition
      in={contacts.length > 1}
      timeout={500}
      classNames="filter-slideIn"
      unmountOnExit
    >
      <Filter />
    </CSSTransition>

    <CSSTransition
      in={filteredContacts.length > 0}
      timeout={500}
      classNames="ContactList-title-slideIn"
      unmountOnExit
    >
      <Title label="Contacts" />
    </CSSTransition>

    <CSSTransition
      in={filteredContacts.length === 0 && contacts.length > 1}
      timeout={500}
      classNames="ContactList-title-slideIn"
      unmountOnExit
    >
      <Title label={`Contact name: "${searchName}"  not found`} />
    </CSSTransition>

    <TransitionGroup component="ul" className="ContactList">
      {filteredContacts.map(({ id, name, number }) => (
        <CSSTransition
          key={id}
          timeout={250}
          classNames="ContactList-item-fade"
        >
          <ContactListItem
            id={id}
            name={name}
            number={number}
            onRemove={() => onRemoveContact(id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      number: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
  onRemoveContact: PropTypes.func,
};

const mapStateToProps = state => {
  const { items, filter } = state.phoneBook;
  const filteredContacts = items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return {
    searchName: filter,
    contacts: state.phoneBook.items,
    filteredContacts: filteredContacts,
  };
};

const mapDispatchToProps = dispatch => ({
  onRemoveContact: contactId =>
    dispatch(phoneBookActions.deleteContact(contactId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
