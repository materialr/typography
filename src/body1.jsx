import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--body1': true,
  [className]: !!className,
});

const Body1 = ({ children, className, ...props }) => (
  <p className={getClassNames(className)} {...props}>{children}</p>
);

Body1.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Body1.defaultProps = {
  className: undefined,
};

export default Body1;
