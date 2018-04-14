import { shallow } from 'enzyme';
import React from 'react';

import Title from './title';

test('Title > Loads the default classNames', () => {
  const wrapper = shallow(<Title>Title</Title>, { disableLifecycleMethods: true });
  const expected = 'mdc-typography mdc-typography--title';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Title > Loads all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Title adjustMargin className={CLASS_NAME}>Title</Title>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-typography mdc-typography--title ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});
