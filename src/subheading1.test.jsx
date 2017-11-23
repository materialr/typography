import { shallow } from 'enzyme';
import React from 'react';

import Subheading1 from './subheading1';

test('Subheading1 > Loads the default classNames', () => {
  const wrapper = shallow(
    <Subheading1>Subheading1</Subheading1>,
    { disableLifecycleMethods: true },
  );
  const expected = 'mdc-typography mdc-typography--subheading1';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Subheading1 > Loads all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Subheading1 adjustMargin className={CLASS_NAME}>Subheading1</Subheading1>,
    { disableLifecycleMethods: true },
  );
  // eslint-disable-next-line prefer-template
  const expected = 'mdc-typography mdc-typography--adjust-margin mdc-typography--subheading1 ' +
    CLASS_NAME;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});
