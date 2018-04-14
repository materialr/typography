import { shallow } from 'enzyme';
import React from 'react';

import Display1 from './display1';

test('Display1 > Loads the default classNames', () => {
  const wrapper = shallow(<Display1>Display1</Display1>, { disableLifecycleMethods: true });
  const expected = 'mdc-typography mdc-typography--display1';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Display1 > Loads all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Display1 adjustMargin className={CLASS_NAME}>Display1</Display1>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-typography mdc-typography--display1 ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});
