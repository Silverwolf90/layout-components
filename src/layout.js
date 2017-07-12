import { withProps } from 'recompose';
import styled from 'styled-components';
import * as pane from 'react-layout-pane';

export const Row = withProps({ type: 'row' })(pane.Layout);
export const Column = withProps({ type: 'column' })(pane.Layout);

export const Fixed = styled(pane.Fixed)`
  ${props => props.height ? `height: ${props.height};` : ''}
  ${props => props.width ? `width: ${props.width};` : ''}
`;

export const Flex = pane.Flex;
