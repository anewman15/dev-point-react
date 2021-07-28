import { PropType } from 'prop-types';
import React from 'react';

const FormikControl = props => {
  const { control } = props;
  switch (control) {
    case 'image': return <ImageInput />;
    default: return null;
  }
};

FormikControl.propTypes = {
  control: PropType.string,
}.isRequired;

export default FormikControl;
