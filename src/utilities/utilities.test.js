import { saveToLocalStorage, filterData, generateRandomDate, getRandomValue } from './utilities';
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

    expect(typeof randomDate).toBe('string');
  });

  it('should return a string with a random value less than or equal to the param when given a multiple', () => {
    const randomValue1 = getRandomValue(20);
    const randomValue2 = getRandomValue(12);
    const randomValue3 = getRandomValue(28);

    expect(typeof randomValue1).toBe('string');
    expect(+randomValue1).toBeLessThanOrEqual(20);
    expect(+randomValue2).toBeLessThanOrEqual(12);
    expect(+randomValue3).toBeLessThanOrEqual(28);
  });
});