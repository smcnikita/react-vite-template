import { render } from '@testing-library/react';

import { RootStoreContextProvider } from '@/modules/providers';

import type { ReactNode } from 'react';

export const renderWithRouter = (component: ReactNode, options = {}) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <RootStoreContextProvider {...options}>{children}</RootStoreContextProvider>
  );

  return render(component, { wrapper: Wrapper });
};
