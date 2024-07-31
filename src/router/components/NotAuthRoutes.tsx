import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import { PATHS } from '@/constants/paths';

import GlobalSuspense from '@/components/globalSuspense';

const NotFoundView = lazy(() => import('@/view/notFound/NotFoundView'));

const Home = lazy(() => import('@/view/home/HomeView'));

const NotAuthRoutes = () => {
  return (
    <Routes>
      <Route
        path={PATHS.home}
        element={
          <Suspense fallback={<GlobalSuspense />}>
            <Home />
          </Suspense>
        }
      />

      <Route
        path="*"
        element={
          <Suspense fallback={<GlobalSuspense />}>
            <NotFoundView />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default NotAuthRoutes;
