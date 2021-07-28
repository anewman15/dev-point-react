import React from 'react';
import { PropTypes } from 'prop-types';

const ErrorText = props => {
  const { children } = props;
  return (
    <div className="has-text-warning">
      {children}
    </div>
  );
};

ErrorText.propTypes = {
  children: PropTypes.string,
}.isRequired;

export default ErrorText;
