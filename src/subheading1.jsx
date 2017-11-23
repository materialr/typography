import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = (adjustMargin, className) => classnames({
  'mdc-typography': true,
  'mdc-typography--adjust-margin': adjustMargin,
  'mdc-typography--subheading1': true,
  [className]: !!className,
});

const Subheading1 = ({ adjustMargin, children, className }) => (
  <h4 className={getClassNames(adjustMargin, className)}>{children}</h4>
);

Subheading1.propTypes = {
  adjustMargin: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Subheading1.defaultProps = {
  adjustMargin: false,
  className: undefined,
};

export default Subheading1;
