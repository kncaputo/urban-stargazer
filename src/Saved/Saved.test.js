import Saved from './index.jsx';
import { act, render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { saveToLocalStorage } from '../utilities';
import { filteredImage1, filteredImage2 } from '../sampleData';
jest.mock('../utilities');

describe('Saved', () => {
  const mockSavedImages = [filteredImage1, filteredImage2];
  const mockStringifyedImages = JSON.stringify(mockSavedImages);

  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: (() => mockStringifyedImages),
      setItem: jest.fn(() => null)
    },
    writable: true
  });

  beforeEach(async () => {
    
    await act(async () => { 
      render(
        <Saved />
      );
    });
  });

  it('should render correctly and display saved images', () => {
    const img1 = screen.getByAltText('Jets from Unusual Galaxy Centaurus A');
    const img2 = screen.getByAltText('Saturn Rings');

    expect(img1).toBeInTheDocument();
    expect(img2).toBeInTheDocument();
  });
});