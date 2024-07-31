import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Main from './../components/Main';

describe('Layout -> Main', () => {
  it('should render component', () => {
    render(
      <Main>
        <div>Hello!</div>
      </Main>
    );
    expect(screen.getByText('Hello!')).toBeInTheDocument();
  });
});
