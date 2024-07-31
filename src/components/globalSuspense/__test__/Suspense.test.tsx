import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Suspense from './../index';

describe('Suspense', () => {
  it('should render component', () => {
    render(<Suspense />);
    expect(screen.getByText('loading...')).toBeInTheDocument();
  });
});
