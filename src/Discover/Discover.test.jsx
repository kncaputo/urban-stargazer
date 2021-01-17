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
  
  beforeEach(() => {
    fetchPictureFromDate.mockResolvedValueOnce(image);
    
    act(() => {
      render(
        <Discover />
      )
    })
  });

  it('should render correctly', () => {
      const title = screen.getByText('Jets from Unusual Galaxy Centaurus A');
      const img = screen.getByAltText('')
      expect(fetchPictureFromDate).toHaveBeenCalled();
      expect(title).toBeInTheDocument();
  });
});