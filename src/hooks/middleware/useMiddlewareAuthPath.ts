import { useLocation } from 'react-router-dom';

import { PATHS } from '@/constants/paths';
import { useMemo } from 'react';

const allowPathname = [PATHS.auth.signIn, PATHS.auth.signUp];

const useMiddlewareAuthPath = () => {
  const { pathname } = useLocation();

  const isAllowPathname = useMemo(() => {
    return allowPathname.includes(pathname);
  }, [pathname]);

  return { isAllowPathname };
};

export default useMiddlewareAuthPath;
