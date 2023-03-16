import React from 'react';
import styled from 'styled-components';
import AppContent from '../components/AppContent';

function DefaultLayout() {
  return (
    <Root>
      <AppContent />
    </Root>
  );
}

const Root = styled.div`
  display: flex;
`;
export default DefaultLayout;
