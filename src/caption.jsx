import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--caption': true,
  [className]: !!className,
});

const Caption = ({ children, className }) => (
  <span className={getClassNames(className)}>{children}</span>
);

Caption.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Caption.defaultProps = {
  className: undefined,
};

export default Caption;
