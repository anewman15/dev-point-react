import { PropTypes } from 'prop-types';

const FormErrorsSection = ({ formErrors }) => (
  <div className="notification is-warning is-light">
    {Object.keys(formErrors).map(fieldName => (
      <p className="p-1 has-background-white has-text-danger" key={fieldName}>
        <span className="capitalize">{`${fieldName}: `}</span>
        <span>
          {`${formErrors[fieldName]}`}
        </span>
      </p>
    ))}
  </div>
);

FormErrorsSection.propTypes = {
  formErrors: PropTypes.object,
}.isRequired;

export default FormErrorsSection;
