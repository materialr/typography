import { shallow } from 'enzyme';
import React from 'react';

import Button from './button';

test('Button > Loads the default classNames', () => {
  const wrapper = shallow(<Button>Button</Button>, { disableLifecycleMethods: true });
  const expected = 'mdc-typography mdc-typography--button';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Button > Loads all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Button adjustMargin className={CLASS_NAME}>Button</Button>,
    { disableLifecycleMethods: true },
  );
  // eslint-disable-next-line prefer-template
  const expected = 'mdc-typography mdc-typography--adjust-margin mdc-typography--button ' +
    CLASS_NAME;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});
