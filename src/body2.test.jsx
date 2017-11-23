import { shallow } from 'enzyme';
import React from 'react';

import Body2 from './body2';

test('Body2 > Loads the default classNames', () => {
  const wrapper = shallow(<Body2>Body2</Body2>, { disableLifecycleMethods: true });
  const expected = 'mdc-typography mdc-typography--body2';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Body2 > Loads all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Body2 adjustMargin className={CLASS_NAME}>Body2</Body2>,
    { disableLifecycleMethods: true },
  );
  // eslint-disable-next-line prefer-template
  const expected = 'mdc-typography mdc-typography--adjust-margin mdc-typography--body2 ' +
    CLASS_NAME;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});
