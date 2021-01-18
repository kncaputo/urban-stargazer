import Home from './index.jsx';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('should render correctly', () => {
    render(
      <Home />
    );
    
    expect().toBeInTheDocument();
  });
});
