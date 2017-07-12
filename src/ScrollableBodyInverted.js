import React from 'react';
import { Row, Column, Fixed, Flex } from './layout';

export default ({ Header, Body, Sidebar, Footer }) =>  (
  <Row>
    <Fixed width="8em">
      <Sidebar />
    </Fixed>
    <Flex>
      <Column>
        <Fixed height="4em">
          <Header />
        </Fixed>
        <Flex style={{ overflow: 'scroll' }}>
          <Body />
        </Flex>
        <Fixed height="4em">
          <Footer />
        </Fixed>
      </Column>
    </Flex>
    <Fixed width="8em">
      <Sidebar />
    </Fixed>
  </Row>
);
