import { shallow } from 'enzyme';
import React from 'react';

import Subtitle2 from './subtitle2';

const CHILDREN = 'CHILDREN';

test('Renders the default classNames', () => {
  const wrapper = shallow(<Subtitle2>{CHILDREN}</Subtitle2>, { disableLifecycleMethods: true });
  const expected = 'mdc-typography mdc-typography--subtitle2';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Subtitle2 className={CLASS_NAME}>{CHILDREN}</Subtitle2>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-typography mdc-typography--subtitle2 ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders the children elements', () => {
  const wrapper = shallow(<Subtitle2>{CHILDREN}</Subtitle2>, { disableLifecycleMethods: true });
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});
