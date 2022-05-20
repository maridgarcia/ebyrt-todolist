import React from 'react';
import PropTypes from 'prop-types';

function Button({
  disabled, onClick, label, testid,
}) {
  return (
    <div>
      <button
        type="submit"
        onClick={onClick}
        disabled={disabled}
        data-testid={testid}
      >
        { label }
      </button>
    </div>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  testid: PropTypes.string,
};

Button.defaultProps = {
  disabled: undefined,
  onClick: undefined,
  testid: undefined,
};

export default Button;
