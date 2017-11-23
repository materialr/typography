import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = (adjustMargin, className) => classnames({
  'mdc-typography': true,
  'mdc-typography--adjust-margin': adjustMargin,
  'mdc-typography--caption': true,
  [className]: !!className,
});

const Caption = ({ adjustMargin, children, className }) => (
  <span className={getClassNames(adjustMargin, className)}>{children}</span>
);

Caption.propTypes = {
  adjustMargin: PropTypes.bool,
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Caption.defaultProps = {
  adjustMargin: false,
  className: undefined,
};

export default Caption;
