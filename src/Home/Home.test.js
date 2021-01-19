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
    
    const homeText = screen.getByTestId('home-text');
    const homeTitle = screen.getByTestId('home-title');
    const button = screen.getByText('Click to explore the cosmos');

    expect(homeText).toBeInTheDocument();
    expect(homeTitle).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
