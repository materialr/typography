import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = (adjustMargin, className) => classnames({
  'mdc-typography': true,
  'mdc-typography--adjust-margin': adjustMargin,
  'mdc-typography--display2': true,
  [className]: !!className,
});

const Display2 = ({ adjustMargin, children, className }) => (
  <h1 className={getClassNames(adjustMargin, className)}>{children}</h1>
);

Display2.propTypes = {
  adjustMargin: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Display2.defaultProps = {
  adjustMargin: false,
  className: undefined,
};

export default Display2;
