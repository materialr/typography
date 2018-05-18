import { shallow } from 'enzyme';
import React from 'react';

import Caption from './caption';

const CHILDREN = 'CHILDREN';

test('Renders the default classNames', () => {
  const wrapper = shallow(<Caption>{CHILDREN}</Caption>, { disableLifecycleMethods: true });
  const expected = 'mdc-typography mdc-typography--caption';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Caption className={CLASS_NAME}>{CHILDREN}</Caption>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-typography mdc-typography--caption ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders the children elements', () => {
  const wrapper = shallow(<Caption>{CHILDREN}</Caption>, { disableLifecycleMethods: true });
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});

test('Adds extra properties that are passed in', () => {
  const DATA_QA = 'DATA_QA';
  const wrapper = shallow(
    <Caption data-qa={DATA_QA}>{CHILDREN}</Caption>,
    { disableLifecycleMethods: true },
  );
  const expected = DATA_QA;

  const actual = wrapper.props()['data-qa'];

  expect(actual).toBe(expected);
});
