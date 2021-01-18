import React from 'react';
import { act, render, screen, userEvent, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Discover from './index.jsx';
import { fetchPictureFromDate } from '../apiCalls';
import { filterData, saveToLocalStorage } from '../utilities';
import { image1, image2 } from '../sampleData';
import '@testing-library/jest-dom';
jest.mock('../apiCalls');

describe(('Discover'), () => {
  // saveToLocalStorage = jest.fn();

  beforeEach(async() => {
    fetchPictureFromDate.mockResolvedValueOnce(image1);
    
    await act(async () => {
      render(
        <Discover />
      )
    })
  });

  it('should render correctly', () => {
      const title = screen.getByText('Jets from Unusual Galaxy Centaurus A');
      const img = screen.getByAltText('Jets from Unusual Galaxy Centaurus A from 2021-01-17');
      const getLinkButton = screen.getByTestId('link-icon');
      const saveButton = screen.getByTestId('save-icon');
      const discoverAgainButton = screen.getByText('Discover Again');
      const explanation = screen.getByText('The jets are over a million light years long.');

      expect(fetchPictureFromDate).toHaveBeenCalled();
      expect(title).toBeInTheDocument();
      expect(img).toBeInTheDocument();
      expect(getLinkButton).toBeInTheDocument();
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