import React from 'react';
import { Row, Column, Fixed, Flex } from './layout';

export default ({ Header, Body, Footer }) => (
  <Column>
    <Fixed height="4em">
      <Header />
    </Fixed>
    <Flex>
      <Body />
    </Flex>
    <Fixed height="4em">
      <Footer />
    </Fixed>
  </Column>
);
