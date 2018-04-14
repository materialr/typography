import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--body2': true,
  [className]: !!className,
});

const Body2 = ({ children, className }) => (
  <aside className={getClassNames(className)}>{children}</aside>
);

Body2.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Body2.defaultProps = {
  className: undefined,
};

export default Body2;
