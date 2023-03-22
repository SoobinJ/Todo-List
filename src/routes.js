import React from 'react';

const Login = React.lazy(() => import('./pages/user/Login'));
const Home = React.lazy(() => import('./pages/home/Home'));
const AddToDo = React.lazy(() => import('./pages/home/AddToDo'));

const routes = [
  { path: '/', name: 'Login', element: Login },
  { path: '/home', name: 'Home', element: Home },
  { path: '/add', name: 'AddToDo', element: AddToDo },
];

export default routes;
