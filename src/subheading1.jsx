import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--subheading1': true,
  [className]: !!className,
});

const Subheading1 = ({ children, className }) => (
  <h4 className={getClassNames(className)}>{children}</h4>
);

Subheading1.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Subheading1.defaultProps = {
  className: undefined,
};

export default Subheading1;
