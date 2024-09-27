import type { ReactElement  } from 'react';
import { Navigate, useRoutes } from 'react-router-dom'
import Main from './Main';
import PrivacyPolicy from './apolo/PrivacyPolicy';

const Router = (): ReactElement | null => {
  const routes = useRoutes([
    {
      path: "/",
      element: <Main />,
    },
    {
      path: "/apolo/privacypolicy",
      element: <PrivacyPolicy />,
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ])

  return routes;
};

export default Router;
