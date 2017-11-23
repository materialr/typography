import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = (adjustMargin, className) => classnames({
  'mdc-typography': true,
  'mdc-typography--adjust-margin': adjustMargin,
  'mdc-typography--body2': true,
  [className]: !!className,
});

const Body2 = ({ adjustMargin, children, className }) => (
  <aside className={getClassNames(adjustMargin, className)}>{children}</aside>
);

Body2.propTypes = {
  adjustMargin: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Body2.defaultProps = {
  adjustMargin: false,
  className: undefined,
};

export default Body2;
