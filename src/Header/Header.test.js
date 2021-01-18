// import React from 'react';
import Header from './index.jsx';
import { act, render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Header', () => {
  const history = createMemoryHistory();

  beforeEach(() => {
    render(
      <Router history={history} > 
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

  it('should link to home when \'Urban Stargazer\' is clicked', () => {
    const home = screen.getByText('Urban Stargazer');
    
    userEvent.click(home);

    expect(history.location.pathname).toBe('/home');
  });

  it('should link to home when \'Discover\' is clicked', () => {
    const discoverNav = screen.getByText('Discover');
    
    userEvent.click(discoverNav);

    expect(history.location.pathname).toBe('/discover');
  });

  it('should link to home when \'Saved\' is clicked', () => {
    const savedNav = screen.getByText('Saved');
    
    userEvent.click(savedNav);

    expect(history.location.pathname).toBe('/saved');
  });
});