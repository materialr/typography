import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--headline1': true,
  [className]: !!className,
});

const Headline1 = ({ children, className, ...props }) => (
  <h1 className={getClassNames(className)} {...props}>{children}</h1>
);

Headline1.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Headline1.defaultProps = {
  className: undefined,
};

export default Headline1;
