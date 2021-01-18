import { saveToLocalStorage, filterData } from './index';
import { act, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { filteredImage1, filteredImage2 } from '../sampleData';

describe('utilities', () => {

  Object.defineProperty(window, 'localStorage', {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null),
      clear: jest.fn(() => null)
    },
    writable: true
  });

  it('should save to local storage when passed an array of images', () => {
    const images = [filteredImage1, filteredImage2];

    saveToLocalStorage(images);

    expect(localStorage.clear).toHaveBeenCalled();

    const stringifiedImages = JSON.stringify(images);

    expect(localStorage.setItem).toHaveBeenCalledWith('savedImages', stringifiedImages);
  });
});