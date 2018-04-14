import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--button': true,
  [className]: !!className,
});

const Button = ({ children, className }) => (
  <p className={getClassNames(className)}>{children}</p>
);

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: undefined,
};

export default Button;
