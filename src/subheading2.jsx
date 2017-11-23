import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = (adjustMargin, className) => classnames({
  'mdc-typography': true,
  'mdc-typography--adjust-margin': adjustMargin,
  'mdc-typography--subheading2': true,
  [className]: !!className,
});

const Subheading2 = ({ adjustMargin, children, className }) => (
  <h4 className={getClassNames(adjustMargin, className)}>{children}</h4>
);

Subheading2.propTypes = {
  adjustMargin: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Subheading2.defaultProps = {
  adjustMargin: false,
  className: undefined,
};

export default Subheading2;
