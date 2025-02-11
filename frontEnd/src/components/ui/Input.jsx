// Admin src/components/ui/Input.jsx
import PropTypes from 'prop-types';

export function Input({ type = "text", value, onChange, name, required = false, disabled = false }) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary"
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};
