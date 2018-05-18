import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--subtitle1': true,
  [className]: !!className,
});

const Subtitle1 = ({ children, className, ...props }) => (
  <h6 className={getClassNames(className)} {...props}>{children}</h6>
);

Subtitle1.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Subtitle1.defaultProps = {
  className: undefined,
};

export default Subtitle1;
