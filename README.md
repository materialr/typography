# MaterialR Typography

**@materialr/typography**

[![Build Status](https://travis-ci.org/materialr/typography.svg?branch=master)](https://travis-ci.org/materialr/typography)
[![Coverage Status](https://coveralls.io/repos/github/materialr/typography/badge.svg?branch=master)](https://coveralls.io/github/materialr/typography?branch=master)
[![NSP Status](https://nodesecurity.io/orgs/materialr/projects/d1ded95a-c466-4def-bcb2-e29326162d43/badge)](https://nodesecurity.io/orgs/materialr/projects/d1ded95a-c466-4def-bcb2-e29326162d43)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Material typography implementation for React

## Installation

```sh
$ npm install --save @materialr/typography
```

## Demo

A full demo is available on the
[MaterialR website](https://materialr.github.io/components/typography) showcasing all variants.

## Components

### Named exports

```js
import {
  Body1,
  Body2,
  Button,
  Caption,
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
  Overline,
  Subtitle1,
  Subtitle2,
} from '@material/typography';
```

**Props**

_All named components have the same props:_

| Prop        | Type        | Required | Default   | Description                   |
| ----------- | ----------- | -------- | --------- | ----------------------------- |
| `children`  | node/string | Yes      | undefined | The children to render within |
| `className` | string      | No       | undefined | Additional classNames to add  |
