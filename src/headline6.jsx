import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--headline6': true,
  [className]: !!className,
});

const Headline6 = ({ children, className, ...props }) => (
  <h6 className={getClassNames(className)} {...props}>{children}</h6>
);

Headline6.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Headline6.defaultProps = {
  className: undefined,
};

export default Headline6;
