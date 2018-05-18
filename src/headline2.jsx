import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--headline2': true,
  [className]: !!className,
});

const Headline2 = ({ children, className, ...props }) => (
  <h2 className={getClassNames(className)} {...props}>{children}</h2>
);

Headline2.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Headline2.defaultProps = {
  className: undefined,
};

export default Headline2;
