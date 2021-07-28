/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { PropTypes } from 'prop-types';
import ImageInput from './ImageInput';

const FormikControl = props => {
  const { control, ...rest } = props;
  switch (control) {
    case 'image':
      return <ImageInput {...rest} />;
    default: return null;
  }
};

FormikControl.propTypes = {
  control: PropTypes.string,
}.isRequired;

export default FormikControl;
