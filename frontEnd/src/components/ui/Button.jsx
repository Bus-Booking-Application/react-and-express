// Admin src/components/ui/Button.jsx
import PropTypes from 'prop-types';

export function Button({ children, onClick, type = "button", variant = "default" }) {
  const baseStyles = "px-4 py-2 rounded text-white focus:outline-none";
  const variantStyles = variant === "outline" ? "border border-primary text-primary bg-transparent" : "bg-primary hover:bg-primary-dark";

  return (
    <button type={type} onClick={onClick} className={`${baseStyles} ${variantStyles}`}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
  variant: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  variant: "default",
};
