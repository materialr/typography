import { shallow } from 'enzyme';
import React from 'react';

import Display3 from './display3';

test('Display3 > Loads the default classNames', () => {
  const wrapper = shallow(<Display3>Display3</Display3>, { disableLifecycleMethods: true });
  const expected = 'mdc-typography mdc-typography--display3';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Display3 > Loads all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Display3 adjustMargin className={CLASS_NAME}>Display3</Display3>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-typography mdc-typography--display3 ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});
