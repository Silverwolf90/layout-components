import React from 'react';
import Surface from './Surface';
import randomColor from 'random-color';

const Block = () => (
  <div style={{
    height: 200,
    width: 200,
    margin: 10,
    backgroundColor: randomColor().hexString(),
  }} />
);

export default () => (
  <Surface>
    Flex Body
    <Block />
    <Block />
    <Block />
    <Block />
    <Block />
  </Surface>
);
