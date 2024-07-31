import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { RootStoreContextProvider } from '@/modules/providers';

import type { ReactNode } from 'react';

export const renderWithAllProviders = (component: ReactNode, options = {}) => {
  const Wrapper = ({ children }: { children: ReactNode }) => (
    <RootStoreContextProvider>
      <MemoryRouter {...options}>{children}</MemoryRouter>
    </RootStoreContextProvider>
  );

  return render(component, { wrapper: Wrapper });
};
