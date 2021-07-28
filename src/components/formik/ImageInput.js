/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { PropTypes } from 'prop-types';
import { Field, ErrorMessage } from 'formik';
import ErrorText from './ErrorText';

const ImageInput = props => {
  const { label, name, ...rest } = props;
  return (
    <div className="file">
      <label className="file-label" htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={ErrorText} />
    </div>
  );
};

ImageInput.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
}.isRequired;

export default ImageInput;
