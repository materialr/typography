import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const getClassNames = (adjustMargin, className) => classnames({
  'mdc-typography': true,
  'mdc-typography--adjust-margin': adjustMargin,
  'mdc-typography--title': true,
  [className]: !!className,
});

const Title = ({ adjustMargin, children, className }) => (
  <h2 className={getClassNames(adjustMargin, className)}>{children}</h2>
);

Title.propTypes = {
  adjustMargin: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  className: PropTypes.string,
};

Title.defaultProps = {
  adjustMargin: false,
  className: undefined,
};

export default Title;
