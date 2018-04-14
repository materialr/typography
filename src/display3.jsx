import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--display3': true,
  [className]: !!className,
});

const Display3 = ({ children, className }) => (
  <h1 className={getClassNames(className)}>{children}</h1>
);

Display3.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Display3.defaultProps = {
  className: undefined,
};

export default Display3;
