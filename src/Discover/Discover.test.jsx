import React from 'react';
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Discover from './index.jsx';
import { fetchPictureFromDate } from '../apiCalls';
// import { filterData, saveToLocalStorage } from '../utilities';
import { image } from '../sampleData';
import '@testing-library/jest-dom';
jest.mock('../apiCalls');

describe(('Discover'), () => {
  
  beforeEach(async() => {
    fetchPictureFromDate.mockResolvedValueOnce(image);
    
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

      expect(fetchPictureFromDate).toHaveBeenCalled();
      expect(title).toBeInTheDocument();
      expect(img).toBeInTheDocument();
      expect(getLinkButton).toBeInTheDocument();
      expect(saveButton).toBeInTheDocument();
      expect(discoverAgainButton).toBeInTheDocument();
  });
});