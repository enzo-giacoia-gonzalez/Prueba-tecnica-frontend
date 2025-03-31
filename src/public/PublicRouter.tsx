import { Suspense, lazy } from 'react';
import { Route } from "react-router-dom";

import { AppAuthRoutes } from "../models";
import { RoutesWithNotFound } from '../components/RoutesWithNotFound/RoutesWithNotFound';

// Lazy load the pages
const LoginApp = lazy(() => import('../pages/login/LoginApp').then(module => ({ default: module.LoginApp })));
const RegisterApp = lazy(() => import('../pages/register/RegisterApp').then(module => ({ default: module.RegisterApp })));

export const PublicRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RoutesWithNotFound>
        <Route path={AppAuthRoutes.auth.register} element={<RegisterApp />} />
        <Route path={AppAuthRoutes.auth.login} element={<LoginApp />} />
      </RoutesWithNotFound>
    </Suspense>
  );
};