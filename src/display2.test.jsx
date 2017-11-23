import { shallow } from 'enzyme';
import React from 'react';

import Display2 from './display2';

test('Display2 > Loads the default classNames', () => {
  const wrapper = shallow(<Display2>Display2</Display2>, { disableLifecycleMethods: true });
  const expected = 'mdc-typography mdc-typography--display2';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Display2 > Loads all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Display2 adjustMargin className={CLASS_NAME}>Display2</Display2>,
    { disableLifecycleMethods: true },
  );
  // eslint-disable-next-line prefer-template
  const expected = 'mdc-typography mdc-typography--adjust-margin mdc-typography--display2 ' +
    CLASS_NAME;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});
