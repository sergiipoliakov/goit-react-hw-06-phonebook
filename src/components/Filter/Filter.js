import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import phoneBookActions from '../../redux/phoneBook/phonebook-actions.js';
import './Filter.css';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div className="form">
      <label className="form-label">
        Find contact by name
        <input
          type="text"
          className="form-input"
          value={value}
          onChange={onChangeFilter}
        />
      </label>
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,

  onChangeFilter: PropTypes.func,
};

const mapStateToProps = state => ({
  value: state.phoneBook.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: event =>
    dispatch(phoneBookActions.changeFilter(event.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
