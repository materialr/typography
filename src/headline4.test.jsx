import { shallow } from 'enzyme';
import React from 'react';

import Headline4 from './headline4';

const CHILDREN = 'CHILDREN';

test('Renders the default classNames', () => {
  const wrapper = shallow(<Headline4>{CHILDREN}</Headline4>, { disableLifecycleMethods: true });
  const expected = 'mdc-typography mdc-typography--headline4';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Headline4 className={CLASS_NAME}>{CHILDREN}</Headline4>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-typography mdc-typography--headline4 ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders the children elements', () => {
  const wrapper = shallow(<Headline4>{CHILDREN}</Headline4>, { disableLifecycleMethods: true });
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});
