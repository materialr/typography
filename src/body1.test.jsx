import { shallow } from 'enzyme';
import React from 'react';

import Body1 from './body1';

test('Body1 > Loads the default classNames', () => {
  const wrapper = shallow(<Body1>Body1</Body1>, { disableLifecycleMethods: true });
  const expected = 'mdc-typography mdc-typography--body1';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Body1 > Loads all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Body1 className={CLASS_NAME}>Body1</Body1>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-typography mdc-typography--body1 ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});
