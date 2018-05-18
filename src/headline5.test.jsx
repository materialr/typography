import { shallow } from 'enzyme';
import React from 'react';

import Headline5 from './headline5';

const CHILDREN = 'CHILDREN';

test('Renders the default classNames', () => {
  const wrapper = shallow(<Headline5>{CHILDREN}</Headline5>, { disableLifecycleMethods: true });
  const expected = 'mdc-typography mdc-typography--headline5';

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders all classNames based on props', () => {
  const CLASS_NAME = 'CLASS_NAME';
  const wrapper = shallow(
    <Headline5 className={CLASS_NAME}>{CHILDREN}</Headline5>,
    { disableLifecycleMethods: true },
  );
  const expected = `mdc-typography mdc-typography--headline5 ${CLASS_NAME}`;

  const actual = wrapper.props().className;

  expect(actual).toBe(expected);
});

test('Renders the children elements', () => {
  const wrapper = shallow(<Headline5>{CHILDREN}</Headline5>, { disableLifecycleMethods: true });
  const expected = CHILDREN;

  const actual = wrapper.props().children;

  expect(actual).toBe(expected);
});

test('Adds extra properties that are passed in', () => {
  const DATA_QA = 'DATA_QA';
  const wrapper = shallow(
    <Headline5 data-qa={DATA_QA}>{CHILDREN}</Headline5>,
    { disableLifecycleMethods: true },
  );
  const expected = DATA_QA;

  const actual = wrapper.props()['data-qa'];

  expect(actual).toBe(expected);
});
