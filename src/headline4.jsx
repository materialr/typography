import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--headline4': true,
  [className]: !!className,
});

const Headline4 = ({ children, className, ...props }) => (
  <h4 className={getClassNames(className)} {...props}>{children}</h4>
);

Headline4.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Headline4.defaultProps = {
  className: undefined,
};

export default Headline4;
