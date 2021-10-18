import { PropTypes } from 'prop-types';

const FormErrorsSection = ({ formErrors }) => (
  <div className="p-4 mx-auto w-80 rounded border border-red-400 bg-red-100 text-red-600">
    {Object.keys(formErrors).map(fieldName => (
      <p className="p-1" key={fieldName}>
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
