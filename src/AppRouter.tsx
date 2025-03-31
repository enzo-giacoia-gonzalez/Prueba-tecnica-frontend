import {  Navigate, Route } from 'react-router-dom'
import { AppAuthRoutes, AppRoutes } from './models'
import { PrivateRouter } from './private/PrivateRouter'
import { RoutesWithNotFound } from './components/RoutesWithNotFound/RoutesWithNotFound'
import { PublicGuard, PrivateGuard } from './guard'
import { PublicRouter } from './public/PublicRouter'


export const AppRouter = () => {
  return (
    
      <RoutesWithNotFound>
        <Route path="/" element={<Navigate to={AppRoutes.private.dashboard} />} />
        <Route element={<PrivateGuard />}>
          <Route path={`${AppRoutes.private.root}/*`} element={<PrivateRouter />} />
        </Route>
        <Route element={<PublicGuard />}>
          <Route path={`${AppAuthRoutes.auth.root}/*`} element={<PublicRouter />} />
        </Route>
      </RoutesWithNotFound >
    
  )
}
