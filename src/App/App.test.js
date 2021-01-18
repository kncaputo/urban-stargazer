import App from './index.jsx';
import { act, render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import { fetchPictureFromDate } from '../apiCalls/apiCalls';
import { image1, image2 } from '../sampleData';
import { filterData, saveToLocalStorage } from '../utilities/utilities';
jest.mock('../apiCalls/apiCalls');

describe('App', () => {

  beforeEach(() => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>  
    );
  });

  it('should render correctly ', () => {
    //header
    const pageTitle = screen.getByText('Urban Stargazer');
    const discover = screen.getByText('Discover');
    const saved = screen.getByText('Saved');

    //footer
    const footerText = screen.getByText('Photos brought to you by NASA\'s Astronomy Picture of the Day archive');
    const footerLogo = screen.getByAltText('NASA logo');

    expect(pageTitle).toBeInTheDocument();
    expect(discover).toBeInTheDocument();
    expect(saved).toBeInTheDocument();

    expect(footerText).toBeInTheDocument();
    expect(footerLogo).toBeInTheDocument();
  });

  it('should render \'Discover\' component and random photo when user clicks \'Discover\' nav link', () => {
    
  })
});