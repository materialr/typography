import { shallow } from 'enzyme';
import React from 'react';

import Overline from './overline';

const CHILDREN = 'CHILDREN';

test('Renders the default classNames', () => {
  const wrapper = shallow(<Overline>{CHILDREN}</Overline>, { disableLifecycleMethods: true });
  const expected = 'mdc-typography mdc-typography--overline';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Overline className={CLASS_NAME}>{CHILDREN}</Overline>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-typography mdc-typography--overline ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders the children elements', () => {
  const wrapper = shallow(<Overline>{CHILDREN}</Overline>, { disableLifecycleMethods: true });
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});

test('Adds extra properties that are passed in', () => {
  const DATA_QA = 'DATA_QA';
  const wrapper = shallow(
    <Overline data-qa={DATA_QA}>{CHILDREN}</Overline>,
    { disableLifecycleMethods: true },
  );
  const expected = DATA_QA;

  const actual = wrapper.props()['data-qa'];

  expect(actual).toBe(expected);
});
