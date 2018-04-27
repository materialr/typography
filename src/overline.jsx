import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--overline': true,
  [className]: !!className,
});

const Overline = ({ children, className }) => (
  <span className={getClassNames(className)}>{children}</span>
);

Overline.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Overline.defaultProps = {
  className: undefined,
};

export default Overline;
