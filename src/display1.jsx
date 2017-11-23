import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = (adjustMargin, className) => classnames({
  'mdc-typography': true,
  'mdc-typography--adjust-margin': adjustMargin,
  'mdc-typography--display1': true,
  [className]: !!className,
});

const Display1 = ({ adjustMargin, children, className }) => (
  <h1 className={getClassNames(adjustMargin, className)}>{children}</h1>
);

Display1.propTypes = {
  adjustMargin: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Display1.defaultProps = {
  adjustMargin: false,
  className: undefined,
};

export default Display1;
