import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--button': true,
  [className]: !!className,
});

const Button = ({ children, className, ...props }) => (
  <span className={getClassNames(className)} {...props}>{children}</span>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  className: undefined,
};

export default Button;
