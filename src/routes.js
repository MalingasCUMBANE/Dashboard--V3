import { Navigate, useRoutes, Route } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import LogoOnlyLayout from './layouts/LogoOnlyLayout';
//
import Login from './pages/Login';
import DashboardApp from './pages/DashboardApp';
import OperacoesNaoConcluidas from './pages/OperacoesNaoConcluidas';
import Relatorios from './pages/Relatorios';
import OperacoesConcluidas from './pages/OperacoesConcluidas';

import NotFound from './pages/Page404';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'operacoesconcluidas', element: <OperacoesConcluidas /> },
        { path: 'operacoesnaoconcluidas', element: <OperacoesNaoConcluidas /> },
        { path: 'relatorios', element: <Relatorios /> }
      ]
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/dashboard', element: <Navigate to="/dashboard/app" /> },
        { path: '/', element: <Login /> },
        // { path: 'register', element: <Register /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to="/404" /> }
      ]
    },
    { path: '*', element: <Navigate to="/404" replace /> }
  ]);
}
