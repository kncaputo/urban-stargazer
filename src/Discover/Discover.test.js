import Discover from './index.jsx';
import { act, render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom';
import { fetchPictureFromDate } from '../apiCalls';
import { image1, image2, filteredImage1 } from '../sampleData';
jest.mock('../apiCalls');

describe('Discover', () => {
  const mockSavedImages = [filteredImage1];
  const mockStringifyedImages = JSON.stringify(mockSavedImages);


  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: (() => mockStringifyedImages),
      setItem: jest.fn(() => null)
    },
    writable: true
  });
  
  beforeEach(async () => {
    fetchPictureFromDate.mockResolvedValue(image1);
    const history = createMemoryHistory();

    await act(async () => {
      render(
        <Router history={history}>
          <Discover />
        </Router>  
      );
    });
  });

  it('should render correctly', async () => {
      const title = screen.getByText('Jets from Unusual Galaxy Centaurus A');
      const img = screen.getByAltText('Jets from Unusual Galaxy Centaurus A from 2021-01-17');
      const saveButton = screen.getByTestId('save-icon');
      const discoverAgainButton = screen.getByText('Discover Again');
      const explanation = screen.getByText('The jets are over a million light years long.');

      expect(fetchPictureFromDate).toHaveBeenCalled();
      expect(title).toBeInTheDocument();
      expect(img).toBeInTheDocument();
      expect(saveButton).toBeInTheDocument();
      expect(discoverAgainButton).toBeInTheDocument();
      expect(explanation).toBeInTheDocument();
  });

  it('should render a new random image when Discover Again is clicked', async () => {
    fetchPictureFromDate.mockResolvedValueOnce(image2);
    
    await act(async () => {
      const discoverAgainButton = screen.getByText('Discover Again');
      fireEvent.click(discoverAgainButton);
    });

    const title = screen.getByText('Saturn Rings');
    const img = screen.getByAltText('Saturn Rings from 2020-12-11');
    const explanation = screen.getByText('The rings of Saturn burning bright');

    expect(title).toBeInTheDocument();
    expect(img).toBeInTheDocument();
    expect(explanation).toBeInTheDocument();
  });
});