import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = (adjustMargin, className) => classnames({
  'mdc-typography': true,
  'mdc-typography--adjust-margin': adjustMargin,
  'mdc-typography--button': true,
  [className]: !!className,
});

const Button = ({ adjustMargin, children, className }) => (
  <p className={getClassNames(adjustMargin, className)}>{children}</p>
);

Button.propTypes = {
  adjustMargin: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Button.defaultProps = {
  adjustMargin: false,
  className: undefined,
};

export default Button;
