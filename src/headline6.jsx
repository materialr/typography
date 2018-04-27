import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--headline6': true,
  [className]: !!className,
});

const Headline6 = ({ children, className }) => (
  <h6 className={getClassNames(className)}>{children}</h6>
);

Headline6.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Headline6.defaultProps = {
  className: undefined,
};

export default Headline6;
