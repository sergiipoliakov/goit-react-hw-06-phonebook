import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DublicateAlert from '../DublicateAlert/DublicateAlert';
import Button from '../Button/Button';
import { CSSTransition } from 'react-transition-group';

import './ContactForm.css';

export default class ContactForm extends Component {
  static defaultProps = {};

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      }),
    ),
  };

  state = {
    name: '',
    number: '',
    dublicateName: false,
  };

  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const duplicate = this.props.contacts.filter(
      contact => contact.name === e.target.elements[0].value,
    );
    if (duplicate.length) {
      this.setState({ dublicateName: !this.state.dublicateName });

      return setTimeout(() => {
        this.setState({
          dublicateName: false,
        });
      }, 2500);

      // return alert(`${duplicate[0].name} is already in contacts`);
    }

    this.props.onAddContact(this.state);

    this.setState({ name: '', number: '', dublicateName: false });
  };

  render() {
    const { name, number, dublicateName } = this.state;

    return (
      <>
        <CSSTransition
          in={dublicateName && Boolean(name)}
          classNames="dublucate-name-slideIn"
          timeout={250}
          unmountOnExit
        >
          <DublicateAlert name={name} />
        </CSSTransition>

        <form onSubmit={this.handleSubmit} className="form">
          <label className="form-label">
            Name
            <input
              className="form-input"
              type="name"
              value={name}
              onChange={this.handleChange}
              name="name"
            />
          </label>

          <label className="form-label">
            Number
            <input
              className="form-input"
              type="tel"
              value={number}
              onChange={this.handleChange}
              name="number"
            />
          </label>

          <Button label="Add contact" type="submit" />
        </form>
      </>
    );
  }
}
