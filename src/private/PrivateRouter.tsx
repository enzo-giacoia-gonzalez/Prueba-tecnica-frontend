import { Suspense, lazy } from 'react';
import { Route } from 'react-router-dom';
import { AppRoutes } from '../models/routes-model/routes.model';
import { RoutesWithNotFound } from '../components/RoutesWithNotFound/RoutesWithNotFound';

// Lazy load the pages
const Dashboard = lazy(() => import('../pages/dashboard/Dashboard').then(module => ({ default: module.Dashboard })));


export const PrivateRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RoutesWithNotFound>
        <Route path={AppRoutes.private.dashboard} element={<Dashboard />} />
        <Route path={AppRoutes.private.inicio} element={<Dashboard />} />
      </RoutesWithNotFound>
    </Suspense>
  );
};