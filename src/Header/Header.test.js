import React from 'react';
import { act, render, screen, fireEvent } from '@testing-library/react';
import Header from './index.jsx';
import '@testing-library/jest-dom';

describe('Header', () => {
  beforeEach(() => {
    render(
      <Router>
        <Header />
      </Router>  
    );
  });

  it('should render correctly', () => {
    const home = screen.getByText('Urban Stargazer');
    const discoverNav = screen.getByText('Discover');
    const savedNav = screen.getByText('Saved');

    expect(home).toBeInTheDocument();
    expect(discoverNav).toBeInTheDocument();
    expect(savedNav).toBeInTheDocument();
  });
});