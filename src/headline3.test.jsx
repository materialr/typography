import { shallow } from 'enzyme';
import React from 'react';

import Headline3 from './headline3';

const CHILDREN = 'CHILDREN';

test('Renders the default classNames', () => {
  const wrapper = shallow(<Headline3>{CHILDREN}</Headline3>, { disableLifecycleMethods: true });
  const expected = 'mdc-typography mdc-typography--headline3';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Headline3 className={CLASS_NAME}>{CHILDREN}</Headline3>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-typography mdc-typography--headline3 ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders the children elements', () => {
  const wrapper = shallow(<Headline3>{CHILDREN}</Headline3>, { disableLifecycleMethods: true });
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});