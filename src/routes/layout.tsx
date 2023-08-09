import { Outlet, ScrollRestoration } from 'react-router-dom';

export const Layout = () => (
  <>
    <ScrollRestoration />
    <Outlet />
  </>
);
