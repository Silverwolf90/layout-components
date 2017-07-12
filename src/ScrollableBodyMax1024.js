import React from 'react';
import styled from 'styled-components';
import { Row, Column, Fixed, Flex } from './layout';

const SMALL = '@media screen and (min-width : 400px)';
const MEDIUM = '@media screen and (min-width : 600px)';
const LARGE = '@media screen and (min-width : 768px)';
const HUGE = `@media screen and (min-width : 1024px)`;

const MainContentRow = styled(Row)`
  max-width: 896px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width : 768px) {
    margin-left: 16px;
    margin-right: 16px;
  }

  @media screen and (max-width : 1024px) and (min-width: 768px) {
    margin-left: 32px;
    margin-right: 32px;
  }
`

export default ({ Header, Body, Sidebar, Footer }) =>  (
  <Column>
    <Fixed height="4em">
      <Header />
    </Fixed>
    <Flex>
      <MainContentRow>
        <Flex style={{ overflow: 'scroll' }}>
          <Body />
        </Flex>
        <Fixed width="8em">
          <Sidebar />
        </Fixed>
      </MainContentRow>
    </Flex>
    <Fixed height="4em">
      <Footer />
    </Fixed>
  </Column>
);
