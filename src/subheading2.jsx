import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--subheading2': true,
  [className]: !!className,
});

const Subheading2 = ({ children, className }) => (
  <h4 className={getClassNames(className)}>{children}</h4>
);

Subheading2.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Subheading2.defaultProps = {
  className: undefined,
};

export default Subheading2;
