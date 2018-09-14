import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--headline5': true,
  [className]: !!className,
});

const Headline5 = ({ children, className, ...props }) => (
  <h5 className={getClassNames(className)} {...props}>{children}</h5>
);

Headline5.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Headline5.defaultProps = {
  className: undefined,
};

export default Headline5;
