import { shallow } from 'enzyme';
import React from 'react';

import Display4 from './display4';

test('Display4 > Loads the default classNames', () => {
  const wrapper = shallow(<Display4>Display4</Display4>, { disableLifecycleMethods: true });
  const expected = 'mdc-typography mdc-typography--display4';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Display4 > Loads all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Display4 adjustMargin className={CLASS_NAME}>Display4</Display4>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-typography mdc-typography--display4 ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});
