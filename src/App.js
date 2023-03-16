import React, { Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

const loading = <div>loading~</div>;

const Page404 = React.lazy(() => import('./pages/Page404'));
const Page500 = React.lazy(() => import('./pages/Page500'));
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={loading} />
      <Routes>
        <Route path="/404" element={<Page404 />} />
        <Route path="/500" element={<Page500 />} />
        <Route path="/*" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
