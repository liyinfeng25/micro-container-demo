import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    path: '/login',
    name: 'login',
    component: React.lazy(() => import('../pages/login.js'))
  },
  {
    path: '/home',
    name: 'home',
    component: React.lazy(() => import('../pages/home.js'))
  }
];
