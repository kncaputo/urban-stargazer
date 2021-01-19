import App from './index.jsx';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { fetchPictureFromDate } from '../apiCalls';
import { image1, filteredImage1, filteredImage2 } from '../sampleData';
jest.mock('../apiCalls');

describe('App', () => {
  const mockSavedImages = [filteredImage1, filteredImage2];
  const mockStringifyedImages = JSON.stringify(mockSavedImages);

  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: (() => mockStringifyedImages),
    },
    writable: true
  });

  beforeEach(() => {
    fetchPictureFromDate.mockResolvedValueOnce(image1)

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

  it('should render \'Discover\' component and random photo when user clicks the \'Discover\' nav link', async () => {
    await act(async () => {
      const discover = screen.getByText('Discover');
      userEvent.click(discover);
    });

    const img = screen.getByAltText('Jets from Unusual Galaxy Centaurus A from 2021-01-17');

    expect(img).toBeInTheDocument();
  });

  it('should render \'Saved\' component and saved photo cards when user clicks the \'Saved\' nav link', async () => {
    
    await act(async () => {
      const saved = screen.getByText('Saved');
      userEvent.click(saved);
    });

    const img = screen.getByAltText('Jets from Unusual Galaxy Centaurus A');
    const img2 = screen.getByAltText('Saturn Rings');

    expect(img).toBeInTheDocument();
    expect(img2).toBeInTheDocument();
  });
});