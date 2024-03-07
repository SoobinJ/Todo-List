import React from 'react';

const Login = React.lazy(() => import('./pages/user/Login'));
const Home = React.lazy(() => import('./pages/home/Home'));
const AddToDo = React.lazy(() => import('./pages/home/AddToDo'));
const SignUp = React.lazy(() => import('./pages/user/SignUp'));

const routes = [
  { path: '/signin', name: 'Login', element: Login },
  { path: '/signup', name: 'SignUp', element: SignUp },
  { path: '/', name: 'Home', element: Home },
  { path: '/add', name: 'AddToDo', element: AddToDo },
];

export default routes;
