import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Fixed, Flex } from 'react-layout-pane';
import ScrollableBody from './ScrollableBody';
import ScrollableBodyInverted from './ScrollableBodyInverted';
import ScrollableBodyMax1024 from './ScrollableBodyMax1024';
import FixedHeader from './FixedHeader';
import StandardPage from './StandardPage';
import Body from './Body';
import Surface from './Surface';

const Sidebar = () => (
  <Surface>
    Sidebar Content
  </Surface>
);

const Header = () => (
  <Surface>
    Fixed Header
  </Surface>
);

ReactDOM.render(
  <ScrollableBody
    Header={Header}
    Footer={Header}
    Body={Body}
    Sidebar={Sidebar}
  />,
  document.getElementById('root')
);
