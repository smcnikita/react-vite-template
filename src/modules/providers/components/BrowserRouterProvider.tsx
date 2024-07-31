import { BrowserRouter } from 'react-router-dom';

import type { ReactNode } from 'react';

const BrowserRouterProvider = ({ children }: { children: ReactNode }) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default BrowserRouterProvider;
