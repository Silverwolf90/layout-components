import React from 'react';
import { Row, Column, Fixed, Flex } from './layout';

export default ({ Header, Body, Sidebar, Footer }) =>  (
  <Column>
    <Fixed height="4em">
      <Header />
    </Fixed>
    <Flex>
      <Row>
        <Fixed width="8em">
          <Sidebar />
        </Fixed>
        <Flex style={{ overflow: 'scroll' }}>
          <Body />
        </Flex>
        <Fixed width="8em">
          <Sidebar />
        </Fixed>
      </Row>
    </Flex>
    <Fixed height="4em">
      <Footer />
    </Fixed>
  </Column>
);
