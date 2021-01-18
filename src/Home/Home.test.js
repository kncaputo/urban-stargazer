import Home from './index.jsx';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

describe('Home', () => {
  it('should render correctly', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>  
    );
    
    expect().toBeInTheDocument();
  });
});
