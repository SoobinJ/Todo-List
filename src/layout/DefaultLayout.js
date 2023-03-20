import React from 'react';
import styled from 'styled-components';
import AppContent from '../components/AppContent';
import ModalControl from './ModalControl';

function DefaultLayout() {
  return (
    <Root>
      <ModalControl />
      <AppContent />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
`;
export default DefaultLayout;
