import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--display2': true,
  [className]: !!className,
});

const Display2 = ({ children, className }) => (
  <h1 className={getClassNames(className)}>{children}</h1>
);

Display2.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Display2.defaultProps = {
  className: undefined,
};

export default Display2;
