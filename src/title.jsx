import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = className => classnames({
  'mdc-typography': true,
  'mdc-typography--title': true,
  [className]: !!className,
});

const Title = ({ children, className }) => (
  <h2 className={getClassNames(className)}>{children}</h2>
);

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  className: undefined,
};

export default Title;
