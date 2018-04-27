import { shallow } from 'enzyme';
import React from 'react';

import Body1 from './body1';

const CHILDREN = 'CHILDREN';

test('Renders the default classNames', () => {
  const wrapper = shallow(<Body1>{CHILDREN}</Body1>, { disableLifecycleMethods: true });
  const expected = 'mdc-typography mdc-typography--body1';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Body1 className={CLASS_NAME}>{CHILDREN}</Body1>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-typography mdc-typography--body1 ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders the children elements', () => {
  const wrapper = shallow(<Body1>{CHILDREN}</Body1>, { disableLifecycleMethods: true });
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});
