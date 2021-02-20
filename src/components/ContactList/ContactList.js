import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Title from '../Title/Title';
import './ContactList.css';

import ContactListItem from '../ContactListItem/ContactListItem';

const ContactList = ({ contacts, onRemoveContact }) => (
  <>
    <CSSTransition
      in={contacts.length > 0}
      timeout={500}
      classNames="ContactList-title-slideIn"
      unmountOnExit
    >
      <Title label="Contacts" />
    </CSSTransition>

    <TransitionGroup component="ul" className="ContactList">
      {contacts.map(({ id, name, number }) => (
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

export default ContactList;

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
