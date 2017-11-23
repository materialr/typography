import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = (adjustMargin, className) => classnames({
  'mdc-typography': true,
  'mdc-typography--adjust-margin': adjustMargin,
  'mdc-typography--body1': true,
  [className]: !!className,
});

const Body1 = ({ adjustMargin, children, className }) => (
  <p className={getClassNames(adjustMargin, className)}>{children}</p>
);

Body1.propTypes = {
  adjustMargin: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Body1.defaultProps = {
  adjustMargin: false,
  className: undefined,
};

export default Body1;
