import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--headline3': true,
  [className]: !!className,
});

const Headline3 = ({ children, className, ...props }) => (
  <h3 className={getClassNames(className)} {...props}>{children}</h3>
);

Headline3.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Headline3.defaultProps = {
  className: undefined,
};

export default Headline3;
