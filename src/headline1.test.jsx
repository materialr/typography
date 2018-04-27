import { shallow } from 'enzyme';
import React from 'react';

import Headline1 from './headline1';

const CHILDREN = 'CHILDREN';

test('Renders the default classNames', () => {
  const wrapper = shallow(<Headline1>{CHILDREN}</Headline1>, { disableLifecycleMethods: true });
  const expected = 'mdc-typography mdc-typography--headline1';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Headline1 className={CLASS_NAME}>{CHILDREN}</Headline1>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-typography mdc-typography--headline1 ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders the children elements', () => {
  const wrapper = shallow(<Headline1>{CHILDREN}</Headline1>, { disableLifecycleMethods: true });
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});
