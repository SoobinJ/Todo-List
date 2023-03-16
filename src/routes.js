import React from 'react';

const Login = React.lazy(() => import('./pages/user/Login'));
const Home = React.lazy(() => import('./pages/home/Home'));

const routes = [
  { path: '/', name: 'Login', element: Login },
  { path: '/home', name: 'Home', element: Home },
];

export default routes;
