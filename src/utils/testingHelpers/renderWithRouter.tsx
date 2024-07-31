import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import type { ReactNode } from 'react';

export const renderWithRouter = (component: ReactNode, options = {}) => {
  const Wrapper = ({ children }: { children: ReactNode }) => <MemoryRouter {...options}>{children}</MemoryRouter>;

  return render(component, { wrapper: Wrapper });
};
