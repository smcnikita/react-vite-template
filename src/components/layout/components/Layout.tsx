import { useEffect, type ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

import Header from './Header';
import Main from './Main';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Header />

      <Main>{children}</Main>
    </>
  );
};

export default Layout;
