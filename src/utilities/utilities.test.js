import { saveToLocalStorage, filterData, generateRandomDate } from './utilities';
import '@testing-library/jest-dom';
import { image1, filteredImage1, filteredImage2 } from '../sampleData';

describe('utilities', () => {

  Object.defineProperty(window, 'localStorage', {
    value: {
      setItem: jest.fn(() => null),
      clear: jest.fn(() => null)
    }
  });

  it('should save to local storage when passed an array of images', () => {
    const images = [filteredImage1, filteredImage2];

    saveToLocalStorage(images);

    expect(localStorage.clear).toHaveBeenCalled();

    const stringifiedImages = JSON.stringify(images);

    expect(localStorage.setItem).toHaveBeenCalledWith('savedImages', stringifiedImages);
  });

  it('should return filtered data when given raw input', () => {
    const filteredOutput = filterData(image1);

    expect(filteredOutput).toEqual(filteredImage1);
  });

  it('should generate random date', () => {
    const randomDate = generateRandomDate();

    expect(typeof randomDate).toBe('string')
  });

  it('should get random value when given a multiple', () => {
    
  });
});