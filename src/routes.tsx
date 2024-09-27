import type { ReactElement  } from 'react';
import { Navigate, useRoutes } from 'react-router-dom'
import Main from './Main';

const Router = (): ReactElement | null => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ])

  return routes;
};

export default Router;
