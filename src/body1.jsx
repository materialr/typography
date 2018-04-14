import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--body1': true,
  [className]: !!className,
});

const Body1 = ({ children, className }) => (
  <p className={getClassNames(className)}>{children}</p>
);

Body1.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Body1.defaultProps = {
  className: undefined,
};

export default Body1;
