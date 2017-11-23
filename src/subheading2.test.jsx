import { shallow } from 'enzyme';
import React from 'react';

import Subheading2 from './subheading2';

test('Subheading2 > Loads the default classNames', () => {
  const wrapper = shallow(
    <Subheading2>Subheading2</Subheading2>,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-typography mdc-typography--subheading2';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Subheading2 > Loads all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Subheading2 adjustMargin className={CLASS_NAME}>Subheading2</Subheading2>,
    { disableLifecycleMethods: true },
  );
  // eslint-disable-next-line prefer-template
  const expected = 'mdc-typography mdc-typography--adjust-margin mdc-typography--subheading2 ' +
    CLASS_NAME;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});
