import React, { Suspense } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import routes from '../routes';
import { Layout } from './styled';

const loading = <div>화면을 불러오는 중 입니다.</div>;

function AppContent() {
  return (
    <ContentWrap>
      <Content>
        <Layout>
          <Suspense fallback={loading}>
            <Routes>
              {routes.map((route) => {
                return (
                  route.element && (
                    <Route path={route.path} element={<route.element />} />
                  )
                );
              })}
              <Route path="/" element={<Navigate to="/" replace />} />
            </Routes>
          </Suspense>
        </Layout>
      </Content>
    </ContentWrap>
  );
}

const ContentWrap = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default React.memo(AppContent);
