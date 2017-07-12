import { Flex } from 'react-layout-pane';
import randomColor from 'random-color';
import styled from 'styled-components';

const Surface = styled(Flex)`
  box-sizing: border-box;
  min-height: 100%;
  background-color: ${() => randomColor().hexString()};
  padding: 10px;
`;

export default Surface;
