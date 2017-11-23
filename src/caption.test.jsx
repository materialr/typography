import { shallow } from 'enzyme';
import React from 'react';

import Caption from './caption';

test('Caption > Loads the default classNames', () => {
  const wrapper = shallow(<Caption>Caption</Caption>, { disableLifecycleMethods: true });
  const expected = 'mdc-typography mdc-typography--caption';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Caption > Loads all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Caption adjustMargin className={CLASS_NAME}>Caption</Caption>,
    { disableLifecycleMethods: true },
  );
  // eslint-disable-next-line prefer-template
  const expected = 'mdc-typography mdc-typography--adjust-margin mdc-typography--caption ' +
    CLASS_NAME;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});
