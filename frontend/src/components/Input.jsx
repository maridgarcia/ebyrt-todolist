import React from 'react';
import PropTypes from 'prop-types';

function Input({
  type, onChange, value, label, testid,
}) {
  return (
    <div>
      <label htmlFor={testid}>
        { label }
      </label>
      <input
        type={type}
        onChange={onChange}
        value={value}
        id={testid}
      />
    </div>
  );
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  testid: PropTypes.string.isRequired,
};

export default Input;
