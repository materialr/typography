import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--subtitle2': true,
  [className]: !!className,
});

const Subtitle2 = ({ children, className, ...props }) => (
  <h6 className={getClassNames(className)} {...props}>{children}</h6>
);

Subtitle2.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Subtitle2.defaultProps = {
  className: undefined,
};

export default Subtitle2;
